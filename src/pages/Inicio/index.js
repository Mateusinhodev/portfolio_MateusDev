import Home from "../Home";
import Sobre from "../Sobre";
import Skills from "../Habilidades";
import Projetos from "../Projetos";
import Experiencias from "../Experiencias";
import Contato from "../Contato";
import useTituloPagina from "../../hooks/useTituloPagina";

// Página inicial: todas as seções em sequência
export default function Inicio() {
    useTituloPagina(); // título padrão da aba

    return (
        <>
            <Home />
            <Sobre />
            <Skills />
            <Projetos />
            <Experiencias />
            <Contato />
        </>
    );
}
