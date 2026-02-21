# 🐛 Relatório de Bugs

> **Projeto:** [Nome do Projeto]  
> **Versão:** 1.0.0  
> **Responsável:** Ana Inocêncio 
> **Data de criação:** 2026-02-21  

---

## Índice

- [Resumo](#resumo)
- [BUG-001 — Login: Campo de senha sem mensagem de erro](#bug-001--login-campo-de-senha-sem-mensagem-de-erro)
- [BUG-002 — Cadastro: Campo de telefone sem validação de dígitos](#bug-002--cadastro-campo-de-telefone-sem-validação-de-dígitos)

---

## Resumo

| ID      | Módulo   | Descrição Resumida                                              | Severidade | Prioridade | Status     |
|---------|----------|-----------------------------------------------------------------|------------|------------|------------|
| BUG-001 | Login    | Campo de senha não exibe mensagem de erro quando vazio          | 🟡 Média   | 🟡 Média   | 🔴 Aberto  |
| BUG-002 | Cadastro | Campo de telefone não valida quantidade de dígitos informados   | 🟡 Média   | 🟡 Média   | 🔴 Aberto  |

---

## BUG-001 — Login: Campo de senha sem mensagem de erro

| Campo              | Detalhe                                      |
|--------------------|----------------------------------------------|
| **ID**             | BUG-001                                      |
| **Módulo**         | Login                                        |
| **Caso de Teste**  | CT-005 — Exibir mensagem de erro para senha não informada |
| **Severidade**     | 🟡 Média                                     |
| **Prioridade**     | 🟡 Média                                     |
| **Status**         | 🔴 Aberto                                    |
| **Reportado por**  | Ana Inocêncio                                |
| **Data**           | 2026-02-21                                   |

---

### Descrição

Ao tentar realizar login sem preencher o campo de senha, a aplicação não exibe nenhuma mensagem de feedback textual ao usuário. O único retorno visual é a borda vermelha no campo de senha, o que não é suficiente para orientar o usuário sobre o erro cometido.

---

### Passos para Reproduzir

1. Acessar a página de login
2. Preencher o campo de **E-mail** com `liana.teste@qa.com`
3. Deixar o campo de **Senha** em branco
4. Clicar no botão de **Login**

---

### Resultado Esperado

Uma mensagem de feedback deve ser exibida abaixo do campo de senha contendo o texto: `"Por favor, insira uma senha válida."`

---

### Resultado Obtido

Nenhuma mensagem de texto é exibida. O campo de senha apresenta apenas uma borda vermelha, sem qualquer orientação textual ao usuário.

---

### Impacto

A ausência de mensagem de erro prejudica a experiência do usuário, pois ele não recebe uma orientação clara sobre o que precisa ser corrigido para concluir o login. Usuários menos experientes podem não compreender o significado da borda vermelha sem um texto explicativo.

---

## BUG-002 — Cadastro: Campo de telefone sem validação de dígitos

| Campo              | Detalhe                                              |
|--------------------|------------------------------------------------------|
| **ID**             | BUG-002                                              |
| **Módulo**         | Cadastro                                             |
| **Caso de Teste**  | CT-005 — Deve mostrar erro no campo Telefone         |
| **Severidade**     | 🟡 Média                                             |
| **Prioridade**     | 🟡 Média                                             |
| **Status**         | 🔴 Aberto                                            |
| **Reportado por**  | Ana Inocêncio                                        |
| **Data**           | 2026-02-21                                           |

---

### Descrição

Ao preencher o campo de telefone com uma quantidade inválida de dígitos durante o cadastro, a aplicação não exibe nenhuma mensagem de erro ou alerta ao usuário. O formulário não impede o envio nem orienta o usuário sobre o formato correto esperado para o campo.

---

### Passos para Reproduzir

1. Acessar a página de cadastro
2. Preencher o campo **Nome** com `"Liana"`
3. Preencher o campo **E-mail** com `"algo.teste@qa.com"`
4. Preencher o campo **Telefone** com `"12123456"` (quantidade inválida de dígitos)
5. Preencher o campo **Senha** com `"algo+123"`
6. Preencher o campo **Confirmar Senha** com `"algo+123"`
7. Marcar o checkbox de **Termos de uso**
8. Clicar no botão **Cadastrar**

---

### Resultado Esperado

Uma mensagem de feedback deve ser exibida indicando que o número de telefone informado é inválido, orientando o usuário sobre o formato correto.

---

### Resultado Obtido

Nenhuma mensagem de erro ou alerta é exibida. A aplicação não valida a quantidade de dígitos do campo telefone, não impedindo nem alertando o usuário sobre o dado inválido informado.

---

### Impacto

A ausência de validação no campo telefone pode resultar no cadastro de números de telefone inválidos no sistema, comprometendo a integridade dos dados e dificultando futuros contatos com o usuário.

---
