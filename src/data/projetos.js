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
 * - outrosLinks:     botões extras, ex.: [{ texto: "Ver versão de 2023", url: "https://...", icone: "bx bx-history" }]
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
        slug: "globeconvert",
        titulo: "GlobeConvert",
        resumo:
            "Conversor de moedas com mapa mundial interativo e conteúdo de educação financeira, feito com React e TypeScript.",
        destaque: false,
        tipo: "Extracurricular",
        ano: "2026",
        status: "", // TODO: "Em desenvolvimento" ou "Concluído"
        papel: "Orientação e desenvolvimento", // TODO: confirme
        cor: "#14b8a6",
        capa: "/projetos/globeconvert/capa.webp",
        logo: "",
        tecnologias: ["React", "TypeScript", "Vite", "d3-geo", "CSS Modules"],
        site: "", // TODO: link do site no ar
        codigo: "https://github.com/douglassousa6-design/GlobeConvert",
        outrosLinks: [
            { texto: "GitHub do Douglas", url: "https://github.com/douglassousa6-design", icone: "bx bxl-github" },
        ],
        descricao: [
            "O GlobeConvert é um projeto extracurricular desenvolvido no IFTO Campus Formoso do Araguaia junto com o aluno Douglas Silvino. Ele reúne três formas de explorar as moedas do mundo: converter valores, descobrir a moeda de cada país em um mapa interativo e aprender os conceitos básicos do mercado de câmbio.",
            "O Douglas criou a primeira versão do conversor, e a partir dela evoluímos o projeto juntos: redesenhei o conversor e desenvolvi o mapa mundial, a seção Aprenda e o rodapé, e o Douglas seguiu acrescentando conteúdo, como as curiosidades sobre as moedas de cada país.",
            "O conversor trabalha com 20 moedas e cotações atualizadas diariamente pela ExchangeRate-API. O seletor de moedas foi feito do zero, com bandeiras e acessível pelo teclado: dá para navegar com as setas e buscar digitando, e o resultado aparece no formato brasileiro, com a taxa usada na conversão.",
            "O mapa é desenhado em SVG com d3-geo e topojson, sem precisar de chave de API. Ao passar o mouse, uma etiqueta mostra a bandeira, o nome e a moeda do país, e ao clicar abre um painel com moeda, símbolo, capital, região, cotação em reais e uma curiosidade. Quando a API REST Countries foi desativada, troquei a fonte por dados locais gerados a partir do pacote world-countries, o que deixou o mapa mais rápido e independente de serviços externos.",
            "A seção Aprenda explica câmbio, a diferença entre taxa comercial e turismo, a história das moedas e um glossário, além de perguntas frequentes sobre spread, IOF e viagens. Todo o site é responsivo, tem foco visível nos elementos interativos e respeita a preferência de movimento reduzido do sistema.",
        ],
        funcionalidades: [
            "Conversão entre 20 moedas com cotações atualizadas diariamente",
            "Seletor de moedas com bandeiras, navegável pelo teclado e com busca",
            "Botão para inverter as moedas de origem e destino",
            "Resultado no formato brasileiro, com a taxa usada",
            "Mapa mundial interativo em SVG, com todos os países",
            "Painel do país com moeda, capital, região, cotação em reais e curiosidade",
            "Atalhos para países populares",
            "Cards de educação financeira e perguntas frequentes",
            "Layout responsivo e acessível, com foco visível e movimento reduzido",
        ],
        identidade: {
            cores: [
                { nome: "Azul-noite", hex: "#0f172a" },
                { nome: "Azul profundo", hex: "#1e3a8a" },
                { nome: "Superfície", hex: "#1e293b" },
                { nome: "Azul principal", hex: "#2563eb" },
                { nome: "Azul claro", hex: "#3b82f6" },
                { nome: "Verde-água", hex: "#14b8a6" },
                { nome: "Verde-água claro", hex: "#5eead4" },
                { nome: "Texto", hex: "#f8fafc" },
            ],
            fontes: [{ nome: "Fonte do sistema", uso: "system-ui, em títulos e textos" }],
        },
        telas: [
            { src: "/projetos/globeconvert/01-inicio.webp", legenda: "Página inicial" },
            { src: "/projetos/globeconvert/02-conversor.webp", legenda: "Conversor de moedas" },
            { src: "/projetos/globeconvert/03-seletor-de-moedas.webp", legenda: "Seletor de moedas com bandeiras" },
            { src: "/projetos/globeconvert/04-mapa-mundial.webp", legenda: "Mapa mundial interativo" },
            { src: "/projetos/globeconvert/05-aprenda.webp", legenda: "Aprenda sobre moedas" },
            { src: "/projetos/globeconvert/06-perguntas-frequentes.webp", legenda: "Perguntas frequentes" },
            { src: "/projetos/globeconvert/07-rodape.webp", legenda: "Rodapé com as fontes dos dados" },
            { src: "/projetos/globeconvert/08-celular-inicio.webp", legenda: "Página inicial", formato: "mobile" },
            { src: "/projetos/globeconvert/09-celular-conversor.webp", legenda: "Conversor", formato: "mobile" },
            { src: "/projetos/globeconvert/10-celular-mapa.webp", legenda: "Mapa mundial", formato: "mobile" },
        ],
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
        resumo:
            "Site de saúde com calculadoras de IMC, TMB, água e massa magra, e acompanhamento de peso com gráfico de evolução.",
        destaque: false,
        tipo: "Pessoal",
        ano: "2025",
        status: "", // TODO: "Em desenvolvimento" ou "Concluído"
        papel: "Design e desenvolvimento",
        cor: "#10b981",
        capa: "/projetos/viva-leve/capa.webp",
        logo: "/projetos/viva-leve/logo.png",
        tecnologias: ["JavaScript", "React", "Vite", "CSS Modules", "Material Tailwind", "Vitest"],
        site: "https://viva-leve.netlify.app/",
        codigo: "https://github.com/Mateusinhodev/viva-leve",
        descricao: [
            "O Viva Leve é um site de saúde gratuito e sem cadastro, com quatro calculadoras e um espaço para acompanhar a evolução do peso. Comecei o projeto em julho de 2025 e, em outubro de 2026, voltei a ele para refatorar o código e criar a seção Meu progresso.",
            "As calculadoras mostram o IMC com a faixa da pessoa destacada na tabela de classificação, a taxa metabólica basal pela fórmula de Mifflin-St Jeor com quanto comer para manter, perder ou ganhar peso, a água recomendada dividida por turno do dia e a massa magra pela fórmula de Boer, com uma barra de proporção entre massa magra e gordura. Elas aceitam vírgula ou ponto, altura em metros ou centímetros, e recusam valores impossíveis em vez de mostrar resultados absurdos.",
            "Em Meu progresso, a pessoa registra o peso por data e acompanha a evolução em um gráfico que fiz em SVG, sem biblioteca, com tooltip pelo mouse, pelo toque e pelo teclado. Dá para definir uma meta, ver quanto falta e desfazer exclusões no histórico. Os dados ficam salvos no localStorage, só no navegador da pessoa, sem login e sem servidor.",
            "O site também traz lembretes para a jornada, um diário em PDF para baixar, busca de profissionais de saúde e artigos sobre alimentação. É responsivo, acessível pelo teclado, tem imagem de compartilhamento para redes sociais e conta com testes automatizados com Vitest.",
        ],
        funcionalidades: [
            "Calculadora de IMC com a faixa destacada na tabela de classificação",
            "Taxa metabólica basal com calorias para manter, perder ou ganhar peso",
            "Água recomendada por dia, dividida por turno e em copos",
            "Massa magra e gordura corporal com barra de proporção",
            "Validação que recusa valores impossíveis e aceita vírgula ou ponto",
            "Registro de peso por data, com meta e histórico",
            "Gráfico de evolução em SVG feito sem biblioteca",
            "Dados salvos no navegador, sem login",
            "Diário de acompanhamento em PDF para baixar",
            "Layout responsivo e acessível pelo teclado",
        ],
        identidade: {
            cores: [
                { nome: "Grafite", hex: "#3b4554" },
                { nome: "Cinza-azulado", hex: "#64748b" },
                { nome: "Fundo", hex: "#eaeaea" },
                { nome: "Superfície", hex: "#f1f5f9" },
                { nome: "Verde", hex: "#10b981" },
                { nome: "Verde escuro", hex: "#047857" },
                { nome: "Verde claro", hex: "#d1fae5" },
                { nome: "Vermelho", hex: "#ef4444" },
            ],
            fontes: [{ nome: "Lato", uso: "Títulos e textos" }],
        },
        telas: [
            { src: "/projetos/viva-leve/01-inicio.webp", legenda: "Página inicial" },
            { src: "/projetos/viva-leve/02-calculadoras.webp", legenda: "Calculadoras, jornada e ajuda profissional" },
            { src: "/projetos/viva-leve/03-resultado-imc.webp", legenda: "Resultado do IMC" },
            { src: "/projetos/viva-leve/04-calculadora-tmb.webp", legenda: "Calculadora de TMB" },
            { src: "/projetos/viva-leve/05-resultado-tmb.webp", legenda: "Resultado da TMB" },
            { src: "/projetos/viva-leve/06-resultado-agua.webp", legenda: "Água recomendada" },
            { src: "/projetos/viva-leve/07-resultado-massa-magra.webp", legenda: "Massa magra" },
            { src: "/projetos/viva-leve/08-meu-progresso.webp", legenda: "Meu progresso" },
            { src: "/projetos/viva-leve/09-celular-inicio.webp", legenda: "Página inicial", formato: "mobile" },
            { src: "/projetos/viva-leve/10-celular-calculadoras.webp", legenda: "Calculadoras", formato: "mobile" },
            { src: "/projetos/viva-leve/11-celular-resultado-imc.webp", legenda: "Resultado do IMC", formato: "mobile" },
            { src: "/projetos/viva-leve/12-celular-meu-progresso.webp", legenda: "Meu progresso", formato: "mobile" },
        ],
    },
    {
        slug: "sorriso-perfeito",
        titulo: "Sorriso Perfeito",
        resumo:
            "Site para uma clínica odontológica fictícia, com apresentação dos serviços, formulário de contato validado e agendamento online em 4 etapas.",
        destaque: false,
        tipo: "Pessoal",
        ano: "2025",
        status: "", // TODO: "Em desenvolvimento" ou "Concluído"
        papel: "Design e desenvolvimento",
        cor: "#45d3d3",
        capa: "/projetos/sorriso-perfeito/capa.webp",
        logo: "",
        tecnologias: ["JavaScript", "React", "Vite", "Tailwind CSS", "shadcn/ui", "React Router", "React Hook Form", "Zod"],
        site: "https://sorrisoperfeito-clinica.netlify.app/",
        codigo: "https://github.com/Mateusinhodev/sorriso-perfeito",
        descricao: [
            "O Sorriso Perfeito é o site de uma clínica odontológica fictícia, criado para praticar o desenvolvimento de um site institucional completo, do visual ao agendamento. A identidade usa um azul profissional com turquesa, em um layout limpo e responsivo, e as imagens foram geradas especialmente para representar a clínica.",
            "A página inicial apresenta a clínica com um banner de impacto, os diferenciais, o dentista responsável, os serviços em cards reutilizáveis e uma chamada para agendar. A página de contato tem um formulário validado com React Hook Form e Zod, que mostra mensagens de erro em cada campo, além dos canais de atendimento e dos horários.",
            "O destaque é o agendamento em 4 etapas, com um indicador de progresso: a pessoa escolhe o serviço, com duração e preço, e o profissional; seleciona a data em um calendário e o horário; preenche os dados com um resumo do agendamento; e, na confirmação, pode enviar os detalhes da consulta já formatados pelo WhatsApp.",
        ],
        funcionalidades: [
            "Página inicial com banner, diferenciais, dentista responsável e serviços",
            "Cards de serviço reutilizáveis",
            "Formulário de contato validado com React Hook Form e Zod",
            "Agendamento em 4 etapas com indicador de progresso",
            "Escolha de serviço, com duração e preço, e de profissional",
            "Calendário e seleção de horário",
            "Resumo do agendamento antes da confirmação",
            "Envio da consulta formatada pelo WhatsApp",
            "Navegação entre páginas com React Router",
            "Layout responsivo",
        ],
        identidade: {
            cores: [
                { nome: "Azul principal", hex: "#0369a0" },
                { nome: "Turquesa", hex: "#45d3d3" },
                { nome: "Texto", hex: "#344256" },
                { nome: "Texto secundário", hex: "#65758b" },
                { nome: "Fundo", hex: "#f8fafc" },
                { nome: "Superfície", hex: "#f1f5f9" },
            ],
            fontes: [{ nome: "Fonte do sistema", uso: "Padrão do Tailwind CSS" }],
        },
        telas: [
            { src: "/projetos/sorriso-perfeito/01-inicio.webp", legenda: "Página inicial" },
            { src: "/projetos/sorriso-perfeito/02-diferenciais-e-dentista.webp", legenda: "Diferenciais e dentista responsável" },
            { src: "/projetos/sorriso-perfeito/03-servicos.webp", legenda: "Serviços" },
            { src: "/projetos/sorriso-perfeito/04-chamada-e-rodape.webp", legenda: "Chamada para agendar e rodapé" },
            { src: "/projetos/sorriso-perfeito/05-contato.webp", legenda: "Contato" },
            { src: "/projetos/sorriso-perfeito/06-agendamento-servico.webp", legenda: "Agendamento: escolha do serviço" },
            { src: "/projetos/sorriso-perfeito/07-agendamento-data-e-hora.webp", legenda: "Agendamento: data e horário" },
            { src: "/projetos/sorriso-perfeito/08-agendamento-dados.webp", legenda: "Agendamento: dados e resumo" },
            { src: "/projetos/sorriso-perfeito/09-agendamento-confirmacao.webp", legenda: "Agendamento: confirmação" },
            { src: "/projetos/sorriso-perfeito/10-celular-inicio.webp", legenda: "Página inicial", formato: "mobile" },
            { src: "/projetos/sorriso-perfeito/11-celular-agendamento.webp", legenda: "Agendamento", formato: "mobile" },
            { src: "/projetos/sorriso-perfeito/12-celular-contato.webp", legenda: "Contato", formato: "mobile" },
        ],
    },
];

export const PROJETOS_DESTAQUE = PROJETOS.filter((p) => p.destaque).slice(0, 3);
