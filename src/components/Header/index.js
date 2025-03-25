import { useState } from "react";
import "./style.css"

function Logo() {
    return (
        <p className="logo">{"<MateusDev />"}</p>
    )
}

function Menu() {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return(
        <nav>
            <ul className={`menu ${ showMenu ? 'show' : '' }`}
                onClick={toggleMenu}
            >
                <li className="menu-item"><a href="#sobre">Sobre</a></li>
                <li className="menu-item"><a href="#skills">Skills</a></li>
                <li className="menu-item"><a href="#projetos">Projetos</a></li>
                <li className="menu-item"><a href="#experiencias">Experiências</a></li>
                <li className="menu-item"><a href="#contato">Contato</a></li>
            </ul>
            <div 
                className="menuButton"
                onClick={toggleMenu}
            >
                <span className="linha"></span>
                <span className="linha"></span>
                <span className="linha"></span>
            </div>
        </nav>
        
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