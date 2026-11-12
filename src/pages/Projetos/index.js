import { Link } from "react-router-dom";
import Titulo from "../../components/Titulo";
import ProjetoCard from "../../components/ProjetoCard";
import { PROJETOS, PROJETOS_DESTAQUE } from "../../data/projetos";
import "./style.css";

// Seção da home: mostra os projetos em destaque e leva para a biblioteca completa.
// Para escolher quais aparecem aqui, marque "destaque: true" em src/data/projetos.js.
export default function Projetos() {
    const restantes = PROJETOS.length - PROJETOS_DESTAQUE.length;

    return (
        <section id="projetos" className="projetos" aria-labelledby="projetos-titulo">
            <Titulo
                id="projetos-titulo"
                nome="Projetos"
                subtitulo="Alguns dos trabalhos que mais me orgulho"
            />

            <ul className="projetos-grid">
                {PROJETOS_DESTAQUE.map((projeto, i) => (
                    <ProjetoCard key={projeto.slug} projeto={projeto} ordem={i} />
                ))}
            </ul>

            <div className="projetos-mais">
                <p>
                    {restantes > 0
                        ? `E mais ${restantes} ${restantes === 1 ? "projeto" : "projetos"} na biblioteca, com telas, identidade visual e detalhes de cada um.`
                        : "Veja telas, identidade visual e detalhes de cada projeto na biblioteca."}
                </p>
                <Link to="/projetos" className="projeto-btn projeto-btn-primario">
                    <i className="bx bx-grid-alt" aria-hidden="true"></i>
                    Ver todos os projetos
                </Link>
            </div>
        </section>
    );
}
