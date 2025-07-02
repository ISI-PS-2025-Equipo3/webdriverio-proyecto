Feature: Login in parabank

  Scenario: Login exitoso
    Given I am on the login page
    When I login with valid credentials
    Then I should be redirected to the dashboard
  
  Scenario: Login fallido con credenciales invalidas
    Given I am on the login page
    When I login with "wrong_user" and "wrong_pass"
    Then I should see an error message saying "The username and password could not be verified

  Scenario: Login con campos vacios
    Given I am on the login page
    Then The login button should be disabled