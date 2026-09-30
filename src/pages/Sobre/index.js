import Titulo from "../../components/Titulo";
import "./style.css";

const DESTAQUES = [
    {
        icone: "bx bx-code-alt",
        titulo: "Front-End",
        texto: "JavaScript, React e TypeScript",
    },
    {
        icone: "bx bx-server",
        titulo: "Back-End",
        texto: "Python, Django e Firebase",
    },
    {
        icone: "bx bx-chalkboard",
        titulo: "Docência",
        texto: "Professor de Informática no IFTO",
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
                        Desenvolvedor Front-End e Professor de Informática
                    </h3>

                    <p>
                        Sou Desenvolvedor Front-End com domínio em JavaScript e React e experiência com
                        TypeScript. Gosto de criar interfaces que sejam bonitas, mas principalmente fáceis de
                        usar: código organizado, componentes reutilizáveis e atenção à acessibilidade e à
                        experiência de quem está do outro lado da tela.
                    </p>

                    <p>
                        Sou formado em Ciências da Computação pelo IFTO, onde também tive contato com o
                        back-end usando Python e Django, por exemplo desenvolvendo um sistema de controle de
                        acesso aos laboratórios da instituição. Hoje atuo como Professor de Informática no
                        IFTO, e ensinar me fez desenvolver algo que levo para cada projeto: a capacidade de
                        explicar o complexo de forma simples e de trabalhar bem em equipe.
                    </p>

                    <p>
                        Sou curioso, comprometido e estou sempre aprendendo. Busco oportunidades para criar
                        produtos reais ao lado de times que valorizam qualidade. Se você tem um projeto ou uma
                        vaga em mente, <strong>vamos conversar!</strong>
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