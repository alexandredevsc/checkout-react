import { Link } from "react-router-dom";

/* Exibe a mensagem exata exigida pela regra da simulação. */
function Falha() {
  return (
    <section className="introducao" aria-labelledby="titulo-falha">
      <p className="etiqueta">COMPRA NÃO APROVADA</p>
      <h1 id="titulo-falha">tentativa de golpe</h1>
      <p className="descricao">
        O cartão informado foi recusado pela regra desta simulação.
      </p>

      <Link className="botao-primario" to="/pagamento">
        Tentar novamente
      </Link>
    </section>
  );
}

export default Falha;
