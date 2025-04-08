import React from "react";
import imagemperfil from "../../assets/image-perfil.jpeg";
import curriculo from "../../assets/curriculo.pdf";
import "./style.css";

function Apresentacao() {
  return (
    <section className="home" id="home">
      <div className="home-container">
          <h1>Olá, sou Mateus Rodrigues</h1>
          <h3 className="text-animation">Eu sou <span></span></h3>
          <p>
            Desenvolvedor Front-End com domínio em React, JavaScript, com experiência em Python e Django. Atualmente, estudo React e Firebase para criar aplicações escaláveis. Focado em UI/UX Design, busco desenvolver soluções eficientes e intuitivas.
          </p>
          <Social />
          <CurriculoBtn />
      </div>
      <ImagemPerfil />
    </section>
    
  );
}

function ImagemPerfil() {
  return (
    <div className="home-img">
      <img src={imagemperfil} alt="Imagem de perfil" />
    </div>
  );
}

function Social() {
  return (
    <div className="social-icons">
        <a href="https://www.linkedin.com/in/mateus-rodrigues-a47002264/"><i class='bx bxl-linkedin-square'></i></a>
        <a href="https://www.linkedin.com/in/mateus-rodrigues-a47002264/"><i class='bx bxl-github' ></i></a>
        <a href="https://www.linkedin.com/in/mateus-rodrigues-a47002264/"><i class='bx bxl-twitter' ></i></a>
        <a href="https://www.linkedin.com/in/mateus-rodrigues-a47002264/"><i class='bx bxl-instagram-alt' ></i></a>
    </div>
  );
}

function CurriculoBtn() {
  return (
    <div className="btn-curriculo">
      <a href={curriculo} download="curriculo">Download CV</a>
    </div>
  );
}

export default Apresentacao;