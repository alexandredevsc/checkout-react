import { calcularSubtotalCentavos, formatarMoeda } from "../utils/carrinho.js";

/* Recebe um produto por props e apresenta seus dados e subtotal */

function ItemCarrinho({ produto }) {
  const precoUnitarioCentavos = Math.round(produto.precoUnitario * 100);
  const subtotalCentavos = calcularSubtotalCentavos(produto);

  return (
    <li className="item-carrinho">
      {/*Identifica o produto dentro da lista do carrinho.*/}
      <h2 className="item-carrinho-nome">{produto.nome}</h2>

      {/*Relaciona cada informação ao seu respectivo valor.*/}
      <dl className="item-carrinho-dados">
        <div>
          <dt>Preço unitário</dt>
          <dd>{formatarMoeda(precoUnitarioCentavos)}</dd>
        </div>

        <div>
          <dt>Quantidade</dt>
          <dd>{produto.quantidade}</dd>
        </div>

        <div>
          <dt>Subtotal</dt>
          <dd>{formatarMoeda(subtotalCentavos)}</dd>
        </div>
      </dl>
    </li>
  );
}

export default ItemCarrinho;
