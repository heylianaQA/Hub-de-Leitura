# 📚 Hub de Leitura — Testes Automatizados com Cypress

> Projeto de testes automatizados para o **Hub de Leitura**, uma plataforma de empréstimo de livros. Os testes cobrem os fluxos de Login, Cadastro, Catálogo/Busca de Livros e um fluxo E2E completo de empréstimo com criação de cadastro.

![CI](https://github.com/heylianaQA/Hub-de-Leitura/actions/workflows/cypress.yml/badge.svg)
[![Relatório de Testes](https://img.shields.io/badge/Relatório-Mochawesome-blue?style=flat&logo=cypress)](https://heylianaqa.github.io/Hub-de-Leitura/)
![Cypress](https://img.shields.io/badge/Cypress-15.x-brightgreen?logo=cypress)
![BDD](https://img.shields.io/badge/BDD-Gherkin-success?logo=cucumber)

---

## 🎯 Objetivo do Projeto

Validar os principais fluxos funcionais do Hub de Leitura por meio de testes automatizados, aplicando boas práticas de QA como BDD com Gherkin, Page Objects, dados dinâmicos com Faker e integração contínua via GitHub Actions.

---

## 📊 Relatório de Execução

O relatório visual gerado pelo **Mochawesome** é publicado automaticamente via GitHub Pages a cada execução do pipeline.

👉 **[Acesse o Relatório Completo aqui](https://heylianaqa.github.io/Hub-de-Leitura/)**

> O relatório é atualizado automaticamente a cada push na branch `main`.

---

## ✅ Cobertura de Testes

### 🔐 Login

| Tipo | Cenários |
|---|---|
| ✅ Positivo | 2 cenários (ex: login com credenciais válidas) |
| ❌ Negativo | 2 cenários (ex: senha incorreta, usuário inexistente) |

### 📝 Cadastro

| Tipo | Cenários |
|---|---|
| ✅ Positivo | 1 cenário (cadastro com dados válidos) |
| ❌ Negativo | 5 cenários (ex: campos obrigatórios vazios, e-mail inválido) |

### 📖 Catálogo / Busca de Livros

| Tipo | Cenários |
|---|---|
| ✅ Positivo | 5 cenários (ex: busca por título, filtros, listagem) |

### 🔄 Fluxo E2E — Empréstimo de Livros

Cenário positivo completo: um usuário se cadastra na plataforma e realiza o empréstimo de **2 livros**.

---

## 🗂️ Estrutura do Projeto

```
hub-de-leitura/
├── .github/
│   └── workflows/
│       └── cypress.yml          # Pipeline CI + geração de relatório
├── cypress/
│   ├── e2e/
│   │   ├── fluxo/
│   │   │   ├── fluxo-emprestimo.cy.js
│   │   │   └── fluxo-emprestimo.feature
│   │   └── integration/
│   │       ├── busca-livros.feature
│   │       ├── busca-livros.spec.cy.js
│   │       ├── cadastro.spec.cy.js
│   │       ├── login.feature
│   │       └── login.spec.cy.js
│   ├── fixtures/
│   │   ├── perfil.json
│   │   └── user.json
│   ├── reports/                 # Relatórios Mochawesome (gerado em runtime)
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── docs/
│   ├── plano-de-teste.md
│   ├── casos-de-teste.md
│   └── relatorio-de-bugs.md
├── hub-de-leitura-integrado/    # Aplicação testada
├── cypress.config.js
└── package.json
```

---

## 🛠️ Tecnologias Utilizadas

| Ferramenta | Finalidade |
|---|---|
| [Cypress](https://www.cypress.io/) | Framework de testes E2E |
| [Cucumber / Gherkin](https://cucumber.io/) | BDD com arquivos `.feature` |
| [@faker-js/faker](https://fakerjs.dev/) | Geração de dados dinâmicos e aleatórios |
| [Mochawesome](https://github.com/adamgruber/mochawesome) | Relatório visual HTML dos testes |
| Fixtures | Dados estáticos reutilizáveis nos testes |
| Custom Commands | Comandos Cypress reutilizáveis (`commands.js`) |
| [GitHub Actions](https://github.com/features/actions) | CI/CD com publicação automática do relatório |

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão recomendada: LTS)
- npm

### Passo 1 — Iniciar o site (Hub de Leitura)

```bash
# Entre na pasta do site
cd hub-de-leitura-integrado

# Instale as dependências e inicie o servidor
npm install && npm start
```

> Mantenha esse terminal aberto. O site precisa estar rodando para os testes funcionarem.

### Passo 2 — Executar os testes (em outro terminal)

```bash
# Volte para a pasta raiz do projeto
cd ..

# Instale as dependências
npm install

# Executar os testes e gerar o relatório
npm run test:report
```

Para abrir a interface visual do Cypress:

```bash
npx cypress open
```

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run cy:run` | Executa os testes no modo headless |
| `npm run report:merge` | Combina os JSONs do Mochawesome |
| `npm run report:generate` | Gera o relatório HTML final |
| `npm run test:report` | Executa tudo: testes + relatório |

---

## 🔁 Integração Contínua

O projeto utiliza **GitHub Actions** para executar os testes automaticamente a cada `push` ou `pull request`. O pipeline:

1. Sobe a aplicação Hub de Leitura localmente
2. Executa todos os testes Cypress
3. Gera o relatório visual com Mochawesome
4. Publica o relatório no **GitHub Pages** automaticamente

---

## 📄 Documentação

A pasta `documentos/` contém:

- 📋 **Plano de Teste** — estratégia, escopo e abordagem
- 📑 **Casos de Teste** — detalhamento de cada cenário
- 🐛 **Relatório de Bugs** — bugs encontrados durante a execução

---

## 👩‍💻 Autora

**Ana Inocêncio**
[LinkedIn](https://www.linkedin.com/in/heyana-inocencio/) - heyliana.qa@gmail.com