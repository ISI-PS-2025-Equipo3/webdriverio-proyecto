Feature: loan request in parabank

  Scenario: successful loan request
    Given I am logged in loan
    When I Navigate to the loan request page
    And I fill in the loan request form with valid data
    And I submit the loan request
    Then should be displayed a messaje with the success loan info
  
