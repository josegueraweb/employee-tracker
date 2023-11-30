INSERT INTO department (id, department_name)
VALUES (1, 'MANAGEMENT'),
       (2, 'FOH'),
       (3, 'BOH');

INSERT INTO role (title, salary, department_id)
VALUES ('MANAGER', 110000, 1),
       ('CHEF', 92000, 2),
       ('SERVER', 33000, 3),
       ('HOST', 28000, 2),
       ('LINE COOK', 38000, 2),
       ('EXPO', 30000, 2),
       ('BUS', 28000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kanye', 'West', 1, 1),
       ('Jay', 'Zee', 2, NULL),
       ('Mariah', 'Carey', 3, NULL),
       ('Brittany', 'Spears', 4, NULL),
       ('Tu', 'Chains', 5, NULL),
       ('Kendrik', 'Lamar', 6, NULL),
       ('Bruno', 'Mars', 7, NULL);