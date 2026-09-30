import { useRef, useState } from "react";
import Titulo from "../../components/Titulo";
import "./style.css";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// Para adicionar uma skill nova, basta incluir um item na categoria certa.
// "claro: true" deixa o ícone branco (útil para logos escuros, como o do Django).
const CATEGORIAS = [
    {
        id: "frontend",
        nome: "Front-end",
        skills: [
            { nome: "HTML", icone: `${DEVICON}/html5/html5-original.svg` },
            { nome: "CSS", icone: `${DEVICON}/css3/css3-original.svg` },
            { nome: "JavaScript", icone: `${DEVICON}/javascript/javascript-original.svg` },
            { nome: "React", icone: `${DEVICON}/react/react-original.svg` },
            { nome: "Bootstrap", icone: `${DEVICON}/bootstrap/bootstrap-original.svg` },
            { nome: "Tailwind CSS", icone: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
        ],
    },
    {
        id: "backend",
        nome: "Back-end",
        skills: [
            { nome: "Python", icone: `${DEVICON}/python/python-original.svg` },
            { nome: "Django", icone: `${DEVICON}/django/django-plain.svg`, claro: true },
            { nome: "Firebase", icone: `${DEVICON}/firebase/firebase-original.svg` },
            { nome: "SQLite", icone: `${DEVICON}/sqlite/sqlite-original.svg` },
        ],
    },
    {
        id: "design",
        nome: "UI/UX Design",
        skills: [
            { nome: "Figma", icone: `${DEVICON}/figma/figma-original.svg` },
        ],
    },
    {
        id: "ferramentas",
        nome: "Ferramentas",
        skills: [
            { nome: "Git", icone: `${DEVICON}/git/git-original.svg` },
            { nome: "VS Code", icone: `${DEVICON}/vscode/vscode-original.svg` },
        ],
    },
];

export default function Skills() {
    const [ativa, setAtiva] = useState(0);
    const abasRef = useRef([]);

    // Navegação pelas abas com as setas do teclado, Home e End
    const onKeyDown = (e) => {
        const total = CATEGORIAS.length;
        let proxima = null;

        if (e.key === "ArrowRight") proxima = (ativa + 1) % total;
        if (e.key === "ArrowLeft") proxima = (ativa - 1 + total) % total;
        if (e.key === "Home") proxima = 0;
        if (e.key === "End") proxima = total - 1;

        if (proxima !== null) {
            e.preventDefault();
            setAtiva(proxima);
            abasRef.current[proxima]?.focus();
        }
    };

    const categoria = CATEGORIAS[ativa];

    return (
        <section id="skills" className="skills" aria-labelledby="skills-titulo">
            <Titulo
                id="skills-titulo"
                nome="Skills"
                subtitulo="Tecnologias e ferramentas que uso no dia a dia"
            />

            <div className="skills-conteudo">
                <div className="skills-abas" role="tablist" aria-label="Categorias de skills">
                    {CATEGORIAS.map((cat, i) => (
                        <button
                            key={cat.id}
                            ref={(el) => (abasRef.current[i] = el)}
                            type="button"
                            role="tab"
                            id={`aba-${cat.id}`}
                            aria-selected={ativa === i}
                            aria-controls={`painel-${cat.id}`}
                            tabIndex={ativa === i ? 0 : -1}
                            className={`skills-aba ${ativa === i ? "ativa" : ""}`}
                            onClick={() => setAtiva(i)}
                            onKeyDown={onKeyDown}
                        >
                            {cat.nome}
                            <span className="skills-contador">{cat.skills.length}</span>
                        </button>
                    ))}
                </div>

                <div
                    key={categoria.id} /* recria o painel para reiniciar a animação */
                    role="tabpanel"
                    id={`painel-${categoria.id}`}
                    aria-labelledby={`aba-${categoria.id}`}
                    className="skills-painel"
                >
                    <ul className="skills-grid">
                        {categoria.skills.map(({ nome, icone, claro }, i) => (
                            <li
                                key={nome}
                                className="skill-card"
                                style={{ animationDelay: `${i * 60}ms` }}
                            >
                                <img
                                    src={icone}
                                    alt=""
                                    width="48"
                                    height="48"
                                    loading="lazy"
                                    className={claro ? "icone-claro" : ""}
                                />
                                <span>{nome}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}