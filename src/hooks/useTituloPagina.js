import { useEffect } from "react";

const PADRAO = "Mateus Rodrigues | Desenvolvedor Front-End";

// Atualiza o título da aba do navegador em cada página
export default function useTituloPagina(titulo) {
    useEffect(() => {
        document.title = titulo ? `${titulo} | Mateus Rodrigues` : PADRAO;
    }, [titulo]);
}
