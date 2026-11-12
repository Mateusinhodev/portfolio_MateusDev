/*
 * ===== Dados dos projetos =====
 *
 * Tudo sobre os projetos fica aqui: a home, a biblioteca e a página de cada
 * projeto leem desta lista. Para adicionar um projeto, copie um item e preencha.
 *
 * IMAGENS: coloque os arquivos em public/projetos/<slug>/ e use caminhos como
 *   "/projetos/livraria/capa.png". Enquanto "capa" estiver vazia, o site mostra
 *   uma capa provisória com o nome (ou a logo) e a cor do projeto.
 *
 * Campos:
 * - slug:            endereço da página (/projetos/<slug>). Sem acentos/espaços.
 * - titulo, resumo:  nome e frase curta (aparece nos cards).
 * - destaque:        true = aparece na home (os 3 primeiros com destaque).
 * - tipo:            "Pessoal", "Acadêmico", "Freela"... (vira filtro na biblioteca)
 * - ano, status, papel: informações rápidas no topo da página do projeto.
 * - cor:             cor principal do projeto (usada na capa provisória e nos detalhes).
 * - capa, logo:      caminhos das imagens.
 * - tecnologias:     nomes iguais aos de src/data/tecnologias.js.
 * - site, codigo:    links (opcionais).
 * - descricao:       lista de parágrafos.
 * - funcionalidades: lista de frases curtas.
 * - identidade:      { cores: [{ nome, hex }], fontes: [{ nome, uso }], fundoLogo }
 * - telas:           [{ src, legenda, formato: "desktop" | "mobile" }]
 */

export const PROJETOS = [
    {
        slug: "livraria",
        titulo: "Livraria Digital",
        resumo:
            "Busque livros, veja descrição e capa, salve seus favoritos e pesquise mais informações no Google.",
        destaque: true,
        tipo: "Pessoal",
        ano: "", // TODO
        status: "Concluído",
        papel: "Desenvolvimento front-end",
        cor: "#8b6cff",
        capa: "https://i.imgur.com/F9Ut6xd.jpeg",
        logo: "",
        tecnologias: ["JavaScript", "React"],
        site: "https://livraria-sepia-ten.vercel.app/",
        codigo: "",
        descricao: [
            "A Livraria Digital é uma aplicação para explorar livros de forma rápida e intuitiva: você busca um título, vê a capa e a descrição, salva seus favoritos e, se quiser saber mais, pesquisa o livro no Google com um clique.",
            // TODO: conte o objetivo do projeto, de onde vêm os dados dos livros e o que você aprendeu.
        ],
        funcionalidades: [
            "Busca de livros",
            "Página do livro com capa e descrição",
            "Lista de favoritos",
            "Atalho para pesquisar o livro no Google",
        ],
        identidade: { cores: [], fontes: [] },
        telas: [],
    },
    {
        slug: "facil-gestao",
        titulo: "Fácil Gestão",
        resumo: "", // TODO: uma frase sobre o que o sistema faz e para quem
        destaque: true,
        tipo: "Pessoal", // TODO: confirme (Pessoal, Freela...)
        ano: "",
        status: "",
        papel: "",
        cor: "#3b82f6",
        capa: "https://i.imgur.com/HvcF00r.png",
        logo: "",
        tecnologias: ["JavaScript", "React", "Firebase"],
        site: "https://facilgestao.netlify.app/login",
        codigo: "",
        descricao: [],
        funcionalidades: [],
        identidade: { cores: [], fontes: [] },
        telas: [],
    },
    {
        slug: "labin-ifto",
        titulo: "Labin IFTO",
        resumo: "Sistema para controle de acesso aos laboratórios do IFTO.",
        destaque: true,
        tipo: "Acadêmico",
        ano: "",
        status: "",
        papel: "",
        cor: "#22a06b",
        capa: "https://i.imgur.com/XTpUjkR.jpeg",
        logo: "",
        tecnologias: ["Python", "Django", "SQLite"],
        site: "",
        codigo: "https://github.com/Mateusinhodev/Labin-IFTO",
        descricao: [],
        funcionalidades: [],
        identidade: { cores: [], fontes: [] },
        telas: [],
    },
    {
        slug: "50maisconvidados",
        titulo: "50maisconvidados",
        resumo: "",
        destaque: false,
        tipo: "",
        ano: "",
        status: "",
        papel: "",
        cor: "#e85d75",
        capa: "",
        logo: "",
        tecnologias: [],
        site: "",
        codigo: "",
        descricao: [],
        funcionalidades: [],
        identidade: { cores: [], fontes: [] },
        telas: [],
    },
    {
        slug: "globconvert",
        titulo: "GlobConvert",
        resumo: "",
        destaque: false,
        tipo: "",
        ano: "",
        status: "",
        papel: "",
        cor: "#2fa4e7",
        capa: "",
        logo: "",
        tecnologias: [],
        site: "",
        codigo: "",
        descricao: [],
        funcionalidades: [],
        identidade: { cores: [], fontes: [] },
        telas: [],
    },
    {
        slug: "liga-mais",
        titulo: "Liga+",
        resumo: "",
        destaque: false,
        tipo: "",
        ano: "",
        status: "",
        papel: "",
        cor: "#2ec27e",
        capa: "",
        logo: "",
        tecnologias: [],
        site: "",
        codigo: "",
        descricao: [],
        funcionalidades: [],
        identidade: { cores: [], fontes: [] },
        telas: [],
    },
    {
        slug: "viva-leve",
        titulo: "Viva Leve",
        resumo: "",
        destaque: false,
        tipo: "",
        ano: "",
        status: "",
        papel: "",
        cor: "#f2a541",
        capa: "",
        logo: "",
        tecnologias: [],
        site: "",
        codigo: "",
        descricao: [],
        funcionalidades: [],
        identidade: { cores: [], fontes: [] },
        telas: [],
    },
];

export const PROJETOS_DESTAQUE = PROJETOS.filter((p) => p.destaque).slice(0, 3);
