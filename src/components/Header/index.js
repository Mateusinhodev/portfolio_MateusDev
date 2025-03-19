import "./style.css"

function Logo() {
    return (
        <p className="logo">{"<MateusDev />"}</p>
    )
}

function Menu() {
    return(
        <ul className="menu">
            <li className="menu-item"><a href="#sobre">Sobre</a></li>
            <li className="menu-item"><a href="#skills">Skills</a></li>
            <li className="menu-item"><a href="#projetos">Projetos</a></li>
            <li className="menu-item"><a href="#experiencias">Experiências</a></li>
            <li className="menu-item"><a href="#contato">Contato</a></li>
        </ul>
    );
}



export default function Header() {

    return(
        <header className="header">
            <Logo/>
            <Menu/>
        </header>
    );
}