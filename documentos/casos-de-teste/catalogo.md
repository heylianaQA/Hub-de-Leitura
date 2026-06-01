# 📋 Casos de Teste — Busca de Livros

> **Módulo/Funcionalidade:** Busca de Livros  
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

Testes relacionados à funcionalidade de busca e adição de livros à cesta de compras. Cobre cenários de pesquisa por título, navegação para páginas de detalhes e adição de livros à cesta de diferentes formas.

**Ambiente de Teste:**
- Ferramenta: Cypress
- Linguagem do Feature: Português (pt)
- Página testada: Catálogo de Livros

---

## Casos de Teste

---

### CT-001 — Encontrar livro pela barra de pesquisa

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-001               |
| **Módulo**      | Busca de Livros      |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional            |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se a barra de pesquisa filtra corretamente os livros ao digitar um título.

**Pré-condições:**
- Usuário está na página do catálogo de livros

**Passos:**

1. Acessar a página do catálogo de livros
2. Digitar `"A Metamorfose"` na barra de pesquisa
3. Clicar no primeiro título de livro da lista

**Resultado Esperado:**  
A descrição do filtro deve conter o texto `"Busca:"`.

**Resultado Obtido:**  
Filtro aplicado corretamente com a descrição contendo `"Busca:"` conforme esperado.

---

### CT-002 — Abrir página de detalhes do primeiro livro

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-002               |
| **Módulo**      | Busca de Livros      |
| **Prioridade**  | 🟡 Média             |
| **Tipo**        | Funcional            |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se ao clicar no primeiro livro da lista o usuário é redirecionado para a página de detalhes.

**Pré-condições:**
- Usuário está na página do catálogo de livros

**Passos:**

1. Acessar a página do catálogo de livros
2. Clicar no primeiro título de livro da lista

**Resultado Esperado:**  
O usuário deve ser redirecionado para a página de detalhes do livro.

**Resultado Obtido:**  
Redirecionamento para a página de detalhes realizado com sucesso.

---

### CT-003 — Abrir página de detalhes do último livro

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-003               |
| **Módulo**      | Busca de Livros      |
| **Prioridade**  | 🟡 Média             |
| **Tipo**        | Funcional            |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se ao clicar no último livro da lista o usuário é redirecionado para a página de detalhes.

**Pré-condições:**
- Usuário está na página do catálogo de livros

**Passos:**

1. Acessar a página do catálogo de livros
2. Clicar no último título de livro da lista

**Resultado Esperado:**  
O usuário deve ser redirecionado para a página de detalhes do livro.

**Resultado Obtido:**  
Redirecionamento para a página de detalhes realizado com sucesso.

---

### CT-004 — Abrir página de detalhes do quinto livro

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-004               |
| **Módulo**      | Busca de Livros      |
| **Prioridade**  | 🟡 Média             |
| **Tipo**        | Funcional            |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se ao clicar no quinto livro da lista o usuário é redirecionado para a página de detalhes.

**Pré-condições:**
- Usuário está na página do catálogo de livros

**Passos:**

1. Acessar a página do catálogo de livros
2. Clicar no quinto título de livro da lista

**Resultado Esperado:**  
O usuário deve ser redirecionado para a página de detalhes do livro.

**Resultado Obtido:**  
Redirecionamento para a página de detalhes realizado com sucesso.

---

### CT-005 — Abrir página de detalhes e adicionar à cesta

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-005               |
| **Módulo**      | Busca de Livros      |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional            |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se é possível adicionar um livro à cesta a partir da página de detalhes do livro.

**Pré-condições:**
- Usuário está na página do catálogo de livros

**Passos:**

1. Acessar a página do catálogo de livros
2. Clicar no sexto título de livro da lista
3. Na página de detalhes do livro, clicar no botão **"Adicionar à Cesta"**

**Resultado Esperado:**  
Uma mensagem `"Livro adicionado à cesta com sucesso!"` deve ser exibida e o contador da cesta deve mostrar `"1"`.

**Resultado Obtido:**  
Mensagem exibida corretamente e contador da cesta atualizado para `"1"` conforme esperado.

---

### CT-006 — Adicionar livro à cesta diretamente do catálogo

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-006               |
| **Módulo**      | Busca de Livros      |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional            |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se é possível adicionar um livro à cesta diretamente pelo botão disponível no catálogo, sem acessar a página de detalhes.

**Pré-condições:**
- Usuário está na página do catálogo de livros

**Passos:**

1. Acessar a página do catálogo de livros
2. Clicar no botão **"Adicionar à Cesta"** do sexto livro diretamente no catálogo

**Resultado Esperado:**  
Uma mensagem `"foi adicionado à cesta!"` deve ser exibida e o contador da cesta deve mostrar `"1"`.

**Resultado Obtido:**  
Mensagem exibida corretamente e contador da cesta atualizado para `"1"` conforme esperado.

---

### CT-007 — Adicionar 2 livros na cesta

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-007               |
| **Módulo**      | Busca de Livros      |
| **Prioridade**  | 🔴 Alta              |
| **Tipo**        | Funcional            |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se o contador da cesta é atualizado corretamente ao adicionar 2 livros distintos.

**Pré-condições:**
- Usuário está na página do catálogo de livros

**Passos:**

1. Acessar a página do catálogo de livros
2. Adicionar o sexto livro à cesta (via catálogo ou detalhes)
3. Clicar no quinto título de livro da lista
4. Na página de detalhes, clicar no botão **"Adicionar à Cesta"**
5. Verificar o contador da cesta
6. Clicar no botão **"Continuar Comprando"**

**Resultado Esperado:**  
A mensagem `"Livro adicionado à cesta com sucesso!"` deve ser exibida e o contador da cesta deve mostrar `"2"`.

**Resultado Obtido:**  
Mensagem exibida corretamente e contador da cesta atualizado para `"2"` conforme esperado.

---

### CT-008 — Adicionar 3 livros na cesta de forma automatizada

| Campo           | Detalhe              |
|-----------------|----------------------|
| **ID**          | CT-008               |
| **Módulo**      | Busca de Livros      |
| **Prioridade**  | 🟡 Média             |
| **Tipo**        | Funcional            |
| **Status**      | ✅ Passou            |

**Descrição:**  
Verificar se o contador da cesta é atualizado corretamente ao adicionar 3 livros aleatórios de forma automatizada.

**Pré-condições:**
- Usuário está na página do catálogo de livros

**Passos:**

1. Acessar a página do catálogo de livros
2. Adicionar 3 livros aleatórios à cesta de forma automatizada

**Resultado Esperado:**  
O contador da cesta deve mostrar `"3"`.

**Resultado Obtido:**  
Contador da cesta atualizado para `"3"` corretamente conforme esperado.

---

## Resultados

| ID      | Descrição                                                  | Prioridade | Status    |
|---------|------------------------------------------------------------|------------|-----------|
| CT-001  | Encontrar livro pela barra de pesquisa                     | 🔴 Alta    | ✅ Passou |
| CT-002  | Abrir página de detalhes do primeiro livro                 | 🟡 Média   | ✅ Passou |
| CT-003  | Abrir página de detalhes do último livro                   | 🟡 Média   | ✅ Passou |
| CT-004  | Abrir página de detalhes do quinto livro                   | 🟡 Média   | ✅ Passou |
| CT-005  | Abrir página de detalhes e adicionar à cesta               | 🔴 Alta    | ✅ Passou |
| CT-006  | Adicionar livro à cesta diretamente do catálogo            | 🔴 Alta    | ✅ Passou |
| CT-007  | Adicionar 2 livros na cesta                                | 🔴 Alta    | ✅ Passou |
| CT-008  | Adicionar 3 livros na cesta de forma automatizada          | 🟡 Média   | ✅ Passou |

### Resumo

| Total | ✅ Passou | ❌ Falhou | ⏳ Pendente |
|-------|-----------|-----------|-------------|
| 8     | 8         | 0         | 0           |

---

### Observações Gerais

- Todos os cenários deste módulo foram executados com sucesso, sem identificação de bugs.

---

*Documento gerado para fins de rastreabilidade de qualidade de software.*