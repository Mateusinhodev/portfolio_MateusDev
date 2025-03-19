import React from "react";
import imagemsobremim from "../../assets/imagem-sobremim.jpg"
import Titulo from "../../components/Titulo";
import "./style.css"

export default function Sobre() {
    return(
        <div id="sobre" className="sobre-container">
            <Titulo nome={"SOBRE MIM"}/>
            <div className="sobre-conteudo">
                <img className="sobre-imagem" src={imagemsobremim} alt=''/>
                <div className="sobre-descricao">
                    <h2 className="sobre-subtitulo">Curioso sobre mim? Aqui está:</h2>
                    <p className="sobre-texto">Sou um Desenvolvedor Front-End com foco em tecnologia e inovação. Minha missão é transformar ideias em interfaces intuitivas, responsivas e visualmente impactantes, proporcionando experiências eficientes para os usuários. Sou domínio em HTML, CSS, JavaScript, React e Git, além de ter experiência com Python e Django. Atualmente, estou aprofundando meus conhecimentos em React e Firebase, explorando novas formas de otimizar o desenvolvimento de aplicações modernas e escaláveis. <br/><br/> Além do desenvolvimento, sou entusiasta de UI/UX Design, sempre buscando criar interfaces atraentes e funcionais. Meu maior objetivo é desenvolver sistemas e sites que realmente ajudem as pessoas e façam a diferença. Sou um profissional esforçado e comprometido, sempre em busca de novos desafios e oportunidades para crescer. Se você precisa de um desenvolvedor que une técnica, criatividade e foco em resultados, vamos conversar!</p>
                </div>
            </div>
        </div>
    ); 
}