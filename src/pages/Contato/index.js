import Titulo from "../../components/Titulo";
import "./style.css";

export default function Contato() {
    return (
        <div id="contato" className="contato-container">
            <Titulo nome={"CONTATO"} />
            <div className="contato-conteudo max-w-2xl mx-auto">
                    <p className="mb-4 text-center text-sm sm:text-base font-light">
                        Tem um projeto ou oportunidade em mente? <br /> Entre em contato pelo formulário e responderei em breve!
                    </p>
                    <form action="#" className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-medium">Seu e-mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-all duration-300" 
                                placeholder="seuemail@exemplo.com" 
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
