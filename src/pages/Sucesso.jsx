import { Link } from "react-router-dom";

/* Apresenta a confirmação da compra simulada. */
function Sucesso() {
  return (
    <section className="introducao" aria-labelledby="titulo-sucesso">
      <p className="etiqueta">PEDIDO CONFIRMADO</p>
      <h1 id="titulo-sucesso">Compra aprovada!</h1>
      <p className="descricao">
        Sua compra simulada foi concluída. Nenhuma cobrança foi realizada.
      </p>

      <Link className="botao-primario" to="/">
        Voltar ao carrinho
      </Link>
    </section>
  );
}

export default Sucesso;
