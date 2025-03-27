import Titulo from "../../components/Titulo";
import { useState } from "react";

import "./style.css"

export default function Skills() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return(
        <div id="skills" className="skills-container">
            <Titulo nome={"SKILLS"}/>
            <div className="skills-conteudo">

                <div className="bloc-tabs">
                    <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Front-end</div>
                    <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Back-end</div>
                    <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>UI/UX Design</div>
                    <div className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>Ferramentas</div>
                </div>

                <div className="content-tabs">
                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                        <div className="stacks-icons">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="REACT"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="BOOTSTRAP"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="TAILWINDCSS"/>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "content active-content" : "content"}>
                        <div className="stacks-icons">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="PYTHON"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="DJANGO"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" alt="FIREBASE"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" alt="SQLITE"/>
                        </div>
                    </div>

                    <div className={toggleState === 3 ? "content active-content" : "content"}>
                        <div className="stacks-icons">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="FIGMA"/>
                        </div>
                    </div>

                    <div className={toggleState === 4 ? "content active-content" : "content"}>
                        <div className="stacks-icons">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="GIT"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VSCODE"/>
                        </div>
                    </div>
                </div>

                    
            </div>
        </div>
    );
}

