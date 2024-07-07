Feature: Add and remove cart

Scenario: Add and remove a product from the cart
    Given the user is on saucedemo login page
    When the user fill username with "visual_user"
    And the user fill password with "secret_sauce"
    And the user press login button
    Then the user should see products page
    And the user add to cart "Sauce Labs Bike light"
    And the user click on the cart button
    Then the user should see "Sauce Labs Bike light" product on the cart
    And the user click on the Remove button
    And the user click on the Continue Shopping button 
    Then the user should see products page

  