import { useEffect, useState } from "react";
import curriculo from "../../assets/curriculo.pdf";
import "./style.css";

const CARGOS = [
    "Programador Front-End",
    "Desenvolvedor React",
    "Python & Django",
];

const SOCIAIS = [
    {
        nome: "LinkedIn",
        url: "https://www.linkedin.com/in/mateus-rodrigues-a47002264/",
        icone: "bx bxl-linkedin-square",
    },
    {
        nome: "GitHub",
        url: "https://github.com/Mateusinhodev",
        icone: "bx bxl-github",
    },
    // Coloque o link do seu X/Twitter e descomente:
    // {
    //     nome: "X (Twitter)",
    //     url: "https://x.com/SEU_USUARIO",
    //     icone: "bx bxl-twitter",
    // },
    {
        nome: "Instagram",
        url: "https://www.instagram.com/mateus.mt11/",
        icone: "bx bxl-instagram-alt",
    },
];

// Efeito de digitação que alterna entre as palavras
function useTypewriter(palavras, { digitar = 80, apagar = 45, pausa = 1600 } = {}) {
    const [reduzirMovimento] = useState(
        () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    const [indice, setIndice] = useState(0);
    const [texto, setTexto] = useState("");
    const [apagando, setApagando] = useState(false);

    useEffect(() => {
        if (reduzirMovimento) return;

        const atual = palavras[indice];
        let timeout;

        if (!apagando && texto === atual) {
            timeout = setTimeout(() => setApagando(true), pausa);
        } else if (apagando && texto === "") {
            setApagando(false);
            setIndice((i) => (i + 1) % palavras.length);
        } else {
            const proximo = atual.slice(0, texto.length + (apagando ? -1 : 1));
            timeout = setTimeout(() => setTexto(proximo), apagando ? apagar : digitar);
        }

        return () => clearTimeout(timeout);
    }, [texto, apagando, indice, palavras, digitar, apagar, pausa, reduzirMovimento]);

    return reduzirMovimento ? palavras[0] : texto;
}

function Cargo() {
    const texto = useTypewriter(CARGOS);

    return (
        <p className="home-cargo">
            {/* Leitores de tela leem o texto fixo, sem a animação */}
            <span className="sr-only">{CARGOS[0]}</span>
            <span aria-hidden="true">
                {texto}
                <span className="cursor">|</span>
            </span>
        </p>
    );
}

function Social() {
    return (
        <ul className="social-icons">
            {SOCIAIS.map(({ nome, url, icone }) => (
                <li key={nome}>
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={nome}>
                        <i className={icone} aria-hidden="true"></i>
                    </a>
                </li>
            ))}
        </ul>
    );
}

function Acoes() {
    return (
        <div className="home-acoes">
            <a href="#projetos" className="btn btn-primario">
                Ver projetos
            </a>
            <a href={curriculo} download="Curriculo-Mateus-Rodrigues.pdf" className="btn btn-secundario">
                <i className="bx bx-download" aria-hidden="true"></i>
                Baixar CV
            </a>
        </div>
    );
}

function ImagemPerfil() {
    return (
        <div className="home-img">
            <img
                src="https://i.imgur.com/uGPSNbZ.jpeg"
                alt="Foto de Mateus Rodrigues"
                width="350"
                height="350"
            />
        </div>
    );
}

export default function Apresentacao() {
    return (
        <section className="home" id="home">
            <div className="home-container">
                <h1>
                    Olá, sou <span className="destaque">Mateus Rodrigues</span>
                </h1>
                <Cargo />
                <p className="home-descricao">
                    Atuo no desenvolvimento front-end, criando interfaces interativas e
                    funcionais com JavaScript e React. Tenho também experiência com Python e
                    Django, o que amplia minha visão e versatilidade em projetos web. Este
                    portfólio reúne trabalhos que refletem minha evolução técnica e meu
                    entusiasmo por tecnologia.
                </p>
                <Acoes />
                <Social />
            </div>
            <ImagemPerfil />
        </section>
    );
}