import Titulo from "../../components/Titulo";
import "./style.css";

const DESTAQUES = [
    {
        icone: "bx bx-code-alt",
        titulo: "Front-End",
        texto: "HTML, CSS, JavaScript e React",
    },
    {
        icone: "bx bx-server",
        titulo: "Back-End",
        texto: "Python, Django e Firebase",
    },
    {
        icone: "bx bx-book-open",
        titulo: "Estudando",
        texto: "React avançado e Firebase",
    },
];

export default function Sobre() {
    return (
        <section id="sobre" className="sobre" aria-labelledby="sobre-titulo">
            <Titulo id="sobre-titulo" nome="Sobre mim" />

            <div className="sobre-conteudo">
                <div className="sobre-imagem">
                    <img
                        src="https://i.imgur.com/GFJzwGw.jpeg"
                        alt="Mateus Rodrigues"
                        width="500"
                        height="500"
                        loading="lazy"
                    />
                </div>

                <div className="sobre-descricao">
                    <h3 className="sobre-subtitulo">
                        Desenvolvedor Front-End focado em boas experiências
                    </h3>

                    <p>
                        Sou um Desenvolvedor Front-End com foco em criar interfaces funcionais e
                        interativas, sempre buscando unir praticidade, clareza e uma boa
                        experiência para o usuário. Tenho domínio em HTML, CSS, JavaScript e
                        React, além de experiência com Bootstrap, Tailwind, Git, Firebase, Python
                        e Django.
                    </p>

                    <p>
                        Minha base em back-end foi fortalecida por meio de um trabalho
                        acadêmico, que ampliou minha visão sobre o desenvolvimento web de forma
                        mais completa. Atualmente, estou aprofundando meus conhecimentos em
                        React e explorando mais recursos do Firebase, com o objetivo de criar
                        aplicações modernas, eficientes e bem estruturadas.
                    </p>

                    <p>
                        Sou curioso, comprometido e apaixonado por aprender. Se você procura
                        alguém com iniciativa, técnica e vontade de fazer acontecer,{" "}
                        <strong>estou pronto para somar!</strong>
                    </p>

                    <ul className="sobre-destaques">
                        {DESTAQUES.map(({ icone, titulo, texto }) => (
                            <li key={titulo} className="destaque-card">
                                <i className={icone} aria-hidden="true"></i>
                                <div>
                                    <strong>{titulo}</strong>
                                    <span>{texto}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <a href="#contato" className="sobre-cta">
                        Vamos conversar
                        <i className="bx bx-right-arrow-alt" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}