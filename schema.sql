
DROP DATABASE IF EXISTS employees; 
CREATE DATABASE employees;

USE employees;


CREATE TABLE IF NOT EXISTS department(
deparment_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) UNIQUE NOT NULL,
);

CREATE TABLE IF NOT EXISTS role(
    role_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL,
);



CREATE TABLE IF NOT EXISTS employee(
employee_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) UNIQUE NOT NULL,
last_name VARCHAR(30) UNIQUE NOT NULL,
role_id INT UNSIGNED NOT NULL,
manager_id INT UNSIGNED NOT NULL,
);






--Select query with INNER JOIN on multiple tables
SELECT column, another_table_column, …
FROM employees   --mytable
INNER JOIN another_table 
ON employee.id = department.id



--WHERE condition(s)
--ORDER BY column, … ASC/DESC
--LIMIT num_limit OFFSET num_offset;