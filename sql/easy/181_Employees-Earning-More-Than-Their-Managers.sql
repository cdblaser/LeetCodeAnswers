-- https://leetcode.com/problems/employees-earning-more-than-their-managers/

Select name as Employee FROM Employee a WHERE a.Salary > (SELECT b.Salary FROM Employee b WHERE a.managerId = b.Id)