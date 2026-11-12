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
 * - outrosLinks:     botões extras, ex.: [{ texto: "Ver versão de 2023", url: "https://..." }]
 * - descricao:       lista de parágrafos.
 * - funcionalidades: lista de frases curtas.
 * - identidade:      { cores: [{ nome, hex }], fontes: [{ nome, uso }], fundoLogo }
 * - telas:           [{ src, legenda, formato: "desktop" | "mobile" }]
 */

export const PROJETOS = [
    {
        slug: "livraria",
        titulo: "Livraria",
        resumo:
            "Estante digital para pesquisar livros, acompanhar suas leituras e ler clássicos em domínio público de graça.",
        destaque: true,
        tipo: "Pessoal",
        ano: "", // TODO: ano em que começou
        status: "", // TODO: "Em desenvolvimento" ou "Concluído"
        papel: "Design e desenvolvimento",
        cor: "#fb923c",
        capa: "/projetos/livraria/capa.webp",
        logo: "", // TODO: salve a logo em public/projetos/livraria/logo.png e coloque o caminho aqui
        tecnologias: ["JavaScript", "React", "Vite", "Supabase"],
        site: "https://livraria-sepia-ten.vercel.app/",
        codigo: "https://github.com/Mateusinhodev/livraria",
        descricao: [
            "A Livraria é uma estante digital para quem gosta de ler. Ela começou como um buscador de livros com lista de favoritos e cresceu até virar um lugar para descobrir livros, organizar o que você está lendo e acompanhar o seu ano de leitura.",
            "Na página inicial, você pesquisa por título, autor ou assunto, ou parte de sugestões prontas como Machado de Assis e ficção científica. Cada livro tem uma página com capa, editora, ano, número de páginas, categoria e sinopse, além de uma prévia para ler ali mesmo e um atalho para o Google Livros.",
            "A seção Clássicos reúne mais de 600 livros em domínio público, em português, do Project Gutenberg, com um leitor próprio que salva o progresso sozinho.",
            "Os livros vêm da API do Google Books, com capas em alta resolução da Open Library, e o back-end usa o Supabase: autenticação, banco Postgres com Row Level Security, para cada pessoa acessar só os próprios dados, e uma Edge Function que entrega o texto dos clássicos ao leitor.",
            "Para quem cria uma conta, a Minha estante guarda os livros da pessoa, e a página Meu ano de leitura transforma o diário de leitura em estatísticas: meta de livros do ano, sequência de dias seguidos lendo com recorde, livros e páginas lidas, nota média, um gráfico de livros terminados por mês, a melhor leitura do ano e os autores mais lidos.",
            "A interface tem tema claro e escuro, que pode seguir a configuração do sistema, e foi pensada para funcionar bem no celular.",
        ],
        funcionalidades: [
            "Busca de livros por título, autor ou assunto, com sugestões prontas",
            "Página do livro com editora, ano, páginas, categoria e sinopse",
            "Prévia do livro e atalho para o Google Livros",
            "Clássicos em domínio público com leitor próprio que salva o progresso",
            "Estante pessoal com cadastro e login (Supabase Auth)",
            "Dados protegidos com Row Level Security no banco",
            "Diário de leitura com sequência de dias seguidos e recorde",
            "Meta anual de livros com barra de progresso",
            "Estatísticas do ano: livros, páginas, dias lendo e nota média",
            "Gráfico de livros terminados por mês",
            "Melhor leitura do ano e autores mais lidos",
            "Tema claro, escuro ou automático pelo sistema",
            "Layout responsivo para celular",
        ],
        identidade: {
            cores: [
                { nome: "Laranja (tema escuro)", hex: "#fb923c" },
                { nome: "Laranja queimado (tema claro)", hex: "#c2410c" },
                { nome: "Fundo escuro", hex: "#0f0e0c" },
                { nome: "Card escuro", hex: "#1d1916" },
                { nome: "Fundo claro", hex: "#fafaf8" },
                { nome: "Texto", hex: "#1b1714" },
                { nome: "Meta batida (escuro)", hex: "#4ade80" },
                { nome: "Meta batida (claro)", hex: "#15803d" },
            ],
            fontes: [{ nome: "Inter", uso: "Títulos e textos" }], // TODO: confirme a fonte
        },
        telas: [
            { src: "/projetos/livraria/01-home-escuro.webp", legenda: "Página inicial (tema escuro)" },
            { src: "/projetos/livraria/02-home-claro.webp", legenda: "Página inicial (tema claro)" },
            { src: "/projetos/livraria/03-livro.webp", legenda: "Página do livro" },
            { src: "/projetos/livraria/04-classicos.webp", legenda: "Clássicos grátis, carregando o acervo" },
            { src: "/projetos/livraria/05-ano-de-leitura-escuro.webp", legenda: "Meu ano de leitura (tema escuro)" },
            { src: "/projetos/livraria/06-estatisticas-escuro.webp", legenda: "Estatísticas do ano (tema escuro)" },
            { src: "/projetos/livraria/07-ano-de-leitura-claro.webp", legenda: "Meu ano de leitura (tema claro)" },
            { src: "/projetos/livraria/08-estatisticas-claro.webp", legenda: "Estatísticas do ano (tema claro)" },
            { src: "/projetos/livraria/09-celular-home.webp", legenda: "Página inicial", formato: "mobile" },
            { src: "/projetos/livraria/10-celular-ano-de-leitura.webp", legenda: "Meu ano de leitura", formato: "mobile" },
        ],
    },
    {
        slug: "facil-gestao",
        titulo: "Fácil Gestão",
        resumo:
            "Sistema web para pequenas empresas organizarem o quadro de funcionários, com folha de pagamento calculada automaticamente e aviso de contratos perto de vencer.",
        destaque: true,
        tipo: "Pessoal",
        ano: "", // TODO: ano em que começou
        status: "Em desenvolvimento",
        papel: "Design e desenvolvimento",
        cor: "#00a9e0",
        capa: "/projetos/facil-gestao/capa.webp",
        logo: "/projetos/facil-gestao/logo.png",
        tecnologias: ["JavaScript", "React", "Vite", "Firebase"],
        site: "https://facilgestao.netlify.app/login",
        codigo: "https://github.com/Mateusinhodev/facil-gestao",
        descricao: [
            "O Fácil Gestão é um sistema web pensado para pequenos negócios, como padarias, lojas e restaurantes, que ainda controlam funcionários, salários e prazos de contrato em planilhas soltas ou no papel. A proposta é reunir tudo isso em um só lugar, com uma interface simples para quem não é especialista em RH.",
            "Logo ao entrar, a visão geral mostra o que mais importa para o dono do negócio: quantos funcionários a empresa tem, o valor da folha mensal, o salário médio e quais contratos já venceram ou estão perto de vencer. A folha também aparece dividida por cargo, para ficar claro onde está o maior custo.",
            "Cada empresa cria a própria conta e informa o ramo de atividade, que o sistema usa para sugerir os cargos mais comuns do setor. A partir daí, é possível cadastrar cargos com departamento e salário base, e registrar cada funcionário com foto, dados pessoais e informações do contrato. O sistema calcula sozinho o tempo de empresa, a duração do contrato e a situação de cada um.",
            "Todo o sistema foi pensado para funcionar bem também no celular: a tabela de funcionários vira uma lista de cards e a navegação passa para um menu lateral.",
            "O projeto está em desenvolvimento. Os próximos módulos são Projetos, Relatórios e Finanças.",
        ],
        funcionalidades: [
            "Cadastro da empresa, com sugestão de cargos pelo ramo de atividade",
            "Painel com total de funcionários, folha mensal e salário médio",
            "Folha de pagamento dividida por cargo",
            "Aviso de contratos vencidos, que vencem hoje ou nos próximos 30 dias",
            "Busca por nome, cargo, e-mail ou CPF, com filtros por cargo e situação",
            "Ficha do funcionário com tempo de empresa e duração do contrato calculados",
            "Cadastro de funcionário com foto e salário base sugerido pelo cargo",
            "Cadastro de cargos com departamento e salário base",
            "Endereço da empresa preenchido automaticamente pelo CEP",
            "Layout responsivo, com menu lateral e lista em cards no celular",
        ],
        identidade: {
            cores: [
                { nome: "Azul-noite", hex: "#14263d" },
                { nome: "Azul principal", hex: "#1f4e79" },
                { nome: "Ciano", hex: "#00a9e0" },
                { nome: "Vermelho", hex: "#df3b31" },
                { nome: "Fundo", hex: "#eef1f4" },
                { nome: "Ativo", hex: "#1e6b47" },
                { nome: "Vence em breve", hex: "#8a5300" },
                { nome: "Vencido", hex: "#a3231a" },
            ],
            fontes: [{ nome: "IBM Plex Sans", uso: "Títulos, textos e números" }], // TODO: confirme a fonte
        },
        telas: [
            { src: "/projetos/facil-gestao/01-login.webp", legenda: "Login" },
            { src: "/projetos/facil-gestao/02-cadastro.webp", legenda: "Cadastro da empresa" },
            { src: "/projetos/facil-gestao/03-visao-geral.webp", legenda: "Visão geral" },
            { src: "/projetos/facil-gestao/04-funcionarios.webp", legenda: "Lista de funcionários" },
            { src: "/projetos/facil-gestao/05-ficha-funcionario.webp", legenda: "Ficha do funcionário" },
            { src: "/projetos/facil-gestao/06-novo-funcionario.webp", legenda: "Novo funcionário" },
            { src: "/projetos/facil-gestao/07-dados-empresa.webp", legenda: "Dados da empresa" },
            { src: "/projetos/facil-gestao/08-cargos.webp", legenda: "Cargos" },
            { src: "/projetos/facil-gestao/09-celular-visao-geral.webp", legenda: "Visão geral", formato: "mobile" },
            { src: "/projetos/facil-gestao/10-celular-menu.webp", legenda: "Menu", formato: "mobile" },
            { src: "/projetos/facil-gestao/11-celular-funcionarios.webp", legenda: "Funcionários", formato: "mobile" },
        ],
    },
    {
        slug: "labin-ifto",
        titulo: "Labin IFTO",
        resumo:
            "Sistema web para agendar e controlar o uso dos laboratórios do IFTO Campus Colinas do Tocantins, criado em um projeto de extensão.",
        destaque: true,
        tipo: "Extensão",
        ano: "2024",
        status: "Encerrado",
        papel: "Desenvolvimento web",
        cor: "#28a745",
        capa: "/projetos/labin-ifto/capa.webp",
        logo: "",
        tecnologias: ["Python", "Django", "Django REST Framework", "Swagger", "SQLite", "Bootstrap"],
        site: "",
        codigo: "https://github.com/Mateusinhodev/Labin-IFTO",
        descricao: [
            "O Labin IFTO nasceu de um projeto de extensão com o professor de Informática Fabiano Medeiros, no IFTO Campus Colinas do Tocantins. A ideia era criar um sistema web para organizar o agendamento e o controle dos laboratórios do campus, ligado a um equipamento de hardware desenvolvido pelo professor para controlar o acesso às salas.",
            "Desenvolvi o sistema web com Python e Django. O administrador cria a conta, entra no sistema e agenda as aulas escolhendo o laboratório, o professor, a data e os horários de início e fim. Os agendamentos aparecem em cards, e cada um pode ser aberto para editar ou excluir.",
            "Para conversar com o hardware, criei uma API REST com Django REST Framework, que permite listar, criar, consultar, atualizar e excluir agendamentos. A API tem documentação gerada automaticamente com Swagger e ReDoc.",
            "A integração com o equipamento acabou não acontecendo por causa do afastamento do professor. O sistema web ficou pronto, com a API preparada para essa ligação.",
        ],
        funcionalidades: [
            "Cadastro e login de administradores, com validação dos dados",
            "Agendamento de aulas por laboratório, professor, data e horário",
            "Lista de agendamentos em cards",
            "Edição e exclusão de agendamentos (CRUD completo)",
            "Cadastro de laboratórios e professores pelo painel administrativo do Django",
            "API REST para integração com o hardware de controle de acesso",
            "Documentação automática da API com Swagger e ReDoc",
        ],
        identidade: {
            cores: [
                { nome: "Verde (cabeçalho e ações)", hex: "#28a745" },
                { nome: "Amarelo (menu e cadastro)", hex: "#ffc107" },
                { nome: "Vermelho (excluir)", hex: "#dc3545" },
                { nome: "Cinza dos cards", hex: "#f8f9fa" },
            ],
            fontes: [{ nome: "Fonte do sistema", uso: "Padrão do Bootstrap 4" }],
        },
        telas: [
            { src: "/projetos/labin-ifto/01-login.webp", legenda: "Login" },
            { src: "/projetos/labin-ifto/02-cadastro.webp", legenda: "Cadastro de administrador" },
            { src: "/projetos/labin-ifto/03-agendamentos.webp", legenda: "Agendamentos" },
            { src: "/projetos/labin-ifto/04-agendar-aula.webp", legenda: "Agendar aula" },
            { src: "/projetos/labin-ifto/05-editar-agendamento.webp", legenda: "Editar ou excluir agendamento" },
            { src: "/projetos/labin-ifto/06-api-swagger.webp", legenda: "Documentação da API (Swagger)" },
            { src: "/projetos/labin-ifto/07-celular-login.webp", legenda: "Login", formato: "mobile" },
            { src: "/projetos/labin-ifto/08-celular-agendamentos.webp", legenda: "Agendamentos", formato: "mobile" },
        ],
    },
    {
        slug: "50maisconvidados",
        titulo: "50+ Convidados",
        resumo:
            "Site do grupo de futebol 50+ Convidados, de Guaraí, com o placar da rivalidade entre o 50+ Azul e o 50+ Vermelho, os campeões de cada temporada e a história do grupo.",
        destaque: false,
        tipo: "Cliente",
        ano: "2023",
        status: "No ar",
        papel: "Design e desenvolvimento",
        cor: "#daa520",
        capa: "/projetos/50maisconvidados/capa.webp",
        logo: "", // TODO: salve a logo em public/projetos/50maisconvidados/logo.png e coloque o caminho aqui
        tecnologias: ["HTML", "CSS", "JavaScript"],
        site: "https://50maisconvidados.vercel.app/",
        codigo: "https://github.com/Mateusinhodev/50mais_convidados",
        outrosLinks: [{ texto: "Ver versão de 2023", url: "https://50maisconvidados.netlify.app/" }],
        descricao: [
            "O 50+ Convidados foi o meu primeiro projeto a ir ao ar. É o site de um grupo de futebol de Guaraí formado por jogadores acima de 50 anos, que se dividem em dois times, o 50+ Azul e o 50+ Vermelho, e disputam uma temporada inteira com jogos todos os fins de semana.",
            "A primeira versão, de 2023, foi feita apenas com HTML e CSS. Em 2026 voltei ao projeto e o reformulei por completo: um visual novo, uso de JavaScript para deixar as páginas interativas e uma página nova contando a história do grupo. Comparar as duas versões mostra bem a minha evolução nesse tempo.",
            "Na página inicial, um placar mostra quantos títulos cada time tem, e a galeria de campeões permite escolher a temporada para ver o campeão e o vice, com a foto ampliada ao tocar. Os dados das temporadas ficam em uma lista no JavaScript, então adicionar um novo ano é só incluir um item.",
            "A página de história conta como o grupo surgiu, como funciona a temporada, a origem do nome e do escudo em uma linha do tempo, a diretoria, uma homenagem aos integrantes que já se foram e os eventos do grupo. No rodapé ficam os contatos pelo Instagram, WhatsApp e e-mail e os patrocinadores.",
        ],
        funcionalidades: [
            "Placar de títulos da rivalidade entre o 50+ Azul e o 50+ Vermelho",
            "Galeria de campeão e vice por temporada, com seleção de ano",
            "Foto ampliada ao tocar na imagem",
            "Temporadas em uma lista no JavaScript, fáceis de atualizar",
            "Página de história com linha do tempo da origem do nome e do escudo",
            "Apresentação da diretoria e homenagem aos integrantes que já se foram",
            "Eventos do grupo e chamada para quem quer participar",
            "Contatos por Instagram, WhatsApp e e-mail, e espaço para patrocinadores",
            "Menu adaptado para celular",
        ],
        identidade: {
            cores: [
                { nome: "Azul", hex: "#2228ff" },
                { nome: "Azul escuro", hex: "#060193" },
                { nome: "Vermelho", hex: "#f72929" },
                { nome: "Vermelho escuro", hex: "#830007" },
                { nome: "Ouro", hex: "#daa520" },
                { nome: "Fundo", hex: "#0b0d1a" },
                { nome: "Superfície", hex: "#151829" },
            ],
            fontes: [
                { nome: "Barlow Condensed", uso: "Títulos" },
                { nome: "Barlow", uso: "Textos" },
            ],
        },
        telas: [
            { src: "/projetos/50maisconvidados/01-inicio.webp", legenda: "Início e placar de títulos" },
            { src: "/projetos/50maisconvidados/02-campeoes.webp", legenda: "Campeões por temporada" },
            { src: "/projetos/50maisconvidados/03-historia-origem.webp", legenda: "História: como surgiu o grupo" },
            { src: "/projetos/50maisconvidados/04-como-funciona.webp", legenda: "Como funciona a temporada" },
            { src: "/projetos/50maisconvidados/05-como-surgiu-o-nome.webp", legenda: "Linha do tempo do nome e do escudo" },
            { src: "/projetos/50maisconvidados/06-diretoria.webp", legenda: "Diretoria" },
            { src: "/projetos/50maisconvidados/07-em-memoria-e-eventos.webp", legenda: "Em memória e eventos do grupo" },
            { src: "/projetos/50maisconvidados/08-celular-inicio.webp", legenda: "Início", formato: "mobile" },
            { src: "/projetos/50maisconvidados/09-celular-campeoes.webp", legenda: "Campeões", formato: "mobile" },
            { src: "/projetos/50maisconvidados/10-celular-historia.webp", legenda: "História", formato: "mobile" },
        ],
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
