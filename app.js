const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",


  port: 3306,


  user: "root",


  password: "catfish1",
  database: "employees_DB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("this is working");
  startFunction();
});

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
        "Remove department"
      ]
    }
  ]).then(function (val) {
    switch (val.choice) {
      case "View employees":
        viewEmployees();
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

function viewEmployees();

function viewEmployeeRole();

function addEmployee();

function addRole();

function addDepartment();

function removeEmployee();

function removeRole();

function removeDepartment();