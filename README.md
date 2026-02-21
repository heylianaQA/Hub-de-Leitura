# 📚 Hub de Leitura — Testes Automatizados com Cypress

> Projeto de testes automatizados para o **Hub de Leitura**, uma plataforma de empréstimo de livros. Os testes cobrem os fluxos de Login, Cadastro, Catálogo/Busca de Livros e um fluxo E2E completo de empréstimo com criação de cadastro.

---

## 🗂️ Estrutura do Projeto

```
hub-de-leitura/
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
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── docs/                                 
├── hub-de-leitura-integrado/            
├── cypress.config.js
└── package.json
```

---

## ✅ Cobertura de Testes

### 🔐 Login
| Tipo | Cenários |
|------|----------|
| ✅ Positivo | 2 cenários (ex: login com credenciais válidas) |
| ❌ Negativo | 2 cenários (ex: senha incorreta, usuário inexistente) |

### 📝 Cadastro
| Tipo | Cenários |
|------|----------|
| ✅ Positivo | 1 cenário (cadastro com dados válidos) |
| ❌ Negativo | 5 cenários (ex: campos obrigatórios vazios, e-mail inválido) |

### 📖 Catálogo / Busca de Livros
| Tipo | Cenários |
|------|----------|
| ✅ Positivo | 5 cenários (ex: busca por título, filtros, listagem) |

### 🔄 Fluxo E2E — Empréstimo de Livros
Cenário positivo completo: um usuário se cadastra na plataforma e realiza o empréstimo de **2 livros**.

---

## 🛠️ Tecnologias Utilizadas

| Ferramenta | Finalidade |
|---|---|
| [Cypress](https://www.cypress.io/) | Framework de testes E2E |
| [Cucumber / Gherkin](https://cucumber.io/) | BDD com arquivos `.feature` |
| [@faker-js/faker](https://fakerjs.dev/) | Geração de dados dinâmicos e aleatórios |
| Fixtures | Dados estáticos reutilizáveis nos testes |
| Custom Commands | Comandos Cypress reutilizáveis (`commands.js`) |
| [GitHub Actions](https://github.com/features/actions) | Integração Contínua (CI) |

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

# Instale as dependências do Cypress e execute os testes
npm install && npx cypress run
```

Para abrir a interface visual do Cypress:

```bash
npx cypress open
```

---

## 📄 Documentação

A pasta `docs/` contém os seguintes arquivos:

- 📋 **Plano de Teste** — estratégia, escopo e abordagem dos testes
- 📑 **Casos de Teste** — detalhamento de cada cenário testado
- 🐛 **Relatório de Bugs** — bugs encontrados durante a execução

---

## 🔁 Integração Contínua

O projeto utiliza **GitHub Actions** para executar os testes automaticamente a cada push ou pull request. O pipeline garante que nenhuma regressão passe despercebida.

---

## 📦 Dependências (package.json)

```json
{
  "dependencies": {
    "@faker-js/faker": "^9.9.0",
    "cypress": "^15.10.0"
  },
  "scripts": {
    "cy:run": "npx cypress run"
  }
}
```

---

## 👩‍💻 Autora

Feito com 💙 para garantir a qualidade do **Hub de Leitura**.