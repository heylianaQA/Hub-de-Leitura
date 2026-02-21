# language: pt

Funcionalidade: Busca de Livros
  Como usuário, desejo buscar e adicionar livros à cesta para realizar uma compra.

  Contexto:
    Dado que estou na página do catálogo de livros

  Cenário: Encontrar livro pela barra de pesquisa
    Quando eu digito "A Metamorfose" na barra de pesquisa
    Então a descrição do filtro deve conter "Busca:"
    E eu clico no primeiro título de livro da lista

  Cenário: Abrir página de detalhes do primeiro livro
    Quando eu clico no primeiro título de livro da lista
    Então eu devo ser redirecionado para a página de detalhes do livro

  Cenário: Abrir página de detalhes do último livro
    Quando eu clico no último título de livro da lista
    Então eu devo ser redirecionado para a página de detalhes do livro

  Cenário: Abrir página de detalhes do quinto livro
    Quando eu clico no quinto título de livro da lista
    Então eu devo ser redirecionado para a página de detalhes do livro

  Cenário: Abrir página de detalhes e adicionar à Cesta
    Quando eu clico no sexto título de livro da lista
    E estou na página de detalhes do livro
    E clico no botão "Adicionar à Cesta"
    Então uma mensagem de "Livro adicionado à cesta com sucesso!" deve ser exibida
    E o contador da cesta deve mostrar "1"

  Cenário: Adicionar livro à cesta diretamente do catálogo
    Quando eu clico no botão "Adicionar à Cesta" do sexto livro no catálogo
    Então uma mensagem de "foi adicionado à cesta!" deve ser exibida
    E o contador da cesta deve mostrar "1"

  Cenário: Adicionar 2 livros na cesta
    Quando eu adiciono o sexto livro à cesta
    E eu clico no quinto título de livro da lista
    E estou na página de detalhes do livro
    E clico no botão "Adicionar à Cesta"
    Então uma mensagem de "Livro adicionado à cesta com sucesso!" deve ser exibida
    E o contador da cesta deve mostrar "2"
    E eu clico no botão "Continuar Comprando"

  Cenário: Adicionar 3 livros na cesta de forma automatizada
    Quando eu adiciono 3 livros aleatórios à cesta
    Então o contador da cesta deve mostrar "3"