# 📋 Casos de Teste — Login

> **Módulo/Funcionalidade:** Login  
> **Responsável:** Ana Inocêncio 
> **Última atualização:** 2026-02-21  

---

## Índice

- [Visão Geral](#visão-geral)
- [Casos de Teste](#casos-de-teste)
- [Resultados](#resultados)

---

## Visão Geral

Testes relacionados à funcionalidade de login da aplicação, cobrindo cenários de sucesso, falha por credenciais inválidas e validações de campos obrigatórios.

**Ambiente de Teste:**
- Ferramenta: Cypress
- Linguagem do Feature: Português (pt)

---

## Casos de Teste

---

### CT-001 — Login bem-sucedido com credenciais predefinidas

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-001               |
| **Módulo**      | Login                |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional            |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se o login é realizado com sucesso utilizando credenciais fixas predefinidas.

**Pré-condições:**
- Usuário `usuario@teste.com` cadastrado no sistema com senha `user123`
- Aplicação acessível e página de login disponível

**Passos:**

1. Acessar a página de login
2. Inserir `usuario@teste.com` no campo de e-mail
3. Inserir `user123` no campo de senha
4. Clicar no botão de login

**Resultado Esperado:**  
As informações do usuário exibidas devem conter "Usuário Padrão".

**Resultado Obtido:**  
Login realizado com sucesso. As informações do usuário foram exibidas conforme esperado.

---

### CT-002 — Login bem-sucedido usando dados de fixture

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-002               |
| **Módulo**      | Login                |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional            |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se o login é realizado com sucesso utilizando credenciais provenientes do fixture `user`.

**Pré-condições:**
- Fixture `user` configurada com e-mail e senha válidos
- Aplicação acessível e página de login disponível

**Passos:**

1. Acessar a página de login
2. Inserir o e-mail definido no fixture `user` no campo de e-mail
3. Inserir a senha definida no fixture `user` no campo de senha
4. Clicar no botão de login

**Resultado Esperado:**  
As informações do usuário exibidas devem conter o nome definido no fixture `user`.

**Resultado Obtido:**  
Login realizado com sucesso. As informações do usuário foram exibidas conforme o fixture `user`.

---

### CT-003 — Exibir mensagem de erro para credenciais inválidas

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-003               |
| **Módulo**      | Login                |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional            |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se uma mensagem de erro adequada é exibida ao tentar realizar login com credenciais inválidas.

**Pré-condições:**
- Aplicação acessível e página de login disponível

**Passos:**

1. Acessar a página de login
2. Inserir `email.errado@teste.br` no campo de e-mail
3. Inserir `algo` no campo de senha
4. Clicar no botão de login

**Resultado Esperado:**  
Uma mensagem de alerta deve ser exibida contendo o texto: `"Email ou senha incorretos."`

**Resultado Obtido:**  
Mensagem de credenciais inválidas exibida corretamente conforme o esperado.

---

### CT-004 — Exibir alerta para e-mail não informado

| Campo           | Detalhe                |
|-----------------|------------------------|
| **ID**          | CT-004                 |
| **Módulo**      | Login                  |
| **Prioridade**  | 🟡 Média               |
| **Tipo**        | Funcional / Validação  |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se uma mensagem de feedback é exibida quando o campo de e-mail é deixado em branco e o login é tentado.

**Pré-condições:**
- Aplicação acessível e página de login disponível

**Passos:**

1. Acessar a página de login
2. Deixar o campo de e-mail em branco
3. Inserir `algo` no campo de senha
4. Clicar no botão de login

**Resultado Esperado:**  
Uma mensagem de feedback deve ser exibida contendo o texto: `"Por favor, insira um email válido."`

**Resultado Obtido:**  
Alerta de e-mail não informado exibido corretamente conforme o esperado.

---

### CT-005 — Exibir mensagem de erro para senha não informada

| Campo           | Detalhe                |
|-----------------|------------------------|
| **ID**          | CT-005                 |
| **Módulo**      | Login                  |
| **Prioridade**  | 🟡 Média               |
| **Tipo**        | Funcional / Validação  |
| **Status**      | ❌ Falhou              |

**Descrição:**  
Verificar se uma mensagem de feedback é exibida quando o campo de senha é deixado em branco e o login é tentado.

**Pré-condições:**
- Aplicação acessível e página de login disponível

**Passos:**

1. Acessar a página de login
2. Inserir `liana.teste@qa.com` no campo de e-mail
3. Deixar o campo de senha em branco
4. Clicar no botão de login

**Resultado Esperado:**  
Uma mensagem de feedback deve ser exibida contendo o texto: `"Por favor, insira uma senha válida."`

**Resultado Obtido:**  
Nenhuma mensagem de alerta foi exibida. O campo de senha apenas apresentou uma borda vermelha, sem nenhum texto explicativo ao usuário.

**Evidência:**  
> ⚠️ Ver **BUG-001** — Ausência de mensagem de erro para senha não informada

---

## Resultados

| ID      | Descrição                                           | Prioridade | Status      |
|---------|-----------------------------------------------------|------------|-------------|
| CT-001  | Login bem-sucedido com credenciais predefinidas     | 🔴 Alta    | ✅ Passou   |
| CT-002  | Login bem-sucedido usando dados de fixture          | 🔴 Alta    | ✅ Passou   |
| CT-003  | Exibir mensagem de erro para credenciais inválidas  | 🔴 Alta    | ✅ Passou   |
| CT-004  | Exibir alerta para e-mail não informado             | 🟡 Média   | ✅ Passou   |
| CT-005  | Exibir mensagem de erro para senha não informada    | 🟡 Média   | ❌ Falhou   |

### Resumo

| Total | ✅ Passou | ❌ Falhou | ⏳ Pendente |
|-------|-----------|-----------|-------------|
| 5     | 4         | 1         | 0           |

---

### Observações Gerais

- O CT-005 foi identificado fora do arquivo `.feature` e revelou um bug de usabilidade: ao não informar a senha, o sistema apenas destaca o campo com borda vermelha, sem exibir mensagem explicativa. Este comportamento foi registrado como **BUG-001** no relatório de bugs.

---

*Documento gerado para fins de rastreabilidade de qualidade de software.*