import React from "react";
import imagemperfil from "../../assets/image-perfil.jpeg";
import curriculo from "../../assets/curriculo.pdf";
import "./style.css";

function Apresentacao() {
  return (
    <section className="home" id="home">
      <div className="home-container">
          <h1>Olá, sou Mateus Rodrigues</h1>
          <h3 className="text-animation">Programador Front-End</h3>
          <p> Atuo no desenvolvimento frontend, criando interfaces interativas e funcionais com JavaScript e React. Tenho também experiência com Python e Django, o que amplia minha visão e versatilidade em projetos web. Este portfólio reúne trabalhos que refletem minha evolução técnica e meu entusiasmo por tecnologia. </p>
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
        <a href="https://github.com/Mateusinhodev"><i class='bx bxl-github' ></i></a>
        <a href="https://github.com/Mateusinhodev"><i class='bx bxl-twitter' ></i></a>
        <a href="https://www.instagram.com/mateus.mt11/"><i class='bx bxl-instagram-alt' ></i></a>
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