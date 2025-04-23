import React from "react";
// import imagemsobremim from "../../assets/imagem-sobremim.jpg"
import Titulo from "../../components/Titulo";
import "./style.css"

export default function Sobre() {
    return(
        <div id="sobre" className="sobre-container">
            <Titulo nome={"SOBRE MIM"}/>
            <div className="sobre-conteudo">
                <img className="sobre-imagem" src="https://i.imgur.com/GFJzwGw.jpeg" alt=''/>
                <div className="sobre-descricao">
                    <h2 className="sobre-subtitulo">Gostaria de saber mais sobre mim? Aqui está:</h2>
                    <p className="sobre-texto">Sou um Desenvolvedor Front-End com foco em criar interfaces funcionais e interativas, sempre buscando unir praticidade, clareza e uma boa experiência para o usuário. Tenho domínio em HTML, CSS, JavaScript e React, além de experiência com Bootstrap, Tailwind, Git, Firebase, Python e Django. Minha base em backend foi fortalecida por meio de um trabalho acadêmico, que ampliou minha visão sobre o desenvolvimento web de forma mais completa.
<br/><br/>
Atualmente, estou aprofundando meus conhecimentos em React e explorando mais recursos do Firebase, com o objetivo de criar aplicações modernas, eficientes e bem estruturadas. Sou curioso, comprometido e apaixonado por aprender, sempre em busca de evoluir e encarar novos desafios que me façam crescer como profissional. Se você procura alguém com iniciativa, técnica e vontade de fazer acontecer, estou pronto para somar!</p>
                </div>
            </div>
        </div>
    ); 
}