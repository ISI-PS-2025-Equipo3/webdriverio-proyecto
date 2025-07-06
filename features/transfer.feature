Feature: transfer between accounts in parabank

  Scenario: transferencia exitosa
    Given I am logged in trans
    When I introduce valid values "<origin>" as origin, "<destination>" as destination and "<amount>" as amount
    Then should be displayed a messaje with the success info

    Examples:
      | origin | destination | amount |
      #|  13344 |       13345 |      1 |
      |  13344 |       13346 |   1000 |

  Scenario: Valor de la transferencia mayor a los fondos disponibles
    Given I am logged in trans
    When I introduce valid values "<origin>" as origin, "<destination>" as destination and "<amount>" as amount
    Then should be displayed a messaje with the error info

    Examples:
      | origin | destination | amount |
      #|  13344 |       13345 | 999999 |
      |  13345 |       13346 | 500000 |
