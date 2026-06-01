# 📋 Casos de Teste — Cadastro

> **Módulo/Funcionalidade:** Cadastro  
> **Responsável:** Ana Inocêncio
> **Última atualização:** 2026-02-21  

---

## Índice

- [Visão Geral](#visão-geral)
- [Casos de Teste](#casos-de-teste)
- [Resultados](#resultados)

---

## Visão Geral

Testes relacionados à funcionalidade de cadastro de usuários, cobrindo o fluxo de sucesso, tentativa de cadastro com e-mail já existente e validações dos campos obrigatórios (nome, e-mail, telefone, senha e confirmação de senha).

**Ambiente de Teste:**
- Ferramenta: Cypress + Faker.js
- Página testada: `register.html`

---

## Casos de Teste

---

### CT-001 — Deve criar cadastro com sucesso

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-001               |
| **Módulo**      | Cadastro             |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional            |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se um novo usuário consegue realizar o cadastro com sucesso utilizando dados válidos gerados pelo Faker.js.

**Pré-condições:**
- Página de cadastro acessível em `register.html`
- E-mail gerado não deve estar previamente cadastrado no sistema

**Passos:**

1. Acessar a página de cadastro
2. Preencher o campo **Nome** com um nome completo válido (gerado via Faker)
3. Preencher o campo **E-mail** com um e-mail válido (gerado via Faker)
4. Preencher o campo **Telefone** com um número no formato internacional (gerado via Faker)
5. Preencher o campo **Senha** com uma senha válida (gerada via Faker)
6. Preencher o campo **Confirmar Senha** com a mesma senha
7. Marcar o checkbox **Termos de uso**
8. Clicar no botão **Cadastrar**

**Resultado Esperado:**  
O usuário é redirecionado para o dashboard e as informações exibidas contêm o nome do usuário cadastrado. Os dados são salvos no fixture `cypress/fixtures/user.json`.

**Resultado Obtido:**  
Cadastro realizado com sucesso. Usuário redirecionado ao dashboard com as informações exibidas corretamente.

---

### CT-002 — Deve mostrar erro para usuário já cadastrado

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-002               |
| **Módulo**      | Cadastro             |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional            |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se uma mensagem de erro é exibida ao tentar cadastrar um usuário com e-mail já existente no sistema.

**Pré-condições:**
- Usuário com os dados do fixture `user` já cadastrado no sistema (CT-001 executado anteriormente)

**Passos:**

1. Acessar a página de cadastro
2. Preencher o campo **Nome** com o nome do fixture `user`
3. Preencher o campo **E-mail** com o e-mail do fixture `user`
4. Preencher o campo **Senha** com a senha do fixture `user`
5. Preencher o campo **Confirmar Senha** com a mesma senha
6. Marcar o checkbox **Termos de uso**
7. Clicar no botão **Cadastrar**

**Resultado Esperado:**  
Uma mensagem de erro deve ser exibida no `#alert-container` contendo o texto: `"Erro ao criar conta"`

**Resultado Obtido:**  
Mensagem de erro exibida corretamente conforme o esperado.

---

### CT-003 — Deve mostrar erro no campo Nome

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-003               |
| **Módulo**      | Cadastro             |
| **Prioridade**  | 🟡 Média             |
| **Tipo**        | Funcional / Validação |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se uma mensagem de erro é exibida quando o campo Nome é preenchido com menos de 2 caracteres.

**Pré-condições:**
- Página de cadastro acessível
- Fixture `user` disponível com dados válidos

**Passos:**

1. Acessar a página de cadastro
2. Preencher o campo **Nome** com `"A"` (apenas 1 caractere)
3. Preencher os demais campos com dados válidos do fixture `user`
4. Marcar o checkbox **Termos de uso**
5. Clicar no botão **Cadastrar**

**Resultado Esperado:**  
Uma mensagem de feedback inválida deve ser exibida contendo o texto: `"Nome deve ter pelo menos 2 caracteres"`

**Resultado Obtido:**  
Mensagem de erro no campo Nome exibida corretamente conforme o esperado.

---

### CT-004 — Deve mostrar erro no campo E-mail

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-004               |
| **Módulo**      | Cadastro             |
| **Prioridade**  | 🟡 Média             |
| **Tipo**        | Funcional / Validação |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se uma mensagem de erro é exibida quando o campo E-mail é preenchido com um valor inválido.

**Pré-condições:**
- Página de cadastro acessível
- Fixture `user` disponível com dados válidos

**Passos:**

1. Acessar a página de cadastro
2. Preencher o campo **Nome** com o nome do fixture `user`
3. Preencher o campo **E-mail** com `"algo.email"` (formato inválido)
4. Preencher os demais campos com dados válidos do fixture `user`
5. Marcar o checkbox **Termos de uso**
6. Clicar no botão **Cadastrar**

**Resultado Esperado:**  
Uma mensagem de feedback inválida deve ser exibida contendo o texto: `"Email válido é obrigatório"`

**Resultado Obtido:**  
Mensagem de erro no campo E-mail exibida corretamente conforme o esperado.

---

### CT-005 — Deve mostrar erro no campo Telefone

| Campo           | Detalhe                |
|-----------------|------------------------|
| **ID**          | CT-005                 |
| **Módulo**      | Cadastro               |
| **Prioridade**  | 🟡 Média               |
| **Tipo**        | Funcional / Validação  |
| **Status**      | ❌ Falhou              |

**Descrição:**  
Verificar se uma mensagem de erro é exibida quando o campo Telefone é preenchido com uma quantidade inválida de dígitos.

**Pré-condições:**
- Página de cadastro acessível

**Passos:**

1. Acessar a página de cadastro
2. Preencher o campo **Nome** com `"Liana"`
3. Preencher o campo **E-mail** com `"algo.teste@qa.com"`
4. Preencher o campo **Telefone** com `"12123456"` (quantidade inválida de dígitos)
5. Preencher o campo **Senha** com `"algo+123"`
6. Preencher o campo **Confirmar Senha** com `"algo+123"`
7. Marcar o checkbox **Termos de uso**
8. Clicar no botão **Cadastrar**

**Resultado Esperado:**  
Uma mensagem de feedback inválida deve ser exibida indicando que o número de telefone é inválido.

**Resultado Obtido:**  
Nenhuma mensagem de alerta ou feedback foi exibida. O sistema não valida a quantidade de dígitos informada no campo telefone, permitindo o envio do formulário sem qualquer aviso ao usuário.

**Evidência:**  
> ⚠️ Ver **BUG-001** — Ausência de validação e mensagem de erro para telefone com dígitos inválidos

---

### CT-006 — Deve mostrar erro no campo Senha

| Campo           | Detalhe                |
|-----------------|------------------------|
| **ID**          | CT-006                 |
| **Módulo**      | Cadastro               |
| **Prioridade**  | 🟡 Média               |
| **Tipo**        | Funcional / Validação  |
| **Status**      | ✅ Passou              |

**Descrição:**  
Verificar se uma mensagem de erro é exibida quando o campo Senha é deixado em branco.

**Pré-condições:**
- Página de cadastro acessível
- Fixture `user` disponível com dados válidos

**Passos:**

1. Acessar a página de cadastro
2. Preencher o campo **Nome** com o nome do fixture `user`
3. Preencher o campo **E-mail** com o e-mail do fixture `user`
4. Deixar o campo **Senha** em branco
5. Marcar o checkbox **Termos de uso**
6. Clicar no botão **Cadastrar**

**Resultado Esperado:**  
Uma mensagem de feedback deve ser exibida no `#password-feedback` contendo o texto: `"Mínimo 6 caracteres"`

**Resultado Obtido:**  
Mensagem de erro no campo Senha exibida corretamente conforme o esperado.

---

### CT-007 — Deve mostrar erro no campo Confirmar Senha

| Campo           | Detalhe                |
|-----------------|------------------------|
| **ID**          | CT-007                 |
| **Módulo**      | Cadastro               |
| **Prioridade**  | 🟡 Média               |
| **Tipo**        | Funcional / Validação  |
| **Status**      | ✅ Passou              |

**Descrição:**  
Verificar se uma mensagem de erro é exibida quando o campo Confirmar Senha não coincide com o campo Senha.

**Pré-condições:**
- Página de cadastro acessível
- Fixture `user` disponível com dados válidos

**Passos:**

1. Acessar a página de cadastro
2. Preencher o campo **Nome** com o nome do fixture `user`
3. Preencher o campo **E-mail** com o e-mail do fixture `user`
4. Preencher o campo **Senha** com a senha do fixture `user`
5. Preencher o campo **Confirmar Senha** com um valor diferente da senha
6. Marcar o checkbox **Termos de uso**
7. Clicar no botão **Cadastrar**

**Resultado Esperado:**  
Uma mensagem de feedback inválida deve ser exibida contendo o texto: `"Senhas não coincidem"`

**Resultado Obtido:**  
Mensagem de erro no campo Confirmar Senha exibida corretamente conforme o esperado.

---

## Resultados

| ID      | Descrição                                         | Prioridade | Status      |
|---------|---------------------------------------------------|------------|-------------|
| CT-001  | Deve criar cadastro com sucesso                   | 🔴 Alta    | ✅ Passou   |
| CT-002  | Deve mostrar erro para usuário já cadastrado      | 🔴 Alta    | ✅ Passou   |
| CT-003  | Deve mostrar erro no campo Nome                   | 🟡 Média   | ✅ Passou   |
| CT-004  | Deve mostrar erro no campo E-mail                 | 🟡 Média   | ✅ Passou   |
| CT-005  | Deve mostrar erro no campo Telefone               | 🟡 Média   | ❌ Falhou   |
| CT-006  | Deve mostrar erro no campo Senha                  | 🟡 Média   | ✅ Passou   |
| CT-007  | Deve mostrar erro no campo Confirmar Senha        | 🟡 Média   | ✅ Passou   |

### Resumo

| Total | ✅ Passou | ❌ Falhou | ⏳ Pendente |
|-------|-----------|-----------|-------------|
| 7     | 6         | 1         | 0           |

---

### Observações Gerais

- O CT-005 revelou um bug de validação: ao informar uma quantidade inválida de dígitos no campo Telefone, o sistema não exibe nenhuma mensagem de erro ou alerta, permitindo o envio do formulário sem aviso ao usuário. Este comportamento foi registrado como **BUG-001** no relatório de bugs.

---

*Documento gerado para fins de rastreabilidade de qualidade de software.*