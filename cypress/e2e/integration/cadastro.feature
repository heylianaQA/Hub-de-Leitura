# language: pt

Funcionalidade: Cadastro

  Cenário: Deve criar cadastro com sucesso
    Dado que o usuário está na página de cadastro
    Quando ele preenche o campo de nome com um nome válido
    E ele preenche o campo de email com um email válido
    E ele preenche o campo de telefone com um número válido
    E ele preenche o campo de senha com uma senha válida
    E ele preenche o campo de confirmar senha com a mesma senha
    E ele marca o checkbox de termos de uso
    E ele clica no botão de cadastrar
    Então ele deve ser redirecionado para o dashboard
    E as informações do usuário devem conter o nome cadastrado

  Cenário: Deve mostrar erro para usuário já cadastrado
    Dado que o usuário está na página de cadastro
    E já existe um usuário cadastrado com os dados do fixture "user"
    Quando ele preenche o formulário com os dados do fixture "user"
    E ele marca o checkbox de termos de uso
    E ele clica no botão de cadastrar
    Então uma mensagem de erro deve ser exibida contendo "Erro ao criar conta"

  Cenário: Deve mostrar erro no campo Nome
    Dado que o usuário está na página de cadastro
    Quando ele preenche o campo de nome com "A"
    E ele preenche os demais campos com dados válidos do fixture "user"
    E ele marca o checkbox de termos de uso
    E ele clica no botão de cadastrar
    Então uma mensagem de erro deve ser exibida contendo "Nome deve ter pelo menos 2 caracteres"

  Cenário: Deve mostrar erro no campo Email
    Dado que o usuário está na página de cadastro
    Quando ele preenche o campo de nome com um nome válido do fixture "user"
    E ele preenche o campo de email com "algo.email"
    E ele preenche os demais campos com dados válidos do fixture "user"
    E ele marca o checkbox de termos de uso
    E ele clica no botão de cadastrar
    Então uma mensagem de erro deve ser exibida contendo "Email válido é obrigatório"

  # Teste inválido - não há nenhuma mensagem de erro quando inserido um número telefônico inválido
  # Cenário: Deve mostrar erro no campo Telefone
  #   Dado que o usuário está na página de cadastro
  #   Quando ele preenche o campo de nome com "Liana"
  #   E ele preenche o campo de email com "algo.teste@qa.com"
  #   E ele preenche o campo de telefone com "12123456"
  #   E ele preenche o campo de senha com "algo+123"
  #   E ele preenche o campo de confirmar senha com "algo+123"
  #   E ele marca o checkbox de termos de uso
  #   E ele clica no botão de cadastrar
  #   Então uma mensagem de erro deve ser exibida indicando telefone inválido

  Cenário: Deve mostrar erro no campo Senha
    Dado que o usuário está na página de cadastro
    Quando ele preenche o campo de nome com um nome válido do fixture "user"
    E ele preenche o campo de email com um email válido do fixture "user"
    E ele deixa o campo de senha em branco
    E ele marca o checkbox de termos de uso
    E ele clica no botão de cadastrar
    Então uma mensagem de erro deve ser exibida contendo "Mínimo 6 caracteres"

  Cenário: Deve mostrar erro no campo Confirmar Senha
    Dado que o usuário está na página de cadastro
    Quando ele preenche o campo de nome com um nome válido do fixture "user"
    E ele preenche o campo de email com um email válido do fixture "user"
    E ele preenche o campo de senha com a senha do fixture "user"
    E ele preenche o campo de confirmar senha com uma senha diferente
    E ele marca o checkbox de termos de uso
    E ele clica no botão de cadastrar
    Então uma mensagem de erro deve ser exibida contendo "Senhas não coincidem"
