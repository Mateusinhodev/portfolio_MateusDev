import "./style.css";

const LINKS = [
    { id: "sobre", label: "Sobre" },
    { id: "skills", label: "Skills" },
    { id: "projetos", label: "Projetos" },
    { id: "experiencias", label: "Experiências" },
    { id: "contato", label: "Contato" },
];

const SOCIAIS = [
    {
        nome: "LinkedIn",
        url: "https://www.linkedin.com/in/mateus-rodrigues-a47002264/",
        icone: "bx bxl-linkedin-square",
    },
    {
        nome: "GitHub",
        url: "https://github.com/Mateusinhodev",
        icone: "bx bxl-github",
    },
    {
        nome: "X (Twitter)",
        url: "https://twitter.com/Mateusinhodev",
        icone: "bx bxl-twitter",
    },
    {
        nome: "Instagram",
        url: "https://www.instagram.com/mateus.mt11/",
        icone: "bx bxl-instagram-alt",
    },
];

export default function Footer() {
    const ano = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-conteudo">
                <div className="footer-marca">
                    <a href="#home" className="footer-logo">
                        {"<MateusDev />"}
                    </a>
                    <p className="footer-frase">
                        Desenvolvedor Front-End criando interfaces funcionais, interativas e
                        acessíveis.
                    </p>
                </div>

                <nav className="footer-nav" aria-label="Navegação do rodapé">
                    <ul>
                        {LINKS.map(({ id, label }) => (
                            <li key={id}>
                                <a href={`#${id}`}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <ul className="footer-sociais">
                    {SOCIAIS.map(({ nome, url, icone }) => (
                        <li key={nome}>
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${nome} (abre em nova aba)`}
                            >
                                <i className={icone} aria-hidden="true"></i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="footer-base">
                <p>© {ano} Mateus Rodrigues. Todos os direitos reservados.</p>
                <a href="#home" className="footer-topo">
                    Voltar ao topo
                    <i className="bx bx-up-arrow-alt" aria-hidden="true"></i>
                </a>
            </div>
        </footer>
    );
}