import { formatarMoeda } from "../utils/carrinho.js";

/* Compartilha a apresentação do total entre carrinho e pagamento. */

function ResumoCompra({ totalCentavos, quantidadeItens }) {
  return (
    <section className="resumo-compra" aria-labelledby="titulo-resumo">
      <h2 id="titulo-resumo">Resumo da compra</h2>

      <dl className="resumo-valores">
        <div>
          <dt>Unidades</dt>
          <dd>{quantidadeItens}</dd>
        </div>

        <div>
          <dt>Total</dt>
          <dd className="resumo-total">{formatarMoeda(totalCentavos)}</dd>
        </div>
      </dl>

      <p className="resumo-aviso"> Compra demonstrativa, sem cobrança real.</p>
    </section>
  );
}

export default ResumoCompra;
