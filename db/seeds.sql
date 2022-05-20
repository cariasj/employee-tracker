INSERT INTO department (dep_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, dep_id)
VALUES
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 4),
('Software Engineer', 120000, 2),
('Account Manager', 125000, 3),
('Accountant', 250000, 3),
('Legal Team Lead', 180000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Zeus', 'Doe', 4, NULL),
('Apollo', 'Doe', 2, 123),
('Hades', 'Doe', 2, 456),
('Athena', 'Doe', 1, 789),
('Charon', 'Doe', 6, 987),
('Hercules', 'Doe', 5, 654);