import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Ao trocar de página: vai para o topo, ou para a seção do link (ex.: /#contato)
export default function ScrollManager() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const alvo = document.getElementById(hash.slice(1));
            if (alvo) {
                alvo.scrollIntoView();
                return;
            }
        }
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname, hash]);

    return null;
}
