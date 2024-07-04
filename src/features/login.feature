Feature: Login Zara

 Background:
    Given the user is on zara login page

  Scenario: login with invalid username and password
     When the user fill email with "rociocora7@gmail.com"
     And the user fill password with "todoslosmeses7"
     And the user press login button
     Then the user should see error message "La combinación de usuario y contraseña no se corresponden con ninguna cuenta en Zara.com."


  