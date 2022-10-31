-- https://leetcode.com/problems/customers-who-never-order/

SELECT Customers.name as CUSTOMERS from Customers WHERE Customers.id NOT IN (SELECT Orders.customerId FROM Orders)