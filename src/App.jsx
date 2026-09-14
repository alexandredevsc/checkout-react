import { Link, Route, Routes } from "react-router-dom";
import Carrinho from "./pages/Carrinho.jsx";
import Pagamento from "./pages/Pagamento.jsx";
import Sucesso from "./pages/Sucesso.jsx";
import Falha from "./pages/Falha.jsx";
import "./App.css";

/* Compartilha o layout e seleciona a página conforme o endereço. */
function App() {
  return (
    <div className="loja">
      {/* O Link navega sem recarregar toda a aplicação. */}
      <header className="cabecalho">
        <Link className="marca" to="/" aria-label="Órbita Tech - Início">
          <span className="marca-simbolo" aria-hidden="true">
            O
          </span>
          <span>Órbita Tech</span>
        </Link>

        <span className="aviso-simulacao">Ambiente de demonstração</span>
      </header>

      <main className="conteudo">
        <Routes>
          <Route path="/" element={<Carrinho />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/sucesso" element={<Sucesso />} />
          <Route path="/falha" element={<Falha />} />

          {/* Oferece um retorno quando o endereço não existe. */}
          <Route
            path="*"
            element={
              <section className="introducao">
                <h1>Página não encontrada</h1>
                <Link className="botao-primario" to="/">
                  Voltar ao carrinho
                </Link>
              </section>
            }
          />
        </Routes>
      </main>

      <footer className="rodape">
        <p>Órbita Tech - Projeto educacional SCTEC.</p>
        <p>Pagamento simulado. Utilize apenas dados fictícios.</p>
      </footer>
    </div>
  );
}

export default App;