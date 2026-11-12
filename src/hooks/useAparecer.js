import { useEffect, useRef, useState } from "react";

// Retorna [ref, visivel]: "visivel" vira true quando o elemento entra na tela (só uma vez)
export default function useAparecer(limite = 0.15) {
    const ref = useRef(null);
    const [visivel, setVisivel] = useState(false);

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
            { threshold: limite }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [limite]);

    return [ref, visivel];
}
