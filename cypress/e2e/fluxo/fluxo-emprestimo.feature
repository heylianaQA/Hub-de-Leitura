# language: pt

Funcionalidade: Fluxo de Empréstimo de um Livro

  Cenário: Deve completar o fluxo completo de empréstimo de um livro
    Dado que estou na página inicial
    Quando eu clico no link da conta
    E eu realizo login com credenciais válidas
    Então eu devo ver meu nome na seção de informações do usuário
    Quando eu clico no botão de atualizar conta
    E eu insiro uma data de nascimento aleatória
    E eu clico no botão de salvar
    Então eu devo ver a mensagem "Perfil atualizado com sucesso!"
    Quando eu clico no botão de informações
    E eu clico no botão primário do grid de livros
    E eu visualizo os detalhes de um livro aleatório
    Quando eu clico no botão secundário
    E eu visualizo os detalhes de outro livro aleatório
    E eu adiciono o livro à cesta
    Então eu devo ver a mensagem "Livro adicionado à cesta com sucesso!"
    Quando eu clico no botão secundário
    E eu seleciono um livro aleatório
    Então a cesta deve mostrar 2 itens
    Quando eu clico no ícone da cesta
    E eu removo um livro aleatório da cesta
    E eu clico no botão de checkout
    E eu insiro meu número de telefone
    E eu concordo com os termos
    E eu confirmo a reserva
    Então eu devo ver o card de confirmação
