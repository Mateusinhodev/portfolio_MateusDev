import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PROJETOS } from "../../data/projetos";
import ProjetoCard from "../../components/ProjetoCard";
import useTituloPagina from "../../hooks/useTituloPagina";
import "./style.css";

const TODOS = "Todos";

// Remove acentos e deixa minúsculo, para a busca achar "academico" em "Acadêmico"
const normalizar = (texto) =>
    texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function Biblioteca() {
    useTituloPagina("Projetos");

    const [tipo, setTipo] = useState(TODOS);
    const [busca, setBusca] = useState("");

    // Tipos que existem nos dados, com a quantidade de cada um
    const tipos = useMemo(() => {
        const contagem = {};
        PROJETOS.forEach((p) => {
            if (p.tipo) contagem[p.tipo] = (contagem[p.tipo] || 0) + 1;
        });
        return Object.entries(contagem);
    }, []);

    const termo = normalizar(busca.trim());
    const filtrados = PROJETOS.filter((p) => {
        const doTipo = tipo === TODOS || p.tipo === tipo;
        const texto = normalizar([p.titulo, p.resumo, p.tipo, ...p.tecnologias].join(" "));
        return doTipo && (!termo || texto.includes(termo));
    });

    const limpar = () => {
        setTipo(TODOS);
        setBusca("");
    };

    return (
        <div className="pagina biblioteca">
            <nav className="migalhas" aria-label="Você está em">
                <Link to="/">Início</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Projetos</span>
            </nav>

            <header className="biblioteca-topo">
                <h1>Biblioteca de projetos</h1>
                <p>
                    Todos os projetos que desenvolvi, com telas, identidade visual e os detalhes de
                    cada um.
                </p>
            </header>

            <div className="biblioteca-filtros">
                {tipos.length > 1 && (
                    <div className="filtro-chips" role="group" aria-label="Filtrar por tipo">
                        {[[TODOS, PROJETOS.length], ...tipos].map(([nome, qtd]) => (
                            <button
                                key={nome}
                                type="button"
                                className={`filtro-chip ${tipo === nome ? "ativo" : ""}`}
                                aria-pressed={tipo === nome}
                                onClick={() => setTipo(nome)}
                            >
                                {nome}
                                <span>{qtd}</span>
                            </button>
                        ))}
                    </div>
                )}

                <label className="filtro-busca">
                    <i className="bx bx-search" aria-hidden="true"></i>
                    <span className="sr-only">Buscar projeto</span>
                    <input
                        type="search"
                        placeholder="Buscar por nome ou tecnologia"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />
                </label>
            </div>

            <p className="biblioteca-contagem" aria-live="polite">
                {filtrados.length} {filtrados.length === 1 ? "projeto" : "projetos"}
            </p>

            {filtrados.length > 0 ? (
                <ul className="projetos-grid">
                    {filtrados.map((projeto, i) => (
                        <ProjetoCard key={projeto.slug} projeto={projeto} ordem={i} />
                    ))}
                </ul>
            ) : (
                <div className="biblioteca-vazio">
                    <i className="bx bx-search-alt" aria-hidden="true"></i>
                    <p>Nenhum projeto encontrado com esses filtros.</p>
                    <button type="button" className="projeto-btn projeto-btn-secundario" onClick={limpar}>
                        Limpar filtros
                    </button>
                </div>
            )}
        </div>
    );
}
