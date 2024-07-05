Feature: Login Saucedemo

 Background:
    Given the user is on saucedemo login page

  Scenario: login with invalid username and password
     When the user fill username with "visual_user"
     And the user fill password with "secret_sauce"
     And the user press login button
     Then the user should see products page

  