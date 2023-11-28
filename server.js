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
        default:
          db.end();
          break;
      }
    });
}

