const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",


  port: 3306,


  user: "root",

  //use your own unique password
  password: "",
  database: "employees_DB"
});
var managerArray = [];
var roleArray = [];
connection.connect(function (err) {
  if (err) throw err;
  console.log("this is working");
  viewTable();
});
const viewTable = () => {
  connection.query("select employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name as 'department name', manager.first_name as manager from employee join role ON employee.role_id = role.id join department ON role.department_id = department.id left JOIN employee manager on manager.id = employee.manager_id order by id;",
    (err, res) => {
      if (err) throw err
      console.table(res)
      startFunction();
    })
}

function startFunction() {
  inquirer.prompt([
    {
      type: "list",
      message: "Choose what you would like to do:",
      name: "choice",
      choices: [
        "View employees",
        "View employee roles",
        "Add new employee",
        "Add new role",
        "Add department",
        "Remove employee",
        "Remove role",
        "Remove department",
        "Update employee",
        "Quit"
      ]
    }
  ]).then(function (val) {
    switch (val.choice) {
      case "Quit":
        connection.end();
        break;
      case "View employees":
        viewEmployees();
        break;
      case "Update employee":
        updateEmployees();
        break;
      case "View employee roles":
        viewEmployeeRole();
        break;

      case "Add new employee":
        addEmployee();
        break;

      case "Add new role":
        addRole();
        break;

      case "Add department":
        addDepartment();
        break;

      case "Remove employee":
        removeEmployee();
        break;

      case "Remove role":
        removeRole();
        break;

      case "Remove department":
        removeDepartment();
        break;

    }
  })
}

function viewEmployees() {
  connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
    function (err, res) {
      if (err) throw err
      console.table(res);
      startFunction();
    })

}

function viewEmployeeRole() {
  connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
    function (err, res) {
      if (err) throw err
      console.table(res)
      startFunction();
    })
}

function addEmployee() {

  inquirer.prompt([
    {
      type: "input",
      message: "What is the first name of the employee you wish to add?",
      name: "firstName"
    },
    {
      type: "input",
      message: "What is the last name of the employee you wish to add?",
      name: "lastName"
    },
    {
      type: "input",
      message: "What is the new employee role id?",
      name: "employeeRole"
    },
    {
      type: "input",
      message: "Who is the new employee's manager id?",
      name: "employeeManager"
    }

  ]).then(function (answer) {



    connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.roleID, answer.managerID], function (err, res) {
      if (err) throw err;
      console.table(res)
      startFunction();
    })
  })
}

function addDepartment() {


  inquirer.prompt({

    type: "input",
    message: "What is the name of the department you wish to add?",
    name: "departmentName"

  }).then(function (answer) {



    connection.query("INSERT INTO department (name) VALUES (?)", [answer.departmentName], function (err, res) {
      if (err) throw err;
      console.table(res)
      startFunction();
      console.log(answer.departmentName);
    })
  })
}



function addRole() {

  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the role?",
      name: "role"
    },
    {
      type: "input",
      message: "What is the salary?",
      name: "salary"
    },
  
    {
      type: "input",
      message: "What is the department id?",
      name: "department"
    }

  ]).then(function (answer) {



    connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.role, answer.salary, answer.department], function(err, res) {
      if (err) throw err;
      console.table(res);
      startFunction();
    })
  })
}

function removeEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the ID of the employee you wish to delete?",
      name: "employeeID"
    }

  ]).then(function (answer) {



    connection.query("DELETE FROM employee WHERE id=?", answer.employeeID, function(err, res) {
      if (err) throw err;
      console.table(res);
      startFunction();
    })
  })

}

function removeRole() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the ID of the role you wish to delete?",
      name: "roleID"
    }

  ]).then(function (answer) {



    connection.query("DELETE FROM role WHERE id=?", answer.roleID, function(err, res) {
      if (err) throw err;
      console.table(res);
      startFunction();
    })
  })

}

function removeDepartment() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the ID of the role you wish to delete?",
      name: "departmentID"
    }

  ]).then(function (answer) {



    connection.query("DELETE FROM department WHERE id=?", answer.departmentID, function(err, res) {
      if (err) throw err;
      console.table(res);
      startFunction();
    })
  })


}
function updateEmployees() {
  
}