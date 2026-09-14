import { Link } from "react-router-dom";
import ResumoCompra from "../components/ResumoCompra.jsx";
import { produtos } from "../data/produtos.js";
import { calcularTotalCentavos } from "../utils/carrinho.js";
import "./Carrinho.css";

/* Mantém os mesmos valores do ca[rrinho na etapa de pagamento. */

function Pagamento() {
  const totalCentavos = calcularTotalCentavos(produtos);
  const quantidadeItens = produtos.reduce(
    (total, produto) => total + produto.quantidade,
    0,
  );

  return (
    <>
      <section className="introducao" aria-labelledby="titulo-pagamento">
        <p className="etiqueta">FINALIZE SEU PEDIDO</p>
        <h1 id="titulo-pagamento">Pagamento</h1>
        <p className="descricao">
          Utilize apenas dados fictícios nesta demonstração.
        </p>
      </section>

      <div className="carrinho-layout">
        {/* O forumulário será implementado na próxima etapa. */}

        <section aria-labelledby="titulo-dados">
          <h2 id="titulo-dados">Dados do cartão</h2>
          <p>O formulário de pagamento será adicionado nesta área.</p>
          <Link className="botao-secundario" to="/">
            Voltar ao carrinho
          </Link>
        </section>

        <ResumoCompra
          totalCentavos={totalCentavos}
          quantidadeItens={quantidadeItens}
        />
      </div>
    </>
  );
}

export default Pagamento;
