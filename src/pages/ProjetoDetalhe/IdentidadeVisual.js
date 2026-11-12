import { useEffect, useState } from "react";

function Cor({ nome, hex }) {
    const [copiado, setCopiado] = useState(false);

    useEffect(() => {
        if (!copiado) return;
        const t = setTimeout(() => setCopiado(false), 1500);
        return () => clearTimeout(t);
    }, [copiado]);

    const copiar = async () => {
        try {
            await navigator.clipboard.writeText(hex);
            setCopiado(true);
        } catch {
            // navegador sem permissão para copiar: não faz nada
        }
    };

    return (
        <li>
            <button
                type="button"
                className="cor"
                onClick={copiar}
                aria-label={`Copiar a cor ${nome || hex} (${hex})`}
            >
                <span className="cor-amostra" style={{ backgroundColor: hex }}></span>
                <span className="cor-info">
                    {nome && <strong>{nome}</strong>}
                    <span aria-live="polite">{copiado ? "Copiado!" : hex.toUpperCase()}</span>
                </span>
            </button>
        </li>
    );
}

// Logo, paleta de cores e tipografia. Não aparece se nada estiver preenchido.
export default function IdentidadeVisual({ identidade = {}, logo, titulo }) {
    const { cores = [], fontes = [], fundoLogo } = identidade;
    if (!logo && !cores.length && !fontes.length) return null;

    return (
        <div className={`identidade ${logo ? "" : "sem-logo"}`}>
            {logo && (
                <figure className="identidade-logo" style={{ backgroundColor: fundoLogo }}>
                    <img src={logo} alt={`Logo do projeto ${titulo}`} />
                </figure>
            )}

            {cores.length > 0 && (
                <div className="identidade-grupo">
                    <h3>Paleta de cores</h3>
                    <ul className="paleta">
                        {cores.map((cor) => (
                            <Cor key={cor.hex} {...cor} />
                        ))}
                    </ul>
                </div>
            )}

            {fontes.length > 0 && (
                <div className="identidade-grupo">
                    <h3>Tipografia</h3>
                    <ul className="fontes">
                        {fontes.map(({ nome, uso }) => (
                            <li key={nome}>
                                <span
                                    className="fonte-amostra"
                                    style={{ fontFamily: `"${nome}", sans-serif` }}
                                    aria-hidden="true"
                                >
                                    Aa
                                </span>
                                <span className="fonte-info">
                                    <strong>{nome}</strong>
                                    {uso && <span>{uso}</span>}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
