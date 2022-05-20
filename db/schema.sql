DROP DATABASE IF EXISTS employeesdb;
CREATE DATABASE employeesdb;

USE employeesdb;

CREATE TABLE department (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
dep_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2) NOT NULL,
dep_id INT NOT NULL
);

CREATE TABLE employee (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT
);