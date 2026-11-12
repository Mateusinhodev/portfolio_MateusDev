import "./style.css";

// Capa do projeto. Sem imagem, mostra uma capa provisória com a logo
// (ou o nome) sobre um degradê na cor do projeto.
export default function Capa({ projeto, carregamento = "lazy" }) {
    const { titulo, capa, logo, cor } = projeto;

    if (capa) {
        return (
            <img
                className="capa-img"
                src={capa}
                alt={`Tela principal do projeto ${titulo}`}
                width="640"
                height="400"
                loading={carregamento}
            />
        );
    }

    return (
        <div
            className="capa-provisoria"
            style={{ "--cor-projeto": cor || "#6c7079" }}
            role="img"
            aria-label={`Capa do projeto ${titulo}`}
        >
            {logo ? (
                <img className="capa-logo" src={logo} alt="" />
            ) : (
                <span className="capa-nome">{titulo}</span>
            )}
        </div>
    );
}
