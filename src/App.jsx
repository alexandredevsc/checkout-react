import "./App.css";

// Estrutura inicial da Loja; as páginas de checkout serão adicionadas por etapas.
function App() {
  return (
    <div className="loja">
      {/* Identidade da loja e contexto da experiência */}
      <header className="cabecalho">
        <a className="marca" href="/" aria-label="Órbita Tech - Início">
          <span className="marca-simbolo" aria-hidden="true">
            O
          </span>

          <span>Órbita Tech</span>
        </a>

        <span className="aviso-simulacao">Ambiente de demonstração</span>
      </header>

      {/* Conteúdo principal da página do carrinho. */}
      <main className="conteudo">
        <section className="introducao" aria-labelledby="titulo-carrinho">
          <p className="etiqueta">SEU PRÓXIMO UPGRADE</p>

          <h1 id="titulo-carrinho">Seu carrinho</h1>

          <p className="descricao">
            Confira os acessórios escolhidos para o seu dia a dia.
          </p>
        </section>
      </main>

      {/* Esclarece que o projeto não realiza cobranças. */}
      <footer className="rodape">
        <p>Órbita Tech - Projeto educacional SCTEC.</p>
        <p>Pagamento simulado. Utilize apenas dados fictícios.</p>
      </footer>
    </div>
  );
}

export default App;
