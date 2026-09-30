import { useEffect, useRef, useState } from "react";
import "./style.css";

/**
 * Título das seções.
 *
 * Props:
 * - nome: texto do título (obrigatório)
 * - subtitulo: frase curta opcional abaixo do título
 * - id: opcional, útil para ligar a seção ao título via aria-labelledby
 */
export default function Titulo({ nome, subtitulo, id }) {
    const ref = useRef(null);
    const [visivel, setVisivel] = useState(false);

    // Anima o título quando ele entra na tela (só uma vez)
    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisivel(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`titulo-container ${visivel ? "visivel" : ""}`}>
            <h2 id={id} className="titulo">
                {nome}
            </h2>
            {subtitulo && <p className="titulo-subtitulo">{subtitulo}</p>}
        </div>
    );
}