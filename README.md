# <MateusDev /> — Portfólio

Portfólio pessoal de **Mateus Rodrigues**, desenvolvedor Front-End. Aqui reúno quem sou, as tecnologias que uso, meus projetos e minha trajetória profissional e acadêmica.

🔗 **Acesse:** [link-do-seu-portfolio.vercel.app](https://link-do-seu-portfolio.vercel.app) <!-- TODO: troque pelo link do deploy -->

<!-- TODO: adicione um print do site em public/preview.png e descomente a linha abaixo -->
<!-- ![Preview do portfólio](./public/preview.png) -->

---

## ✨ Funcionalidades

- **Design responsivo:** layout pensado para celular, tablet e desktop
- **Menu com destaque da seção ativa:** o link acompanha a rolagem da página, com menu hambúrguer animado no mobile
- **Efeito de digitação na apresentação:** alterna entre os cargos e áreas de atuação
- **Skills em abas:** organizadas por categoria (Front-end, Back-end, Design e Ferramentas)
- **Cards de projetos:** com tecnologias usadas e links para o site e o código
- **Linha do tempo:** separa formação e experiência profissional
- **Formulário de contato funcional:** envio via EmailJS, com feedback de envio e proteção anti-spam
- **Download do currículo** em PDF
- **Acessibilidade:** HTML semântico, navegação por teclado, `aria-labels` e respeito à preferência de "reduzir movimento"

## 🛠️ Tecnologias

| Tecnologia | Uso |
| --- | --- |
| [React](https://react.dev/) | Construção da interface |
| CSS3 | Estilização (sem frameworks), com Grid, Flexbox e animações |
| [EmailJS](https://www.emailjs.com/) | Envio de e-mails pelo formulário de contato |
| [Boxicons](https://boxicons.com/) | Ícones da interface |
| [Devicon](https://devicon.dev/) | Ícones das tecnologias |
| [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter) | Tipografia |

## 📂 Estrutura do projeto

```
src/
├── assets/              # Currículo (PDF) e imagens
├── components/
│   ├── Header/          # Cabeçalho fixo com menu de navegação
│   └── Titulo/          # Título padrão das seções
├── pages/
│   ├── Home/            # Apresentação
│   ├── Sobre/           # Sobre mim
│   ├── Habilidades/     # Skills em abas
│   ├── Projetos/        # Cards de projetos
│   ├── Experiencias/    # Linha do tempo (formação e experiência)
│   ├── Contato/         # Formulário de contato
│   └── Footer/          # Rodapé
├── App.js
├── App.css              # Estilos globais
└── index.js
```

## 🚀 Como rodar localmente

**Pré-requisitos:** [Node.js](https://nodejs.org/) instalado.

```bash
# Clone o repositório
git clone https://github.com/Mateusinhodev/portfolio_MateusDev.git

# Entre na pasta
cd portfolio_MateusDev

# Instale as dependências
npm install

# Rode o projeto
npm start
```

O site abre em `http://localhost:3000`.

Para gerar a versão de produção:

```bash
npm run build
```

## ✏️ Como atualizar o conteúdo

O conteúdo de cada seção fica em arrays no topo dos arquivos, então não é preciso mexer no layout:

| O que mudar | Onde |
| --- | --- |
| Cargos do efeito de digitação e redes sociais | `pages/Home` → `CARGOS` e `SOCIAIS` |
| Cards de destaque | `pages/Sobre` → `DESTAQUES` |
| Tecnologias | `pages/Habilidades` → `CATEGORIAS` |
| Projetos | `pages/Projetos` → `PROJETOS` |
| Formação e experiência | `pages/Experiencias` → `FORMACAO` e `EXPERIENCIAS` |
| Links de contato | `pages/Contato` → `CONTATOS` |

## 📬 Configuração do formulário (EmailJS)

O formulário usa o EmailJS. Para usar com a sua própria conta:

1. Crie uma conta em [emailjs.com](https://www.emailjs.com/) e configure um serviço de e-mail e um template.
2. No template, use as variáveis `{{from_name}}`, `{{from_email}}`, `{{from_assunto}}` e `{{message}}`, e coloque `{{reply_to}}` no campo **Reply To**.
3. Troque os IDs no objeto `EMAILJS` em `src/pages/Contato`.
4. Em **Account → Security**, restrinja o uso da chave ao domínio do seu site.

## 👨‍💻 Autor

**Mateus Rodrigues**, Desenvolvedor Front-End

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mateus-rodrigues-a47002264/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Mateusinhodev)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/mateus.mt11/)

---

Feito com 💙 por Mateus Rodrigues.