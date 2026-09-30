import { useEffect, useRef, useState } from "react";
import "./style.css";

const LINKS = [
    { id: "sobre", label: "Sobre" },
    { id: "skills", label: "Skills" },
    { id: "projetos", label: "Projetos" },
    { id: "experiencias", label: "Experiências" },
    { id: "contato", label: "Contato" },
];

function Logo() {
    return (
        <a href="#top" className="logo" aria-label="MateusDev, voltar ao topo">
            {"<MateusDev />"}
        </a>
    );
}

function Menu() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("");
    const navRef = useRef(null);

    // Fecha o menu com Esc ou clicando fora dele
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        const onPointerDown = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
        };

        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("pointerdown", onPointerDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("pointerdown", onPointerDown);
        };
    }, [open]);

    // Fecha o menu mobile se a tela voltar para o tamanho desktop
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 861px)");
        const onChange = (e) => {
            if (e.matches) setOpen(false);
        };
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    // Destaca no menu a seção que está visível na tela
    useEffect(() => {
        const sections = LINKS
            .map(({ id }) => document.getElementById(id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className="nav" ref={navRef} aria-label="Navegação principal">
            <button
                type="button"
                className={`menu-button ${open ? "open" : ""}`}
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                aria-controls="menu-principal"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className="linha" />
                <span className="linha" />
                <span className="linha" />
            </button>

            <ul id="menu-principal" className={`menu ${open ? "show" : ""}`}>
                {LINKS.map(({ id, label }) => (
                    <li key={id} className="menu-item">
                        <a
                            href={`#${id}`}
                            className={active === id ? "active" : ""}
                            aria-current={active === id ? "true" : undefined}
                            onClick={() => setOpen(false)}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    // Muda o visual do header quando a página rola
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <Logo />
            <Menu />
        </header>
    );
}