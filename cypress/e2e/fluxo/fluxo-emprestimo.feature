Feature: Loan Flow for a Single Book

  Scenario: Should complete a full loan flow for a single book
    Given I am on the home page
    When I click on the account link
    And I log in with valid credentials
    Then I should see my name in the user info section
    When I click on the update account button
    And I enter a random birthdate
    And I click on the save button
    Then I should see the message "Perfil atualizado com sucesso!"
    When I click on the info button
    And I click on the primary button in the grid
    And I view details for a random book
    When I click on the secondary button
    And I view details for a random book again
    And I add the book to the cart
    Then I should see the message "Livro adicionado à cesta com sucesso!"
    When I click on the secondary button
    And I select a random book
    Then the cart should show 2 items
    When I click on the cart icon
    And I remove a random book from the cart
    And I click on the checkout button
    And I enter my phone number
    And I agree to the terms
    And I confirm the reservation
    Then I should see the confirmation card
