import { useEffect, useRef, useState } from "react";

// Grade de telas do projeto + visualizador em tela cheia (setas, Esc e clique fora fecham)
export default function Galeria({ telas, titulo }) {
    const [atual, setAtual] = useState(null); // índice da tela aberta, ou null
    const dialogRef = useRef(null);
    const total = telas.length;

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (atual !== null && !dialog.open) dialog.showModal();
        if (atual === null && dialog.open) dialog.close();
    }, [atual]);

    const mover = (passo) => setAtual((i) => (i + passo + total) % total);

    const onKeyDown = (e) => {
        if (e.key === "ArrowRight") mover(1);
        if (e.key === "ArrowLeft") mover(-1);
    };

    // Separa telas de computador e de celular, mantendo a posição original de cada uma
    const comIndice = telas.map((tela, indice) => ({ ...tela, indice }));
    const grupos = [
        { nome: "Desktop", itens: comIndice.filter((t) => t.formato !== "mobile") },
        { nome: "Mobile", itens: comIndice.filter((t) => t.formato === "mobile") },
    ].filter((g) => g.itens.length);
    const mostrarNomes = grupos.length > 1;

    const tela = atual !== null ? telas[atual] : null;

    return (
        <>
            {grupos.map((grupo) => (
                <div key={grupo.nome} className="galeria-grupo">
                    {mostrarNomes && <h3>{grupo.nome}</h3>}
                    <ul className={`galeria ${grupo.nome === "Mobile" ? "galeria-mobile" : ""}`}>
                        {grupo.itens.map((t) => (
                            <li key={t.src} className="galeria-item">
                                <button
                                    type="button"
                                    onClick={() => setAtual(t.indice)}
                                    aria-label={`Ampliar: ${t.legenda || `tela ${t.indice + 1}`}`}
                                >
                                    <img src={t.src} alt="" loading="lazy" />
                                    <span className="galeria-ampliar" aria-hidden="true">
                                        <i className="bx bx-expand-alt"></i>
                                    </span>
                                </button>
                                {t.legenda && <p>{t.legenda}</p>}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <dialog
                ref={dialogRef}
                className="lightbox"
                aria-label={`Telas do projeto ${titulo}`}
                onClose={() => setAtual(null)}
                onKeyDown={onKeyDown}
                onClick={(e) => {
                    if (e.target === e.currentTarget) setAtual(null);
                }}
            >
                {tela && (
                    <figure className="lightbox-conteudo">
                        <img
                            src={tela.src}
                            alt={tela.legenda || `Tela ${atual + 1} do projeto ${titulo}`}
                        />
                        <figcaption>
                            <span>
                                {atual + 1} / {total}
                            </span>
                            {tela.legenda}
                        </figcaption>
                    </figure>
                )}

                <button
                    type="button"
                    className="lightbox-btn lightbox-fechar"
                    aria-label="Fechar"
                    onClick={() => setAtual(null)}
                >
                    <i className="bx bx-x" aria-hidden="true"></i>
                </button>

                {total > 1 && (
                    <>
                        <button
                            type="button"
                            className="lightbox-btn lightbox-anterior"
                            aria-label="Tela anterior"
                            onClick={() => mover(-1)}
                        >
                            <i className="bx bx-chevron-left" aria-hidden="true"></i>
                        </button>
                        <button
                            type="button"
                            className="lightbox-btn lightbox-proxima"
                            aria-label="Próxima tela"
                            onClick={() => mover(1)}
                        >
                            <i className="bx bx-chevron-right" aria-hidden="true"></i>
                        </button>
                    </>
                )}
            </dialog>
        </>
    );
}
