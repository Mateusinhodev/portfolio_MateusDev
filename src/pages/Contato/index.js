import { useState } from "react";
import Titulo from "../../components/Titulo";
import "./style.css";
import emailjs from '@emailjs/browser';

export default function Contato() {

    const [email, setEmail] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mensagem, setMensagem] = useState('');

    function sendEmail(e) {
        e.preventDefault();
        
        const templateParamns = {
            from_email: email,
            from_assunto: assunto,
            message: mensagem,
        }
        emailjs.send("service_xxjt3qn", "template_fb38ogu", templateParamns, "lao-vgnb_Mmz1EhxC")
        .then((response) => {
            console.log("EMAIL ENVIADO", response.status, response.text);
            setEmail('');
            setAssunto('');
            setMensagem('');
        }, (error) => {
            console.log("ERRO: ", error);
        })
    }

    return (
        <div id="contato" className="contato-container">
            <Titulo nome={"CONTATO"} />
            <div className="contato-conteudo max-w-2xl mx-auto">
                    <p className="mb-4 text-center text-sm sm:text-base font-light">
                        Tem um projeto ou oportunidade em mente? <br /> Entre em contato pelo formulário e responderei em breve!
                    </p>
                    <form action="#" className="space-y-4" onSubmit={sendEmail}>
                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-medium">Seu e-mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all duration-300" 
                                placeholder="seuemail@exemplo.com" 
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-1 text-sm font-medium">Assunto</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                className="block w-full p-2 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                                placeholder="Digite o assunto" 
                                onChange={(e) => setAssunto(e.target.value)}
                                value={assunto}
                                required 
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1 text-sm font-medium">Mensagem</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="4" 
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                                placeholder="Escreva sua mensagem..."
                                onChange={(e) => setMensagem(e.target.value)}
                                value={mensagem}
                                required
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full text-white font-medium rounded-md text-sm px-4 py-2 transition duration-200 btn-enviar"
                        >
                            Enviar mensagem
                        </button>
                    </form>
            </div>
        </div>
    );
}
