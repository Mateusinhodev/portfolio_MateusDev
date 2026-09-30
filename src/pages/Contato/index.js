import { useState } from "react";
import emailjs from "@emailjs/browser";
import Titulo from "../../components/Titulo";
import "./style.css";

const EMAILJS = {
    servico: "service_xxjt3qn",
    template: "template_fb38ogu",
    chavePublica: "lao-vgnb_Mmz1EhxC",
};

const CONTATOS = [
    {
        nome: "LinkedIn",
        texto: "Mateus Rodrigues",
        url: "https://www.linkedin.com/in/mateus-rodrigues-a47002264/",
        icone: "bx bxl-linkedin-square",
    },
    {
        nome: "GitHub",
        texto: "@Mateusinhodev",
        url: "https://github.com/Mateusinhodev",
        icone: "bx bxl-github",
    },
    // Se quiser mostrar seu e-mail, descomente e preencha:
    // {
    //     nome: "E-mail",
    //     texto: "seuemail@exemplo.com",
    //     url: "mailto:seuemail@exemplo.com",
    //     icone: "bx bx-envelope",
    // },
];

const FORM_VAZIO = { nome: "", email: "", assunto: "", mensagem: "", site: "" };

export default function Contato() {
    const [form, setForm] = useState(FORM_VAZIO);
    const [status, setStatus] = useState("parado"); // parado | enviando | sucesso | erro

    const atualizar = (e) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
        if (status === "sucesso" || status === "erro") setStatus("parado");
    };

    async function enviar(e) {
        e.preventDefault();

        // Campo "site" é invisível: se vier preenchido, foi um robô de spam
        if (form.site) return;

        setStatus("enviando");
        try {
            await emailjs.send(
                EMAILJS.servico,
                EMAILJS.template,
                {
                    from_name: form.nome,
                    from_email: form.email,
                    reply_to: form.email,
                    from_assunto: form.assunto,
                    message: form.mensagem,
                },
                EMAILJS.chavePublica
            );
            setStatus("sucesso");
            setForm(FORM_VAZIO);
        } catch (erro) {
            console.error("Erro ao enviar e-mail:", erro);
            setStatus("erro");
        }
    }

    const enviando = status === "enviando";

    return (
        <section id="contato" className="contato" aria-labelledby="contato-titulo">
            <Titulo
                id="contato-titulo"
                nome="Contato"
                subtitulo="Tem um projeto ou oportunidade em mente? Vamos conversar!"
            />

            <div className="contato-conteudo">
                {/* Coluna de informações */}
                <div className="contato-info">
                    <h3 className="contato-info-titulo">Vamos trabalhar juntos</h3>
                    <p className="contato-info-texto">
                        Estou aberto a oportunidades como desenvolvedor front-end, freelas e
                        projetos em parceria. Mande uma mensagem pelo formulário ou me encontre
                        nas redes abaixo. Respondo o mais rápido possível!
                    </p>

                    <ul className="contato-links">
                        {CONTATOS.map(({ nome, texto, url, icone }) => (
                            <li key={nome}>
                                <a
                                    href={url}
                                    target={url.startsWith("mailto:") ? undefined : "_blank"}
                                    rel="noopener noreferrer"
                                    className="contato-link"
                                >
                                    <i className={icone} aria-hidden="true"></i>
                                    <span>
                                        <strong>{nome}</strong>
                                        {texto}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Formulário */}
                <form className="contato-form" onSubmit={enviar} noValidate={false}>
                    <div className="campo-grupo">
                        <div className="campo">
                            <label htmlFor="contato-nome">Nome</label>
                            <input
                                id="contato-nome"
                                name="nome"
                                type="text"
                                autoComplete="name"
                                placeholder="Seu nome"
                                value={form.nome}
                                onChange={atualizar}
                                required
                            />
                        </div>

                        <div className="campo">
                            <label htmlFor="contato-email">E-mail</label>
                            <input
                                id="contato-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                placeholder="seuemail@exemplo.com"
                                value={form.email}
                                onChange={atualizar}
                                required
                            />
                        </div>
                    </div>

                    <div className="campo">
                        <label htmlFor="contato-assunto">Assunto</label>
                        <input
                            id="contato-assunto"
                            name="assunto"
                            type="text"
                            placeholder="Sobre o que você quer falar?"
                            value={form.assunto}
                            onChange={atualizar}
                            required
                        />
                    </div>

                    <div className="campo">
                        <label htmlFor="contato-mensagem">Mensagem</label>
                        <textarea
                            id="contato-mensagem"
                            name="mensagem"
                            rows="5"
                            placeholder="Escreva sua mensagem..."
                            value={form.mensagem}
                            onChange={atualizar}
                            required
                        />
                    </div>

                    {/* Armadilha anti-spam: invisível para pessoas */}
                    <div className="campo-armadilha" aria-hidden="true">
                        <label htmlFor="contato-site">Não preencha este campo</label>
                        <input
                            id="contato-site"
                            name="site"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            value={form.site}
                            onChange={atualizar}
                        />
                    </div>

                    <button type="submit" className="btn-enviar" disabled={enviando}>
                        {enviando ? (
                            <>
                                <i className="bx bx-loader-alt bx-spin" aria-hidden="true"></i>
                                Enviando...
                            </>
                        ) : (
                            <>
                                <i className="bx bx-send" aria-hidden="true"></i>
                                Enviar mensagem
                            </>
                        )}
                    </button>

                    <div className="contato-status" role="status" aria-live="polite">
                        {status === "sucesso" && (
                            <p className="status-sucesso">
                                <i className="bx bx-check-circle" aria-hidden="true"></i>
                                Mensagem enviada! Obrigado pelo contato, responderei em breve.
                            </p>
                        )}
                        {status === "erro" && (
                            <p className="status-erro">
                                <i className="bx bx-error-circle" aria-hidden="true"></i>
                                Não foi possível enviar agora. Tente novamente ou me chame no
                                LinkedIn.
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}