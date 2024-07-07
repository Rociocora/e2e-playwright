Feature: Login Saucedemo

  Background:
    Given the user is on saucedemo login page

  Scenario: login with valid username and password
     When the user fill username with "visual_user"
     And the user fill password with "secret_sauce"
     And the user press login button
     Then the user should see products page
  
  Scenario Outline: Login with invalid data
    When the user fill username with "<username>"
    And the user fill password with "<password>"
    And the user press login button
    Then the user should see the login error message "<errorMessage>"

    Examples:
      | username      | password      | errorMessage                                                |
      | visual_user   | wrongpassword | Username and password do not match any user in this service |
      |               |               | Username is required                                        |


  