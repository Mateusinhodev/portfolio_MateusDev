import React from "react";
import imagemperfil from "../../assets/image-perfil.jpeg";
import curriculo from "../../assets/curriculo.pdf";
import "./style.css";

function Apresentacao() {
  return (
    <div className="home-container">
      <div className="apresentacao-container">
        <h1 className="apresentacao-nome">Olá, eu sou o Mateus Rodrigues 👋</h1>
        <p className="apresentacao-introducao">
          Sou Mateus Rodrigues, desenvolvedor Front-End com domínio em React, JavaScript, com experiência em Python e Django. Atualmente, estudo React e Firebase para criar aplicações escaláveis. Focado em UI/UX Design, busco desenvolver soluções eficientes e intuitivas.
        </p>
        {/* <CurriculoBtn /> */}
        {/* <Social /> */}
      </div>
      <ImagemPerfil />
    </div>
  );
}

function ImagemPerfil() {
  return (
    <div className="imagem-container">
      <img className="imagem-perfil" src={imagemperfil} alt="Imagem de perfil" />
      <div class="designation">Desenvolvedor Front End</div>
      <p>mateusdev23@gmail.com</p>
      <Social/>
      <CurriculoBtn />
    </div>
  );
}

function CurriculoBtn() {
  return (
    <button className="curriculo-btn">
      <a href={curriculo} download="curriculo">Download CV</a>
    </button>
  );
}

function Social() {
  return (
    <div className="social-container">
        {/* GitHub */}
        <a
            href="https://github.com/Mateusinhodev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors duration-300 hover:text-blue-700"
        >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
            <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.52285,0 -10,4.47715 -10,10c0,5.52285 4.47715,10 10,10c5.52285,0 10,-4.47715 10,-10c0,-5.52285 -4.47715,-10 -10,-10z" opacity="0.3"></path><path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path></g></g>
            </svg>
        </a>
        
        {/* LinkedIn */}
        <a
            href="https://www.linkedin.com/in/mateus-rodrigues-a47002264/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors duration-300 hover:text-blue-700"
        >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
            <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
            </svg>
        </a>


        {/* Instagram */}
        <a
            href="https://www.instagram.com/mateus.mt11/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors duration-300 hover:text-blue-700"
        >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
            <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(10.66667,10.66667)"><path d="M8,3c-2.761,0 -5,2.239 -5,5v8c0,2.761 2.239,5 5,5h8c2.761,0 5,-2.239 5,-5v-8c0,-2.761 -2.239,-5 -5,-5zM18,5c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM12,7c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5zM12,9c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3z"></path></g></g>
            </svg>
        </a>

        {/* Twiter */}
        <a
            href="https://x.com/MateusinhoDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors duration-300 hover:text-blue-700"
        >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
            <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z"></path></g></g>
            </svg>
        </a>
    </div>
  );
}

export default Apresentacao;