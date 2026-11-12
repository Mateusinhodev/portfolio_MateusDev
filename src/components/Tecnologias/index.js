import { TECNOLOGIAS } from "../../data/tecnologias";
import "./style.css";

// Lista de etiquetas de tecnologia. tamanho: "normal" (cards) ou "grande" (página do projeto)
export default function Tecnologias({ lista = [], tamanho = "normal" }) {
    if (!lista.length) return null;

    return (
        <ul className={`tecnologias tecnologias-${tamanho}`} aria-label="Tecnologias usadas">
            {lista.map((nome) => {
                const tec = TECNOLOGIAS[nome];
                return (
                    <li key={nome} className="tecnologia">
                        {tec && (
                            <img
                                src={tec.icone}
                                alt=""
                                width="18"
                                height="18"
                                loading="lazy"
                                className={tec.claro ? "icone-claro" : ""}
                            />
                        )}
                        {nome}
                    </li>
                );
            })}
        </ul>
    );
}
