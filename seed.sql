DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;


-- Create table for Department
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30)
 
);

-- Create table for Role
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary INT,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);


-- Create table for Employees
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  manager_id INT,
  role_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)

);


-- Set inital values for Department table
INSERT INTO department (name)
VALUE ("Sales");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Legal");

-- Set intial values for Role table
INSERT INTO role (title, salary, department_id)
VALUE ("Engineering Manager", 200000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Legal Team Manager", 150000, 4);
INSERT INTO role (title, salary, department_id)
VALUE ("Accountant", 90000, 3);
INSERT INTO role (title, salary, department_id)
VALUE ("Sales Manager", 125000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Salesperson", 75000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("Software Engineer", 85000, 2);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 160000, 4);

-- Set inital values for Employee table
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Katie", "Harding", null, 1);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Michael", "Smith", null, 2);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jamie","Thomas",null,3);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("John", "Olson", 1, 4);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Nicholas", "Malone", 4, 5);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Anthony", "Egle", 1, 6);
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Jim", "Beam", 2, 7);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;