import React from "react";

import "./style.css"

export default function Titulo({nome}) {

    return (
        <div className="titulo-container">
        <p className="titulo">{nome}</p>
        </div>
    )
}