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
        "View Employees but Role?",
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
        artistSearch();
        break;

      case "Find all artists who appear more than once":
        multiSearch();
        break;

      case "Find data within a specific range":
        rangeSearch();
        break;

      case "Search for a specific song":
        songSearch();
        break;

      case "Find artists with a top song and top album in the same year":
        songAndAlbumSearch();
        break;
      }
    });
}
