import { Link } from "react-router-dom";
import Capa from "../Capa";
import Tecnologias from "../Tecnologias";
import useAparecer from "../../hooks/useAparecer";
import "./style.css";

export default function ProjetoCard({ projeto, ordem = 0 }) {
    const [ref, visivel] = useAparecer();
    const { slug, titulo, tipo, resumo, tecnologias, site } = projeto;
    const detalhes = `/projetos/${slug}`;

    return (
        <li
            ref={ref}
            className={`projeto-card ${visivel ? "visivel" : ""}`}
            style={{ animationDelay: `${ordem * 90}ms` }}
        >
            {/* A imagem leva aos detalhes; pelo teclado, o título e o botão já fazem isso */}
            <Link to={detalhes} className="projeto-imagem" tabIndex={-1} aria-hidden="true">
                <Capa projeto={projeto} />
                {tipo && <span className="projeto-tipo">{tipo}</span>}
                <span className="projeto-overlay">
                    <i className="bx bx-show" aria-hidden="true"></i>
                    Ver detalhes
                </span>
            </Link>

            <div className="projeto-corpo">
                <h3 className="projeto-titulo">
                    <Link to={detalhes}>{titulo}</Link>
                </h3>

                {resumo && <p className="projeto-descricao">{resumo}</p>}

                <Tecnologias lista={tecnologias} />

                <div className="projeto-links">
                    <Link
                        to={detalhes}
                        className="projeto-btn projeto-btn-primario"
                        aria-label={`Ver detalhes do projeto ${titulo}`}
                    >
                        <i className="bx bx-detail" aria-hidden="true"></i>
                        Detalhes
                    </Link>
                    {site && (
                        <a
                            href={site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projeto-btn projeto-btn-secundario"
                            aria-label={`Ver o site do projeto ${titulo} (abre em nova aba)`}
                        >
                            <i className="bx bx-link-external" aria-hidden="true"></i>
                            Ver site
                        </a>
                    )}
                </div>
            </div>
        </li>
    );
}
