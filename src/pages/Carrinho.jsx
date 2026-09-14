import ItemCarrinho from "../components/ItemCarrinho.jsx";
import ResumoCompra from "../components/ResumoCompra.jsx";
import { produtos } from "../data/produtos.js";
import { calcularTotalCentavos } from "../utils/carrinho.js";
import "./Carrinho.css";

/* Reúne os dados e os componentes da página do carrinho. */
function Carrinho() {
  const totalCentavos = calcularTotalCentavos(produtos);
  const quantidadeItens = produtos.reduce(
    (total, produto) => total + produto.quantidade,
    0,
  );

  return (
    <>
      {/* Apresenta o título principal da página. */}
      <section className="introducao" aria-labelledby="titulo-carrinho">
        <p className="etiqueta">SEU PRÓXIMO UPGRADE</p>
        <h1 id="titulo-carrinho">Seu carrinho</h1>
        <p className="descricao">
          Confira os acessórios escolhidos para o seu dia a dia.
        </p>
      </section>

      <div className="carrinho-layout">
        {/* Cada produto recebe uma instância do mesmo componente. */}
        <ul className="lista-produtos" aria-label="Produtos do carrinho">
          {produtos.map((produto) => (
            <ItemCarrinho key={produto.id} produto={produto} />
          ))}
        </ul>

        <ResumoCompra
          totalCentavos={totalCentavos}
          quantidadeItens={quantidadeItens}
        />
      </div>
    </>
  );
}

export default Carrinho;
