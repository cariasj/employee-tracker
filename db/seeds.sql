INSERT INTO Departments (department_name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO Roles (job_title, salary, department_id)
VALUES
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 4),
('Software Engineer', 120000, 2),
('Account Manager', 125000, 3),
('Accountant', 250000, 3),
('Legal Team Lead', 180000, 4);

INSERT INTO Employees (first_name, last_name, role_id, manager_id)
VALUES
('Zeus', 'Doe', 4, NULL),
('Apollo', 'Doe', 2, 1),
('Hades', 'Doe', 2, 1),
('Athena', 'Doe', 1, 1),
('Charon', 'Doe', 6, 1),
('Hercules', 'Doe', 5, 1);