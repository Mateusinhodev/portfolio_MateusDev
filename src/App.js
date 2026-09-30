import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Skills from "./pages/Habilidades";
import Projetos from "./pages/Projetos";
import Experiencias from "./pages/Experiencias";
import Contato from "./pages/Contato";
import Footer from "./pages/Footer";

export default function App() {
    return (
        <>
            {/* Atalho para quem navega pelo teclado pular direto ao conteúdo */}
            <a href="#conteudo" className="pular-conteudo">
                Pular para o conteúdo
            </a>

            <Header />

            <main id="conteudo">
                <Home />
                <Sobre />
                <Skills />
                <Projetos />
                <Experiencias />
                <Contato />
            </main>

            <Footer />
        </>
    );
}