# 📄 Plano de Teste

> **Projeto:** Hub de Leitura
> **Versão:** 1.0.0  
> **Responsável:** Ana Inocêncio
> **Data de criação:** 2026-02-21  

---

## Índice

- [1. Introdução](#1-introdução)
- [2. Objetivos](#2-objetivos)
- [3. Escopo](#3-escopo)
- [4. Abordagem de Teste](#4-abordagem-de-teste)
- [5. Ambiente de Teste](#5-ambiente-de-teste)
- [6. Ferramentas Utilizadas](#6-ferramentas-utilizadas)
- [7. Módulos Testados](#7-módulos-testados)
- [8. Critérios de Entrada e Saída](#8-critérios-de-entrada-e-saída)
- [9. Cronograma](#9-cronograma)
- [10. Riscos e Mitigações](#10-riscos-e-mitigações)
- [11. Resumo Geral dos Resultados](#11-resumo-geral-dos-resultados)
- [12. Bugs Identificados](#12-bugs-identificados)

---

## 1. Introdução

Este documento descreve o plano de teste para a aplicação Hub de Leitura, cobrindo as funcionalidades de **Login**, **Cadastro**, **Busca de Livros** e **Fluxo de Empréstimo**. O objetivo é garantir que as funcionalidades implementadas atendam aos requisitos esperados e que os fluxos principais funcionem corretamente antes da entrega.

---

## 2. Objetivos

- Validar os fluxos funcionais das principais funcionalidades da aplicação
- Garantir que mensagens de erro e validações de campos estejam funcionando corretamente
- Verificar o fluxo completo de empréstimo de um livro de ponta a ponta (E2E)
- Identificar e documentar bugs encontrados durante a execução dos testes
- Assegurar a qualidade da aplicação antes da entrega

---

## 3. Escopo

### 3.1 Dentro do Escopo

- Funcionalidade de **Login** (credenciais válidas, inválidas e validações de campos)
- Funcionalidade de **Cadastro** (fluxo de sucesso, e-mail duplicado e validações de campos)
- Funcionalidade de **Busca de Livros** (pesquisa, navegação e adição à cesta)
- **Fluxo de Empréstimo** completo (login, perfil, seleção de livros, cesta e checkout)

### 3.2 Fora do Escopo

- Testes de performance e carga
- Testes de segurança e penetração
- Testes em outros navegadores além do utilizado no Cypress
- Funcionalidades não listadas neste plano

---

## 4. Abordagem de Teste

Os testes foram realizados de forma automatizada utilizando o **Cypress**, seguindo a metodologia **BDD (Behavior Driven Development)** com cenários escritos em **Gherkin** (linguagem pt-BR). Os testes cobrem os seguintes tipos:

- **Testes Funcionais:** validação dos fluxos e comportamentos esperados da aplicação
- **Testes de Validação:** verificação das mensagens de erro e restrições de campos
- **Testes E2E (End-to-End):** simulação do fluxo completo do usuário, do login ao checkout

Para cada funcionalidade foi criado:
- Um arquivo `.feature` com os cenários em Gherkin
- Um arquivo de casos de teste `.md` com detalhamento dos passos, resultados esperados e obtidos

---

## 5. Ambiente de Teste

| Item                  | Detalhe                        |
|-----------------------|--------------------------------|
| **Ferramenta**        | Cypress                        |
| **Linguagem**         | TypeScript / JavaScript        |
| **Dados de Teste**    | Faker.js + Fixtures            |


---

## 6. Ferramentas Utilizadas

| Ferramenta      | Finalidade                                      |
|-----------------|-------------------------------------------------|
| **Cypress**     | Automação e execução dos testes                 |
| **Faker.js**    | Geração de dados dinâmicos para os testes       |
| **Fixtures**    | Armazenamento e reutilização de dados de teste  |
| **Gherkin/BDD** | Escrita dos cenários em linguagem natural       |

---

## 7. Módulos Testados

### 7.1 Login

Testes relacionados à autenticação do usuário, cobrindo cenários de sucesso com credenciais predefinidas e via fixture, além de validações de campos obrigatórios.

| ID      | Cenário                                           | Tipo               | Status    |
|---------|---------------------------------------------------|--------------------|-----------|
| CT-001  | Login bem-sucedido com credenciais predefinidas   | Funcional          | ✅ Passou |
| CT-002  | Login bem-sucedido usando dados de fixture        | Funcional          | ✅ Passou |
| CT-003  | Exibir mensagem de erro para credenciais inválidas | Funcional         | ✅ Passou |
| CT-004  | Exibir alerta para e-mail não informado           | Validação          | ✅ Passou |
| CT-005  | Exibir mensagem de erro para senha não informada  | Validação          | ❌ Falhou |

---

### 7.2 Cadastro

Testes relacionados ao registro de novos usuários, cobrindo o fluxo de sucesso, tentativa de cadastro com e-mail já existente e validações de todos os campos do formulário.

| ID      | Cenário                                           | Tipo               | Status    |
|---------|---------------------------------------------------|--------------------|-----------|
| CT-001  | Deve criar cadastro com sucesso                   | Funcional          | ✅ Passou |
| CT-002  | Deve mostrar erro para usuário já cadastrado      | Funcional          | ✅ Passou |
| CT-003  | Deve mostrar erro no campo Nome                   | Validação          | ✅ Passou |
| CT-004  | Deve mostrar erro no campo E-mail                 | Validação          | ✅ Passou |
| CT-005  | Deve mostrar erro no campo Telefone               | Validação          | ❌ Falhou |
| CT-006  | Deve mostrar erro no campo Senha                  | Validação          | ✅ Passou |
| CT-007  | Deve mostrar erro no campo Confirmar Senha        | Validação          | ✅ Passou |

---

### 7.3 Busca de Livros

Testes relacionados à busca de livros pelo catálogo, navegação para páginas de detalhes e adição de livros à cesta de diferentes formas.

| ID      | Cenário                                                    | Tipo               | Status    |
|---------|------------------------------------------------------------|--------------------|-----------|
| CT-001  | Encontrar livro pela barra de pesquisa                     | Funcional          | ✅ Passou |
| CT-002  | Abrir página de detalhes do primeiro livro                 | Funcional          | ✅ Passou |
| CT-003  | Abrir página de detalhes do último livro                   | Funcional          | ✅ Passou |
| CT-004  | Abrir página de detalhes do quinto livro                   | Funcional          | ✅ Passou |
| CT-005  | Adicionar livro à cesta pela página de detalhes            | Funcional          | ✅ Passou |
| CT-006  | Adicionar livro à cesta diretamente do catálogo            | Funcional          | ✅ Passou |
| CT-007  | Adicionar 2 livros na cesta                                | Funcional          | ✅ Passou |
| CT-008  | Adicionar 3 livros na cesta de forma automatizada          | Funcional          | ✅ Passou |

---

### 7.4 Fluxo de Empréstimo

Teste E2E que cobre o fluxo completo de empréstimo de um livro, desde o login e atualização de perfil até o checkout e confirmação da reserva. Os casos são dependentes entre si e devem ser executados em sequência.

| ID      | Cenário                                                        | Tipo          | Status    |
|---------|----------------------------------------------------------------|---------------|-----------|
| CT-001  | Login e verificação do perfil do usuário                       | Funcional/E2E | ✅ Passou |
| CT-002  | Atualização de perfil do usuário                               | Funcional/E2E | ✅ Passou |
| CT-003  | Adicionar primeiro livro à cesta pela página de detalhes       | Funcional/E2E | ✅ Passou |
| CT-004  | Adicionar segundo livro e verificar contador da cesta          | Funcional/E2E | ✅ Passou |
| CT-005  | Remover livro da cesta e realizar checkout                     | Funcional/E2E | ✅ Passou |

---

## 8. Critérios de Entrada e Saída

### 8.1 Critérios de Entrada

- Ambiente de teste configurado e acessível
- Fixtures e dados de teste preparados
- Funcionalidades implementadas e disponíveis para teste

### 8.2 Critérios de Saída

- Todos os casos de teste planejados executados
- Bugs encontrados documentados no relatório de bugs
- Taxa de aprovação mínima de 80% dos casos de teste

---

## 9. Cronograma

| Atividade                        |  Responsável  |  Status       |
|----------------------------------|---------------|---------------|
| Elaboração do Plano de Teste     | Ana InocÊncio | ✅ Concluído  |
| Criação dos arquivos `.feature`  | Ana InocÊncio | ✅ Concluído  |
| Criação dos casos de teste       | Ana InocÊncio | ✅ Concluído  |
| Execução dos testes — Login      | Ana InocÊncio | ✅ Concluído  |
| Execução dos testes — Cadastro   | Ana InocÊncio | ✅ Concluído  |
| Execução dos testes — Busca      | Ana InocÊncio | ✅ Concluído  |
| Execução dos testes — Fluxo E2E  | Ana InocÊncio | ✅ Concluído  |
| Elaboração do Relatório de Bugs  | Ana InocÊncio | ✅ Concluído  |

---

## 10. Riscos e Mitigações

| Risco                                              | Probabilidade | Impacto | Mitigação                                              |
|----------------------------------------------------|---------------|---------|--------------------------------------------------------|
| Dados de fixture desatualizados                    | Média         | Alto    | Recriar fixtures antes de cada ciclo de testes         |
| Falha no ambiente de teste                         | Baixa         | Alto    | Verificar disponibilidade do ambiente antes de iniciar |
| Dependência entre testes E2E                       | Alta          | Médio   | Executar os CTs do fluxo de empréstimo em sequência    |
| Bugs não reproduzíveis em ambiente de staging      | Média         | Médio   | Documentar passos detalhados e evidências              |

---

## 11. Resumo Geral dos Resultados

| Módulo               | Total | ✅ Passou | ❌ Falhou | Taxa de Aprovação |
|----------------------|-------|-----------|-----------|-------------------|
| Login                | 5     | 4         | 1         | 80%               |
| Cadastro             | 7     | 6         | 1         | 86%               |
| Busca de Livros      | 8     | 8         | 0         | 100%              |
| Fluxo de Empréstimo  | 5     | 5         | 0         | 100%              |
| **Total Geral**      | **25**| **23**    | **2**     | **92%**           |

---

## 12. Bugs Identificados

| ID      | Módulo    | Descrição                                                                               | Severidade | Status       |
|---------|-----------|-----------------------------------------------------------------------------------------|------------|--------------|
| BUG-001 | Login     | Campo de senha sem mensagem de erro ao não ser preenchido — exibe apenas borda vermelha |   Média    |  🔴 Aberto  |
| BUG-002 | Cadastro  | Campo de telefone não valida quantidade de dígitos — nenhuma mensagem de erro exibida   |   Média    |  🔴 Aberto  |

> Para detalhes completos de cada bug, consultar o **Relatório de Bugs**.

---
