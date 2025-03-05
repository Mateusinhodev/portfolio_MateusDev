import React, { useState } from "react";
import "./style.css"

import iconMenu from "../../assets/icon-menu.png"

function Logo() {
    return (
        <p className="logo">{"<MateusDev />"}</p>
    )
}

function Menu() {
    return(
        <ul className="menu">
            <li className="menu-item">Home</li>
            <li className="menu-item">Sobre</li>
            <li className="menu-item">Skills</li>
            <li className="menu-item">Projetos</li>
            <li className="menu-item">Experiência</li>
            <li className="menu-item">Contato</li>
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