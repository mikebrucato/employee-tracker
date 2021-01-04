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
  console.log("Welcome to the Employee Tracker")
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View Departments",
        "View Roles",
        "Update Employee Role",
        "Add New Employee",
        "Add New Role",
        "Add New Department"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "View All Employees":
        viewAllEmployees();
        break;

      case "View Departments":
        viewDepartment();
        break;

      case "View Roles":
        viewRoles();
        break;

      case "Update Employee Role":
        UpdateRole();
        break;

      case "Add New Employee":
        addNewEmployee();
        break;

      case "Add New Role":
        addNewRole();
        break;
      
      case "Add New Department":
        addNewDepartment();
        break;
      }
  });
}


// View all employees function
function viewAllEmployees() {
  connection.query("SELECT * FROM employee",
  function(err, res) {
    if (err) throw err
    console.table(res)
    mainMenuPrompt()
  }
)}

// View all departments function
function viewDepartment() {
  connection.query("SELECT * FROM department",
  function(err, res) {
    if (err) throw err
    console.table(res)
    mainMenuPrompt()
  }
)}

// View roles function
function viewRoles() {
  connection.query("SELECT * FROM role",
  function(err, res) {
    if (err) throw err
    console.table(res)
    mainMenuPrompt()
  }
)}

// Update existing employee role function
function UpdateRole() {
    inquirer
      .prompt ([
        {
        type: "input",
        message: "What's the employee's first name?",
        name: "updFirstName"
        },
        {
        type: "input",
        message: "what's the employee's last name",
        name: "updLastName"
        },
        {
        type: "input",
        message: "What role would you like to give the employee?",
        name: "updRole"
        }
      ])
    .then(function(answer) {
     connection.query("UPDATE employee (first_name, last_name, role_id) VALUES (?, ?, ?)", [answer.updFirstName, answer.updFirstName, answer.updRole],
     function(err, res) {
       if (err) throw err
       console.table(res)
       console.log(answer)
       mainMenuPrompt()
     })
  })
}


// Add new employee function
function addNewEmployee() {
  inquirer
    .prompt ([
      {
      type: "input",
      message: "What is the employees first name?",
      name: "empFirstName"
      },
      {
      type: "input",
      message: "What is the employee's last name?",
      name: "empLastName"
      },
    ])
  .then(function(answer) {
   connection.query("INSERT INTO employee (first_name, last_name) VALUES (?, ?)", [answer.empFirstName, answer.empLastName],
   function(err, res) {
     if (err) throw err
     console.table(res)
     mainMenuPrompt()
   })
 })
}

