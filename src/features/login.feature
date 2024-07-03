Feature: Login Zara

 Background:
    Given the user is on zara login page

  Scenario: login with invalid username and password
     When the user fill username with "rociocora7@gmail.com"
     And the user fill password with "todoslosmeses7"
     And the user press login button
     Then the user should see error message 


  