const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "employee_db",
});

function startApp() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Welcome! Please select from the following list of actions.",
        name: "action",
        choices: [
          "View all DEPARTMENTS",
          "View all ROLES",
          "View all EMPLOYEES",
          "Add DEPARTMENT",
          "Add ROLE",
          "Add EMPLOYEE",
          "Exit",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        case "View all DEPARTMENTS":
          viewDepartments();
          break;
        case "View all ROLES":
          viewRoles();
          break;
        case "View all EMPLOYEES":
          viewEmployees();
          break;
        case "Add DEPARTMENT":
          addDepartment();
          break;
        case "Add ROLE":
          addRole();
          break;
        case "Add EMPLOYEE":
          addEmployee();
          break;
        case "Update EMPLOYEE":
          updateEmployee();
          break;
        default:
          db.end();
          break;
      }
    });
}

function viewDepartments() {
  const sql = "SELECT * FROM department";
  console.table(res);
}

function viewRoles() {
  const sql = "SELECT * FROM role";
  console.table(res);
}

function viewEmployees() {
  const sql = "SELECT * FROM employee";
  console.table(res);
}

function addDepartment() {
  inquirer.prompt({
    type: "input",
    name: "name",
    message: "Enter name for new DEPARTMENT:",
  });
}

function addRole() {
  inquirer.prompt(
    {
      type: "input",
      name: "name",
      message: "Enter NAME for new ROLE:",
    },
    {
      type: "input",
      name: "salary",
      message: "Enter SALARY for new ROLE:",
    },
    {
      type: "list",
      name: "department",
      message: "Select DEPARTMENT for new ROLE:",
    }
  );
}

function addEmployee() {
  inquirer.prompt(
    {
      type: "input",
      name: "first_name",
      message: "Enter EMPLOYEE first name:",
    },
    {
      type: "input",
      name: "last_name",
      message: "Enter EMPLOYEE last name:",
    },
    {
      type: "list",
      name: "role",
      message: "Select ROLE for new EMPLOYEE:",
    }
  );
}

function updateEmployee() {
  inquirer.prompt(
    {
      type: "list",
      name: "employee",
      message: "Select EMPLOYEE to UPDATE:",
    },
    {
      type: "list",
      name: "role",
      message: "Select new ROLE:",
    },
  );
}
