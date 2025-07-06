Feature: Payment to beneficiaries

    Background:
        Given I am logged in

    Scenario: Pago estándar a beneficiario
        When I make a payment to a beneficiary
        And I see a confirmation message with the data
        Then I see a message with the success status of the operation    
   
