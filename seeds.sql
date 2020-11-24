-- DECLARE THE DEPARTMENTS
INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");
-- INSERT OUR ROLES
INSERT INTO role (title, salary, department_id) VALUES ("Sales Lead", 100000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Salesperson", 80000, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Lead Engineer", 150000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Software Engineer", 120000, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Accountant", 125000, 3);
INSERT INTO role (title, salary, department_id) VALUES ("Legal Team Lead", 250000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Lawyer", 190000, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Lead Engineer", 150000, 2);
-- ADD OUR EMPLOYEES
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley", "Rodriguez", 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin", "Tupik", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Malia", "Brown", 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah", "Lourd", 6, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Allen", 7, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Christian", "Eckenrode", 8, 2);

-- SELECT * FROM department;

-- SELECT * FROM role;

-- SELECT * FROM employee;

-- SELECT emp2.id, emp2.first_name, emp2.last_name, emp1.last_name AS mgr_lastname, emp1.first_name AS mgr_firstname
--  FROM employee emp1 JOIN employee emp2 
-- ON emp2.manager_id = emp1.id;

-- view all employees
-- select employee.id, 
-- employee.first_name, 
-- employee.last_name, 
-- role.title, 
-- role.salary, 
-- department.name as 'department name', 
-- manager.first_name as manager from employee
-- join role ON employee.role_id = role.id
-- join department ON role.department_id = department.id
-- JOIN employee manager on manager.id = employee.manager_id
-- order by id;