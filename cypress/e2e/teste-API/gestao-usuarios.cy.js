/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkBiaWJsaW90ZWNhLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc4MDQ0MTU0NCwiZXhwIjoxNzgwNDcwMzQ0fQ.kHwO1DYMquDAiC54CCywHiPHyumfuxw81sBuIxY2Z50";

describe("GET : Teste de API - Gestão de Usuários", () => {
  it("Deve listar usuarios com sucesso", () => {
    cy.api({
      method: "GET",
      url: "api/users",
      headers: {
        Authorization: token,
      },
    }).should((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.users).to.be.an("array");
    });
  });

  it("Deve validar propriedades de um usuário", () => {
    cy.api({
      mehtod: "GET",
      url: "api/users",
      headers: {
        Authorization: token,
      },
    }).should((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.users[0]).to.have.property("id");
      expect(response.body.users[0]).to.have.property("name");
      expect(response.body.users[0]).to.have.property("email");
    });
  });

  it("Deve lista um usuario com sucesso buscando por ID", () => {
    cy.api({
      method: "GET",
      url: "api/users/30",
      headers: { Authorization: token },
    }).should((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("name");
      expect(response.body).to.have.property("email");
    });
  });

  it("Deve lista um usuario com sucesso usando filtro -  Parametros", () => {
    cy.api({
      method: "GET",
      url: "api/users/",
      headers: {
        Authorization: token,
          qs: {
            page: 1,
            limit: 20,
            search: "Padrão",
          },
      },
    }).should((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

describe("POST : Teste de API - Gestão de Usuários", () => {
  it("Deve cadastrar usuario com sucesso", () => {
    cy.api({
      method: "POST",
      url: "api/users",
      body: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: "senha123",
      },
    }).should((response) => {
        expect(response.status).to.equal(201),
        expect(response.body.message).to.equal("Usuário criado com sucesso.");
    });
  });

  it("Cadastro recusado de usuário com email inválido", () => {
    cy.api({
      method: "POST",
      url: "api/users",
      body: {
        name: "Liana Tester",
        email: "lianatester.com",
        password: "senha123",
      },
      failOnStatusCode: false,
    }).should((response) => {
        expect(response.status).to.equal(400),
        expect(response.body.message).to.equal("Formato de email inválido.");
    });
  });
});

describe("PUT : Teste de API - Gestão de Usuários", () => {
  it("Deve alterar informações do usuário com sucesso", () => {
    cy.api({
      method: "PUT",
      url: "api/users/58",
      headers: { Authorization: token },
      body: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: "senha123",
      },
    }).should((response) => {
        expect(response.status).to.equal(200),
        expect(response.body.message).to.equal(
          "Usuário atualizado com sucesso.",
        );
    });
  });

  it("Alteração de usuário recusada com email inválido", () => {
    cy.api({
      method: "PUT",
      url: "api/users/31",
      headers: { Authorization: token },
      body: {
        name: "Liana Tester",
        email: "maria@email.com",
        password: "senha123",
      },
      failOnStatusCode: false,
    }).should((response) => {
        expect(response.status).to.equal(400),
        expect(response.body.message).to.equal(
          "Email já está sendo usado por outro usuário.",
        );
    });
  });
});

describe("DELETE : Teste de API - Gestão de Usuários", () => {

  let deleteUser;

  // Criação de um novo usuário para o DELETE ser automatizado.
  before(() => {
    cy.api({
      method: 'POST',
      url: 'api/users',
      body: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      deleteUser = response.body.user.id;
      cy.log(`Usuário criado para DELETE com ID ${deleteUser}`);
    });
  });

  it.only("Deve deletar usuário com sucesso", () => {
    cy.api({
      method: "DELETE",
      url: `api/users/${deleteUser}`,
      headers: { Authorization: token },
    }).should((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Usuário removido com sucesso.",);
    });
  });

  it("Deve ter erro ao deletar usuário com reserva ativa", () => {
    cy.api({
      method: "DELETE",
      url: "api/users/29",
      headers: { Authorization: token },
      failOnStatusCode: false
    }).should((response) => {
        expect(response.status).to.equal(400),
        expect(response.body.suggestion).to.equal(
          "Cancele ou complete as reservas antes de remover o usuário.",
        );
    });
  });
});
