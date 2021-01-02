// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table")

// mySQL connection, connects to employee tracker database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Password1",
  database: "employee_trackerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId)
  mainMenuPrompt()
})

// Main menu prompt for main menu of employee tracker
function mainMenuPrompt() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees?",
        "View Employees by Department?",
        "View Employees by Role?",
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

      case "View Employees by Department?":
        viewEmployeesByDepartment();
        break;

      case "View Employees by Role?":
        viewEmployeesByRole();
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


// View all employees function
function viewAllEmployees() {
  connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id LEFT JOIN employee e on employee.manager_id = e.id;",
  function(err, res) {
    if (err) throw err
    console.table(res)
    mainMenuPrompt()
  }
)}

// View employees by department function
function viewEmployeesByDepartment() {
  connection.query("SELECT employee.first_name, employee.last_name, department.name AS department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role. department_id = department.id ORDER BY employee.id",
  function(err, res) {
    if (err) throw err
    console.table(res)
    mainMenuPrompt()
  }
)}

// View employees by role function
function viewEmployeesByRole() {
  connection.query("",
  function(err, res) {
    if (err) throw err
    console.table(res)
    mainMenuPrompt()
  }
)}

