DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db; 

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL(10, 2) NOT NULL,
    department_id INT, 
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT, 
    manager_id INT, 
    foreign key (role_id) references role(id),
    foreign key (manager_id) references employee(id) ON DELETE SET NULL
);



