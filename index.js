// *import fs and Inquirer as well as the other 3 classes.
const fs = require("fs");
const inquirer = require("inquirer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const { conditionalExpression } = require("@babel/types");
const { finalize } = require("rxjs");

function validText(response) {
  let validResponse =
    response && isNaN(response)
      ? true
      : "this response is required and it needs to be Text. Please try again.";
  return validResponse;
}

function validNum(response) {
  let validResponse =
    response && !isNaN(response)
      ? true
      : "this response is required and it needs to be text. Please try again.";
  return validResponse;
}

let allOfMyTeam = [];

// * create function that runs the manager inquirer Prompts
function managerPrompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is your team managers name",
        validate: validText,
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the employee ID of your team manager?",
        validate: validNum,
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the email for your team manager",
        validate: validText,
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is the office number of your team manager",
        validate: validNum,
      },
    ])
    .then((answers) => {
      console.log(answers);
      // * destructure the answers object.
      const { managerName, managerId, managerEmail, managerOffice } = answers;
      // * create new instance of manager class
      const manager = new Manager(
        managerName,
        managerId,
        managerEmail,
        managerOffice
      );
      // * add manager to array
      allOfMyTeam.push(manager);
      menuPrompt();
    });
}

function menuPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "What do you want to do now?",
        choices: [
          "Add an engineer",
          "Add an Intern",
          "I'm done building my team!",
        ],
      },
    ])
    .then((answers) => {
      if (answers.menu === "Add an engineer") {
        addEngineer();
      } else if (answers.menu === "Add an intern") {
        addIntern();
      } else if (answers.menu === "I'm done building my team!") {
        finalizeTeam();
      } else {
        console.log("you made a mistake");
      }
    });
}

managerPrompt();
