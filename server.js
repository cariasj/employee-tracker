const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");
const db = require('./db/connection');

function promptStart () {

    inquirer
    .prompt(
        {
            type: "list",
            choices: [
              "Add department",
              "Add role",
              "Add employee",
              "View department",
              "View role",
              "View employee",
              "Update employee role",
              "Quit"
            ],
            message: "What would you like to do?",
            name: "promptStart"
          })
    .then((answers) => {
        switch (answers.promptStart) {
            case "View department":
                selectDeps().then(([rows, fields]) => {
                    console.table(rows);
                    finit();
                });
            break;
            case "View role":
                selectrole().then(([rows, fields]) => {
                    console.table(rows)
                    finit();
                });
            break;
            case "View employee":
                selectemployee().then(([rows, fields]) => {
                    console.table(rows)
                    finit();
                });
            break;
            case "Add department":
                addDeps();
    
            break;
            case "Add role":
                addRole();
    
            break;
            case "Add employee":
                addEmployee();
    
            break;
            case "Update employee role":
                updateEmployee();
            
            break;
            default:
        }
    });
    };
    
    const selectDeps = () => {
        return db.promise().execute("SELECT * FROM department;");
    };
    
    const selectrole = () => {
        return db.promise().execute("SELECT * FROM role;");
    }
    
    const selectemployee = () => {
        return db.promise().execute("SELECT * FROM employee;");
    }
    
    const addDeps = () => {
        inquirer
        .prompt([
            {
                type: "input",
                name: "depName",
                message: "Name of department?",
            },
        ])
        .then((answers) => {
            const queryResults = db.query(
                `INSERT INTO department (dep_name) VALUES (?);`,
                answers.depName,
                (err, results, fields) => {
                    if (err) {
                        console.log(`error adding ${answers.depName} to db .`
                        );
                } else {
                    console.log(`${answers.depName} was added`)
                }
                }
            );
           finit();
            })
        };
    
    const addRole = () => {
        inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: "What is the title?",
            },
            {
                type: "input",
                name: "salary",
                message: "Salary amount?" 
            },
            {
                type: "input",
                name: "department",
                message: "department id ?" 
            }
        ])
        .then((answers) => {
            const queryResults = db.query(
                `INSERT INTO role (title, salary, dep_id) VALUES (?, ?, ?);`,
                [answers.title, answers.salary, answers.department],
                (err, results, fields) => {
                    if (err) {
                        console.log(`Error adding ${answers.title} to db`);
                    } else {
                        console.log(`${answers.title} was added`)
                    }
                }
            );
         finit()   
        })
    }
    
    const addEmployee = () => {
        inquirer
        .prompt([
            {
                type: "input",
                name: "first_name",
                message: "first name?"
            },
            {
                type: "input",
                name: "last_name",
                message: "last name?"
            },
            {
                type: "input",
                name: "role_id",
                message: "role id?"
            },
            {
                type: "input",
                name: "manager_id",
                message: "manager's id ?"
            }
        ])
        .then((answers) => {
            const queryResults = db.query(
                `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);`,
                [answers.first_name, answers.last_name, answers.role_id, answers.manager_id],
                (err, results, fields) => {
                    if (err) {
                        console.log(`Error adding ${answers.last_name} to db`)
                    } else {
                        console.log(`${answers.last_name} was added`)
                    }
                }
            )
            finit()
        })
    }
    
    const updateEmployee = () => {
      inquirer
      .prompt([
          {
              type: "input",
              name: "name",
              message: "Please choose employee to update.."
          },
          {
            type: "input",
            message: "New role ID?",
            name: "newRole"
          }
        ])
      .then(function(answer) {
        connection.query('UPDATE employee SET role_id=? WHERE first_name= ?',[answer.newRole, answer.name],function(err, res) {
          if (err) throw err;
          console.table(res);
          promptStart();
        });
      });
    }
    
    const finit = () =>
    inquirer
    .prompt([
        {
            name: "additional",
            type: "confirm",
            message: "Another task?",
        },
    ])
    .then((answer) => {
        if (answer.additional) {
            return promptStart();
        } else {
            process.exit();
        }
    }
    );
    promptStart()

  