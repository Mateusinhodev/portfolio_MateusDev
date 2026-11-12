import { Link, useParams } from "react-router-dom";
import { PROJETOS } from "../../data/projetos";
import Capa from "../../components/Capa";
import Tecnologias from "../../components/Tecnologias";
import useTituloPagina from "../../hooks/useTituloPagina";
import NaoEncontrada from "../NaoEncontrada";
import Galeria from "./Galeria";
import IdentidadeVisual from "./IdentidadeVisual";
import "./style.css";

function Bloco({ id, titulo, children }) {
    return (
        <section className="detalhe-bloco" aria-labelledby={id}>
            <h2 id={id}>{titulo}</h2>
            {children}
        </section>
    );
}

export default function ProjetoDetalhe() {
    const { slug } = useParams();
    const indice = PROJETOS.findIndex((p) => p.slug === slug);
    const projeto = PROJETOS[indice];

    useTituloPagina(projeto ? projeto.titulo : "Projeto não encontrado");

    if (!projeto) {
        return (
            <NaoEncontrada
                titulo="Projeto não encontrado"
                texto="Esse projeto não existe ou mudou de endereço."
                link={{ para: "/projetos", texto: "Ver todos os projetos" }}
            />
        );
    }

    const total = PROJETOS.length;
    const anterior = PROJETOS[(indice - 1 + total) % total];
    const proximo = PROJETOS[(indice + 1) % total];

    const {
        titulo,
        tipo,
        resumo,
        logo,
        ano,
        status,
        papel,
        cor,
        site,
        codigo,
        outrosLinks = [],
        descricao = [],
        funcionalidades = [],
        tecnologias = [],
        identidade,
        telas = [],
    } = projeto;

    const meta = [
        ["Ano", ano],
        ["Tipo", tipo],
        ["Status", status],
        ["Meu papel", papel],
    ].filter(([, valor]) => valor);

    const temIdentidade =
        logo || identidade?.cores?.length > 0 || identidade?.fontes?.length > 0;

    return (
        <article className="pagina detalhe" style={{ "--cor-projeto": cor || "#6c7079" }}>
            <nav className="migalhas" aria-label="Você está em">
                <Link to="/">Início</Link>
                <span aria-hidden="true">/</span>
                <Link to="/projetos">Projetos</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{titulo}</span>
            </nav>

            {/* ===== Topo ===== */}
            <header className="detalhe-hero">
                <div className="detalhe-intro">
                    {logo && (
                        <img className="detalhe-logo" src={logo} alt="" width="56" height="56" />
                    )}
                    {tipo && <span className="detalhe-tipo">{tipo}</span>}
                    <h1>{titulo}</h1>
                    {resumo && <p className="detalhe-resumo">{resumo}</p>}

                    {meta.length > 0 && (
                        <dl className="detalhe-meta">
                            {meta.map(([rotulo, valor]) => (
                                <div key={rotulo}>
                                    <dt>{rotulo}</dt>
                                    <dd>{valor}</dd>
                                </div>
                            ))}
                        </dl>
                    )}

                    {(site || codigo || outrosLinks.length > 0) && (
                        <div className="detalhe-acoes">
                            {site && (
                                <a
                                    href={site}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projeto-btn projeto-btn-primario"
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
                                >
                                    <i className="bx bxl-github" aria-hidden="true"></i>
                                    Ver código
                                </a>
                            )}
                            {outrosLinks.map(({ texto, url }) => (
                                <a
                                    key={url}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="projeto-btn projeto-btn-secundario"
                                >
                                    <i className="bx bx-history" aria-hidden="true"></i>
                                    {texto}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                <div className="detalhe-capa">
                    <Capa projeto={projeto} carregamento="eager" />
                </div>
            </header>

            {/* ===== Conteúdo ===== */}
            <div className="detalhe-conteudo">
                <div className="detalhe-colunas">
                    <Bloco id="sobre-projeto" titulo="Sobre o projeto">
                        {descricao.length > 0 ? (
                            descricao.map((paragrafo, i) => <p key={i}>{paragrafo}</p>)
                        ) : (
                            <p className="detalhe-vazio">Descrição completa em breve.</p>
                        )}
                    </Bloco>

                    <div className="detalhe-lateral">
                        {tecnologias.length > 0 && (
                            <Bloco id="tecnologias" titulo="Tecnologias">
                                <Tecnologias lista={tecnologias} tamanho="grande" />
                            </Bloco>
                        )}

                        {funcionalidades.length > 0 && (
                            <Bloco id="funcionalidades" titulo="Funcionalidades">
                                <ul className="detalhe-funcionalidades">
                                    {funcionalidades.map((item) => (
                                        <li key={item}>
                                            <i className="bx bx-check" aria-hidden="true"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Bloco>
                        )}
                    </div>
                </div>

                {temIdentidade && (
                    <Bloco id="identidade-visual" titulo="Identidade visual">
                        <IdentidadeVisual identidade={identidade} logo={logo} titulo={titulo} />
                    </Bloco>
                )}

                {telas.length > 0 && (
                    <Bloco id="telas" titulo="Telas">
                        <Galeria telas={telas} titulo={titulo} />
                    </Bloco>
                )}
            </div>

            {/* ===== Navegação entre projetos ===== */}
            <nav className="detalhe-navegacao" aria-label="Outros projetos">
                <Link to={`/projetos/${anterior.slug}`} className="nav-projeto nav-anterior">
                    <span>
                        <i className="bx bx-left-arrow-alt" aria-hidden="true"></i> Anterior
                    </span>
                    <strong>{anterior.titulo}</strong>
                </Link>
                <Link to="/projetos" className="nav-todos">
                    <i className="bx bx-grid-alt" aria-hidden="true"></i>
                    Todos os projetos
                </Link>
                <Link to={`/projetos/${proximo.slug}`} className="nav-projeto nav-proximo">
                    <span>
                        Próximo <i className="bx bx-right-arrow-alt" aria-hidden="true"></i>
                    </span>
                    <strong>{proximo.titulo}</strong>
                </Link>
            </nav>
        </article>
    );
}
