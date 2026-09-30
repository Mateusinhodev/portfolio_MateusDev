import Titulo from "../../components/Titulo";
import "./style.css";

// Para adicionar um item, inclua um objeto na lista certa.
// "descricao" é opcional: se ficar vazia, o card só mostra cargo, local e período.
const EXPERIENCIAS = [
    {
        cargo: "Técnico em Informática – TI",
        local: "Prefeitura Municipal de Guaraí",
        periodo: "2024 – Presente",
        atual: true,
        descricao: "", // TODO: 1 ou 2 frases sobre o que você faz
    },
    {
        cargo: "Estágio em Tecnologia da Informação – TI",
        local: "Prefeitura Municipal de Guaraí",
        periodo: "2022 – 2023",
        descricao: "", // TODO: 1 ou 2 frases sobre o que você fazia
    },
];

const FORMACAO = [
    {
        cargo: "Ciências da Computação",
        local: "IFTO – Instituto Federal do Tocantins, Campus Colinas",
        periodo: "2021 – 2025",
        descricao: "",
    },
];

function Linha({ titulo, icone, itens }) {
    return (
        <div className="linha">
            <h3 className="linha-titulo">
                <i className={icone} aria-hidden="true"></i>
                {titulo}
            </h3>

            <ol className="timeline">
                {itens.map(({ cargo, local, periodo, atual, descricao }) => (
                    <li key={cargo + periodo} className={`timeline-item ${atual ? "atual" : ""}`}>
                        <span className="timeline-ponto" aria-hidden="true"></span>

                        <div className="timeline-card">
                            <div className="timeline-topo">
                                <span className="timeline-periodo">{periodo}</span>
                                {atual && <span className="timeline-badge">Atual</span>}
                            </div>
                            <h4 className="timeline-cargo">{cargo}</h4>
                            <p className="timeline-local">{local}</p>
                            {descricao && <p className="timeline-descricao">{descricao}</p>}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default function Experiencias() {
    return (
        <section id="experiencias" className="experiencias" aria-labelledby="experiencias-titulo">
            <Titulo
                id="experiencias-titulo"
                nome="Experiências"
                subtitulo="Minha trajetória profissional e acadêmica"
            />

            <div className="experiencias-conteudo">
                <Linha titulo="Formação" icone="bx bxs-graduation" itens={FORMACAO} />
                <Linha titulo="Experiência" icone="bx bx-briefcase" itens={EXPERIENCIAS} />
            </div>
        </section>
    );
}