import "./App.css";
import "./styles/paginas.css";

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./pages/Footer";
import ScrollManager from "./components/ScrollManager";
import Inicio from "./pages/Inicio";
import NaoEncontrada from "./pages/NaoEncontrada";

// Carregadas só quando a pessoa abre a biblioteca ou um projeto,
// para a página inicial continuar leve
const Biblioteca = lazy(() => import("./pages/Biblioteca"));
const ProjetoDetalhe = lazy(() => import("./pages/ProjetoDetalhe"));

export default function App() {
    return (
        <>
            <a href="#conteudo" className="pular-conteudo">
                Pular para o conteúdo
            </a>

            <ScrollManager />
            <Header />

            <main id="conteudo">
                <Suspense fallback={<div className="pagina-carregando" />}>
                    <Routes>
                        <Route path="/" element={<Inicio />} />
                        <Route path="/projetos" element={<Biblioteca />} />
                        <Route path="/projetos/:slug" element={<ProjetoDetalhe />} />
                        <Route path="*" element={<NaoEncontrada />} />
                    </Routes>
                </Suspense>
            </main>

            <Footer />
        </>
    );
}
