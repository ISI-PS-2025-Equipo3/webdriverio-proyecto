Feature: Account check

    Background:
        Given I am logged in

    Scenario: Muestra todas las cuentas del usuario
        Then I can see a list of accounts
        And Each account shows its balance

    Scenario: Ver detalles de una cuenta
        When I click on some account
        Then I should see more details

    