import Titulo from "../../components/Titulo";

import "./style.css"

export default function Contato() {
    return (
        <div id="contato" className="contato-container">
            <Titulo nome={"CONTATO"}/>
            <div className="contato-conteudo">
                <section>
                    <div className="px-4 mx-auto max-w-screen-sm">
                    <p className="mb-3 lg:mb-8 font-light text-center sm:text-lg">
                        Tem um projeto ou oportunidade em mente? <br/> Entre em contato pelo formulário e responderei em breve!
                    </p>
                    <form action="#" className="space-y-6">
                        <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Seu e-mail</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-all duration-300" 
                            placeholder="seuemail@exemplo.com" 
                            required 
                        />
                        </div>
                        <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium">Assunto</label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-all duration-300" 
                            placeholder="Sobre o que você gostaria de falar?" 
                            required 
                        />
                        </div>
                        <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">Sua mensagem</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="4" 
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500 transition-all duration-300" 
                            placeholder="Escreva sua mensagem aqui..." 
                            required 
                        ></textarea>
                        </div>
                        <button 
                        type="submit" 
                        className="py-3 px-6 text-sm font-semibold text-center text-white rounded-lg shadow-md transition-colors duration-300 btn-enviar"
                        style={{backgroundColor: '#13131f'}}
                        >
                        Enviar mensagem
                        </button>
                    </form>
                    </div>
                </section>
            </div>
        </div>
    );
}