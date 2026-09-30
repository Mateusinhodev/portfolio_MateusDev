import Titulo from "../../components/Titulo";
import "./style.css";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// Ícones das tecnologias (reaproveitados em todos os projetos)
const TECNOLOGIAS = {
    JavaScript: `${DEVICON}/javascript/javascript-original.svg`,
    React: `${DEVICON}/react/react-original.svg`,
    Python: `${DEVICON}/python/python-original.svg`,
    Django: `${DEVICON}/django/django-plain.svg`,
    SQLite: `${DEVICON}/sqlite/sqlite-original.svg`,
    Firebase: `${DEVICON}/firebase/firebase-original.svg`,
};

// Logos escuros que precisam ficar brancos no fundo escuro
const ICONES_CLAROS = ["Django"];

// Para adicionar um projeto, inclua um item aqui.
// "site" e "codigo" são opcionais: o botão só aparece se o link existir.
const PROJETOS = [
    {
        titulo: "Livraria Digital",
        descricao:
            "Busque livros, veja descrição e capa, salve seus favoritos e pesquise mais informações no Google, com uma navegação rápida e intuitiva.",
        imagem: "https://i.imgur.com/F9Ut6xd.jpeg",
        tecnologias: ["JavaScript", "React"],
        site: "https://livraria-sepia-ten.vercel.app/",
        codigo: "",
    },
    {
        titulo: "Controle de Acesso aos Laboratórios – IFTO",
        descricao: "", // TODO: escreva uma frase sobre o que o sistema faz
        imagem: "https://i.imgur.com/XTpUjkR.jpeg",
        tecnologias: ["Python", "Django", "SQLite"],
        site: "",
        codigo: "https://github.com/Mateusinhodev/Labin-IFTO",
    },
    {
        titulo: "Fácil Gestão",
        descricao: "", // TODO: escreva uma frase sobre o que o sistema faz
        imagem: "https://i.imgur.com/HvcF00r.png",
        tecnologias: ["JavaScript", "React", "Firebase"],
        site: "https://facilgestao.netlify.app/login",
        codigo: "",
    },
];

function ProjetoCard({ titulo, descricao, imagem, tecnologias, site, codigo }) {
    return (
        <li className="projeto-card">
            <div className="projeto-imagem">
                <img
                    src={imagem}
                    alt={`Captura de tela do projeto ${titulo}`}
                    loading="lazy"
                />
            </div>

            <div className="projeto-corpo">
                <h3 className="projeto-titulo">{titulo}</h3>

                {descricao && <p className="projeto-descricao">{descricao}</p>}

                <ul className="projeto-tecnologias" aria-label="Tecnologias usadas">
                    {tecnologias.map((tec) => (
                        <li key={tec} className="tecnologia">
                            <img
                                src={TECNOLOGIAS[tec]}
                                alt=""
                                width="18"
                                height="18"
                                className={ICONES_CLAROS.includes(tec) ? "icone-claro" : ""}
                            />
                            {tec}
                        </li>
                    ))}
                </ul>

                <div className="projeto-links">
                    {site && (
                        <a
                            href={site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projeto-btn projeto-btn-primario"
                            aria-label={`Ver o site do projeto ${titulo} (abre em nova aba)`}
                        >
                            <i className="bx bx-link-external" aria-hidden="true"></i>
                            Ver site
                        </a>
                    )}
                    {codigo && (
                        <a
                            href={codigo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projeto-btn projeto-btn-secundario"
                            aria-label={`Ver o código do projeto ${titulo} no GitHub (abre em nova aba)`}
                        >
                            <i className="bx bxl-github" aria-hidden="true"></i>
                            Código
                        </a>
                    )}
                </div>
            </div>
        </li>
    );
}

export default function Projetos() {
    return (
        <section id="projetos" className="projetos" aria-labelledby="projetos-titulo">
            <Titulo
                id="projetos-titulo"
                nome="Projetos"
                subtitulo="Alguns trabalhos que desenvolvi recentemente"
            />

            <ul className="projetos-grid">
                {PROJETOS.map((projeto) => (
                    <ProjetoCard key={projeto.titulo} {...projeto} />
                ))}
            </ul>

            <div className="projetos-mais">
                <a
                    href="https://github.com/Mateusinhodev?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projeto-btn projeto-btn-secundario"
                >
                    <i className="bx bxl-github" aria-hidden="true"></i>
                    Ver mais no GitHub
                </a>
            </div>
        </section>
    );
}