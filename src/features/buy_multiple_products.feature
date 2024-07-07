Feature: Add and remove cart

Scenario: Add and remove a product from the cart
    Given the user is on saucedemo login page
    When the user fill username with "visual_user"
    And the user fill password with "secret_sauce"
    And the user press login button
    Then the user should see products page
    And the user add to cart "Sauce Labs Bike light"
    And the user click on the cart button
    And the user click on the Continue Shopping button
    And the user add to cart "Sauce Labs Bolt T-Shirt"
    And the user click on the cart button
    When the user press checkout
    And the user fill form with name "Rocio", last name "Cordoba" and postal code "56565"
    And the user press continue button
    Then the user should see total price "28.06"
    And the user press finish
    Then the user should see the buy complete message "Thank you for your order"

