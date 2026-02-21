Feature: Fluxo Rapido de Empréstimo

  Como cliente
  Quero acessar o Hub de Livros
  E escolher e gerenciar livros para Empréstimos

  Scenario: Realizar um Empréstimo Rápido
    Given I am on the login page
    And I have valid user credentials
    When I log in with valid credentials
    Then I should be logged in
    When I click on the "latest reservation" button
    And I choose 3 random books
    Then the cart should contain 3 books
    When I click on the cart icon
    And I remove 1 random book from the cart
    And I proceed to checkout
    And I agree to the terms and conditions
    And I confirm the reservation
    Then a confirmation card should be displayed