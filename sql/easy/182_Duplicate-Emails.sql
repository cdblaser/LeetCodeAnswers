-- https://leetcode.com/problems/duplicate-emails/

SELECT email as Email from Person GROUP BY email HAVING COUNT(email) > 1