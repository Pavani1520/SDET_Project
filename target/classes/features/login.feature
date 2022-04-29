Feature: Retailm login page
  I want to use this for logging  in

  Scenario: Edit and Delete the copoun
    Given User navigated to the Login page
    Then Enter username "admin" and password "Admin@123"
    And Retail Login Page should load
    Given Click on Coupons
    Then Click on Add Coupon
    Then Enter all the  details and Save it
    And Verify the added copoun
    Then Edit the added copoun and update it
    And Verify the Edited coupon in coupon list
    And Delete the coupon
