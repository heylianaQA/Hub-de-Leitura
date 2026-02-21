# 📋 Casos de Teste — Fluxo de Empréstimo de um Livro

> **Módulo/Funcionalidade:** Fluxo de Empréstimo  
> **Versão:** 1.0.0  
> **Responsável:** Ana Inocêncio
> **Última atualização:** 2026-02-21  

---

## Índice

- [Visão Geral](#visão-geral)
- [Casos de Teste](#casos-de-teste)
- [Resultados](#resultados)

---

## Visão Geral

Teste de fluxo end-to-end (E2E) de empréstimo de um livro, cobrindo desde o login e atualização de perfil, passando pela seleção e adição de livros à cesta, até o checkout e confirmação da reserva.

**Ambiente de Teste:**
- Ferramenta: Cypress
- Página testada: Home / Catálogo / Carrinho / Checkout

---

## Casos de Teste

---

### CT-001 — Login e verificação do perfil do usuário

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-001               |
| **Módulo**      | Fluxo de Empréstimo  |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional / E2E      |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se o usuário consegue realizar login e visualizar seu nome na seção de informações da conta.

**Pré-condições:**
- Usuário cadastrado no sistema com credenciais válidas

**Passos:**

1. Acessar a página inicial
2. Clicar no link da conta do usuário
3. Realizar login com credenciais válidas

**Resultado Esperado:**  
O nome do usuário deve ser exibido corretamente na seção de informações do usuário.

**Resultado Obtido:**  
Nome do usuário exibido corretamente após o login.

---

### CT-002 — Atualização de perfil do usuário

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-002               |
| **Módulo**      | Fluxo de Empréstimo  |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional / E2E      |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se o usuário consegue atualizar sua data de nascimento e receber a confirmação de sucesso.

**Pré-condições:**
- Usuário autenticado no sistema (CT-001 executado)

**Passos:**

1. Clicar no botão **"Atualizar Conta"**
2. Inserir uma data de nascimento aleatória
3. Clicar no botão **"Salvar"**

**Resultado Esperado:**  
A mensagem `"Perfil atualizado com sucesso!"` deve ser exibida.

**Resultado Obtido:**  
Mensagem de confirmação exibida corretamente conforme esperado.

---

### CT-003 — Adicionar primeiro livro à cesta pela página de detalhes

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-003               |
| **Módulo**      | Fluxo de Empréstimo  |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional / E2E      |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se o usuário consegue navegar pelo catálogo, acessar a página de detalhes de um livro e adicioná-lo à cesta com sucesso.

**Pré-condições:**
- Usuário autenticado no sistema (CT-001 executado)
- Pelo menos 1 livro disponível no catálogo

**Passos:**

1. Clicar no botão de **informações (info)**
2. Clicar no botão primário do grid de livros
3. Visualizar os detalhes de um livro aleatório
4. Clicar no botão secundário para navegar ao livro
5. Visualizar os detalhes do livro selecionado
6. Clicar no botão **"Adicionar à Cesta"**

**Resultado Esperado:**  
A mensagem `"Livro adicionado à cesta com sucesso!"` deve ser exibida.

**Resultado Obtido:**  
Mensagem de confirmação exibida corretamente e livro adicionado à cesta.

---

### CT-004 — Adicionar segundo livro e verificar contador da cesta

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-004               |
| **Módulo**      | Fluxo de Empréstimo  |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional / E2E      |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se ao adicionar um segundo livro à cesta o contador é atualizado corretamente para `"2"`.

**Pré-condições:**
- Usuário autenticado no sistema (CT-001 executado)
- Um livro já adicionado à cesta (CT-003 executado)

**Passos:**

1. Clicar no botão secundário para voltar ao catálogo
2. Selecionar um livro aleatório diferente do anterior
3. Verificar o contador da cesta

**Resultado Esperado:**  
O contador da cesta deve exibir `"2"`.

**Resultado Obtido:**  
Contador da cesta atualizado corretamente para `"2"`.

---

### CT-005 — Remover livro da cesta e realizar checkout

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-005               |
| **Módulo**      | Fluxo de Empréstimo  |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional / E2E      |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se o usuário consegue remover um livro da cesta e prosseguir para o checkout com sucesso.

**Pré-condições:**
- Usuário autenticado no sistema (CT-001 executado)
- 2 livros na cesta (CT-004 executado)

**Passos:**

1. Clicar no ícone da cesta
2. Remover um livro aleatório da cesta
3. Clicar no botão **"Checkout"**
4. Inserir o número de telefone
5. Marcar a opção de concordância com os termos
6. Confirmar a reserva

**Resultado Esperado:**  
O card de confirmação da reserva deve ser exibido ao final do processo.

**Resultado Obtido:**  
Card de confirmação exibido corretamente após a conclusão do checkout.

---

## Resultados

| ID      | Descrição                                                    | Prioridade | Status    |
|---------|--------------------------------------------------------------|------------|-----------|
| CT-001  | Login e verificação do perfil do usuário                     | 🔴 Alta    | ✅ Passou |
| CT-002  | Atualização de perfil do usuário                             | 🔴 Alta    | ✅ Passou |
| CT-003  | Adicionar primeiro livro à cesta pela página de detalhes     | 🔴 Alta    | ✅ Passou |
| CT-004  | Adicionar segundo livro e verificar contador da cesta        | 🔴 Alta    | ✅ Passou |
| CT-005  | Remover livro da cesta e realizar checkout                   | 🔴 Alta    | ✅ Passou |

### Resumo

| Total | ✅ Passou | ❌ Falhou | ⏳ Pendente |
|-------|-----------|-----------|-------------|
| 5     | 5         | 0         | 0           |

---

### Observações Gerais

- Este módulo representa um teste E2E. Os casos de teste são dependentes entre si e devem ser executados em sequência — uma falha em um CT anterior pode impactar a execução dos seguintes.

---

*Documento gerado para fins de rastreabilidade de qualidade de software.*