import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ResumoCompra from "../components/ResumoCompra.jsx";
import { produtos } from "../data/produtos.js";
import { calcularTotalCentavos } from "../utils/carrinho.js";
import { pagamentoSchema } from "../utils/pagamento.js";
import { usePagamento } from "../hooks/usePagamento.js";
import "./Carrinho.css";
import "./Pagamento.css";

/* Valida os dados fictícios e encaminha ao resultado da simulação. */
function Pagamento() {
  const navigate = useNavigate();
  const [erroProcessamento, setErroProcessamento] = useState("");
  const { processando, processarPagamento } = usePagamento();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(pagamentoSchema),
    defaultValues: {
      titular: "",
      numero: "",
      validade: "",
      cvv: "",
    },
  });

  const ocupado = processando || isSubmitting;
  const totalCentavos = calcularTotalCentavos(produtos);
  const quantidadeItens = produtos.reduce(
    (total, produto) => total + produto.quantidade,
    0,
  );

  /* Só recebe os dados quando o formulário passa pela validação. */
  async function finalizarCompra(dados) {
    setErroProcessamento("");

    try {
      const resultado = await processarPagamento(dados.numero);

      if (resultado) {
        navigate(`/${resultado}`);
      }
    } catch {
      setErroProcessamento(
        "Não foi possível processar a compra. Tente novamente.",
      );
    }
  }

  return (
    <>
      <section className="introducao" aria-labelledby="titulo-pagamento">
        <p className="etiqueta">FINALIZE SEU PEDIDO</p>
        <h1 id="titulo-pagamento">Pagamento</h1>
        <p className="descricao">
          Utilize apenas dados fictícios. Nenhuma cobrança será realizada.
        </p>
      </section>

      <div className="carrinho-layout">
        {/* O React Hook Form controla o envio e os erros de cada campo. */}
        <form
          className="formulario-pagamento"
          onSubmit={handleSubmit(finalizarCompra)}
          noValidate
          autoComplete="off"
          aria-labelledby="titulo-dados"
          aria-busy={ocupado}
        >
          <h2 id="titulo-dados">Dados do cartão</h2>

          <fieldset disabled={ocupado} className="campos-pagamento">
            <legend className="legenda-pagamento">
              Todos os campos são obrigatórios.
            </legend>

            <div className="campo">
              <label htmlFor="titular">Nome do titular</label>
              <input
                id="titular"
                type="text"
                placeholder="Ex.: Maria Silva"
                required
                aria-invalid={Boolean(errors.titular)}
                aria-describedby={errors.titular ? "erro-titular" : undefined}
                {...register("titular")}
              />
              {errors.titular && (
                <p id="erro-titular" className="erro-campo" role="alert">
                  {errors.titular.message}
                </p>
              )}
            </div>

            <div className="campo">
              <label htmlFor="numero">Número do cartão</label>
              <input
                id="numero"
                type="text"
                inputMode="numeric"
                placeholder="1234 5678 9012 3456"
                required
                aria-invalid={Boolean(errors.numero)}
                aria-describedby={
                  errors.numero ? "ajuda-numero erro-numero" : "ajuda-numero"
                }
                {...register("numero")}
              />
              <small id="ajuda-numero">
                16 dígitos. Espaços e hífens são aceitos.
              </small>
              {errors.numero && (
                <p id="erro-numero" className="erro-campo" role="alert">
                  {errors.numero.message}
                </p>
              )}
            </div>

            <div className="campos-duplos">
              <div className="campo">
                <label htmlFor="validade">Validade</label>
                <input
                  id="validade"
                  type="text"
                  placeholder="MM/AA"
                  required
                  aria-invalid={Boolean(errors.validade)}
                  aria-describedby={
                    errors.validade ? "erro-validade" : undefined
                  }
                  {...register("validade")}
                />
                {errors.validade && (
                  <p id="erro-validade" className="erro-campo" role="alert">
                    {errors.validade.message}
                  </p>
                )}
              </div>

              <div className="campo">
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  type="password"
                  inputMode="numeric"
                  placeholder="123"
                  required
                  aria-invalid={Boolean(errors.cvv)}
                  aria-describedby={errors.cvv ? "erro-cvv" : undefined}
                  {...register("cvv")}
                />
                {errors.cvv && (
                  <p id="erro-cvv" className="erro-campo" role="alert">
                    {errors.cvv.message}
                  </p>
                )}
              </div>
            </div>
          </fieldset>

          {/* Anuncia o processamento e impede novos envios pela interface. */}
          <p className="status-pagamento" role="status">
            {ocupado ? "Processando compra…" : ""}
          </p>

          {erroProcessamento && (
            <p className="erro-campo" role="alert">
              {erroProcessamento}
            </p>
          )}

          <button className="botao-primario" type="submit" disabled={ocupado}>
            {ocupado ? "Aguarde…" : "Confirmar pagamento"}
          </button>

          <Link className="voltar-pagamento" to="/">
            Voltar ao carrinho
          </Link>
        </form>

        <ResumoCompra
          totalCentavos={totalCentavos}
          quantidadeItens={quantidadeItens}
        />
      </div>
    </>
  );
}

export default Pagamento;
