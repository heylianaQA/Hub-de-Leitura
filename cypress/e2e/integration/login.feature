# language: pt
Funcionalidade: Login

  Cenário: Login bem-sucedido com credenciais predefinidas
    Dado que o usuário está na página de login
    Quando ele insere "usuario@teste.com" no campo de email
    E ele insere "user123" no campo de senha
    E ele clica no botão de login
    Então as informações do usuário devem conter "Usuário Padrão"

  Cenário: Login bem-sucedido usando dados de fixture
    Dado que o usuário está na página de login
    Quando ele insere o email do fixture "user"
    E ele insere a senha do fixture "user"
    E ele clica no botão de login
    Então as informações do usuário devem conter o nome do fixture "user"

  Cenário: Exibir mensagem de erro para credenciais inválidas
    Dado que o usuário está na página de login
    Quando ele insere "email.errado@teste.br" no campo de email
    E ele insere "algo" no campo de senha
    E ele clica no botão de login
    Então uma mensagem de alerta deve exibir "Email ou senha incorretos."

  Cenário: Exibir alerta para email não informado
    Dado que o usuário está na página de login
    Quando ele insere "algo" no campo de senha
    E ele clica no botão de login
    Então uma mensagem de feedback inválida deve exibir "Por favor, insira um email válido."
