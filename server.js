// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table")

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Password1",
  database: "employee_trackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  mainMenuPrompt()
})

function mainMenuPrompt() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees?",
        "View Employees by Role?",
        "View Employees by Department?",
        "Update Existing Employee",
        "Add New Employee?",
        "Add New Role?",
        "Add New Department?"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "View All Employees?":
        viewAllEmployees();
        break;

      case "View Employees by Role?":
        viewEmployeesByRole();
        break;

      case "View Employees by Department?":
        viewEmployeesByDepartment();
        break;

      case "Update Existing Employee":
        UpdateEmployee();
        break;

      case "Add New Employee?":
        addNewEmployee();
        break;

      case "Add New Role?":
        addNewRole();
        break;
      
      case "Add New Department?":
        addNewDepartment();
        break;
        
      }
    });
}
