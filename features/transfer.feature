Feature: transfer between accounts in parabank

  Scenario: transferencia exitosa
    Given I am logged in trans
    When I introduce valid values on origin account, destination account and amount
   # And amount value is equals o less than available credit
    Then should be displayed a messaje with the success info
  
  # Scenario: transferencia rechazada por monto superior a credito disponible
  #   Given I am logged in
  #   When I introduce valid values on origin account, destination account and amount
  #   And  amount value is greater than available credit
  #   Then should be displayed a messaje with the error 


    Examples:
    | originAcount | destinationAcount|amount|
    |12345         |12345             |123   |