import { Link } from "react-router-dom";
import useTituloPagina from "../../hooks/useTituloPagina";

// Página para endereços que não existem (e projetos não encontrados)
export default function NaoEncontrada({
    titulo = "Página não encontrada",
    texto = "O endereço que você acessou não existe.",
    link = { para: "/", texto: "Voltar ao início" },
}) {
    useTituloPagina(titulo);

    return (
        <div className="pagina pagina-erro">
            <p className="pagina-erro-codigo" aria-hidden="true">
                {"</404>"}
            </p>
            <h1>{titulo}</h1>
            <p>{texto}</p>
            <Link to={link.para} className="projeto-btn projeto-btn-primario">
                {link.texto}
            </Link>
        </div>
    );
}
