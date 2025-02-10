import React from "react";
import imagemperfil from "../../assets/image-perfil.jpeg"
import icongithub from "../../assets/icon-github.png"
import iconlinkedin from "../../assets/icon-linkedin.png"
import iconinstragram from "../../assets/icon-instagram.png"
import icontwiter from "../../assets/icon-twiter.png"

import "./style.css"

function Apresentacao() {
    return(
        <div className="apresentacao-container">
            <h2 className="apresentacao-nome">Olá, eu sou o Mateus Rodrigues 👋</h2>
            <p className="apresentacao-introducao">Sou Mateus Rodrigues, desenvolvedor Front-End com domínio em React, JavaScript, com experiência em Python e Django. Atualmente, estudo React e Firebase para criar aplicações escaláveis. Focado em UI/UX Design, busco desenvolver soluções eficientes e intuitivas.</p>
            <CurriculoBtn/>
            <Social/>
        </div>
    );
}

function ImagemPerfil() {
    return(
        <div className="imagem-container">
            <img className="imagem-perfil" src={imagemperfil} alt='Imagem de perfil'/>
        </div>
    );
}

function CurriculoBtn() {
    return(
        <button className="curriculo-btn">Download CV</button>
    );
}

function Social() {
    return(
        <div className="social-container">
            <img className="social-icon" src={icongithub} alt=''/>
            <img className="social-icon" src={iconlinkedin} alt=''/>
            <img className="social-icon" src={iconinstragram} alt=''/>
            <img className="social-icon" src={icontwiter} alt=''/>
        </div>
    )
}

export default function Home() {
    return(
        <div className="home-container">
            <Apresentacao/>
            <ImagemPerfil/>
        </div>
    );
}