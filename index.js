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
          "Add an intern",
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

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is your team engineers name",
        validate: validText,
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the employee ID of your team engineer?",
        validate: validNum,
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the email for your team engineer",
        validate: validText,
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the github username of your team engineer",
        validate: validText,
      },
    ])

    .then((answers) => {
      console.log(answers);
      // * destructure the answers object.
      const { engineerName, engineerId, engineerEmail, engineerGithub } =
        answers;
      // * create new instance of engineer class
      const engineer = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        engineerGithub
      );
      // * add manager to array
      allOfMyTeam.push(engineer);
      menuPrompt();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is your team interns name",
        validate: validText,
      },
      {
        type: "input",
        name: "internId",
        message: "What is the employee ID of your team intern?",
        validate: validNum,
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the email for your team intern",
        validate: validText,
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school does or did your of your team intern attend",
        validate: validText,
      },
    ])

    .then((answers) => {
      console.log(answers);
      // * destructure the answers object.
      const { internName, internId, internEmail, internSchool } = answers;
      // * create new instance of intern class
      const intern = new Intern(
        internName,
        internId,
        internEmail,
        internSchool
      );
      // * add intern to array
      allOfMyTeam.push(intern);
      menuPrompt();
    });
}

let name, id, email, role, additionMethod, icon, additiionalLable;
let teamValueArray = [];

function finalizeTeam() {
  for (let teamMember of allOfMyTeam) {
    name = teamMember.getName();
    id = teamMember.getId();
    email = teamMember.getEmail();
    role = teamMember.getRole();

    if (role === "Manager") {
      additionMethod = teamMember.getOfficeNum();
      additiionalLable = "Office Number: ";
      icon = `<i class="fas fa-mug-hot"></i>`;
    } else if (role === "Intern") {
      additionMethod = teamMember.getSchool();
      additiionalLable = "School: ";
      icon = `<i class="fas fa-user-graduate"></i>`;
    } else if (role === "Engineer") {
      additionMethod = teamMember.getGithub();
      additiionalLable = "GitHub: ";
      icon = `<i class="fas fa-glasses"></i>`;
    }
    giantTeamMemberObject = {
      name: name,
      id: id,
      email: email,
      role: role,
      additionMethod: additionMethod,
      additiionalLable: additiionalLable,
      icon: icon,
    };
    teamValueArray.push(giantTeamMemberObject);
  }

  generateMyHTML(teamValueArray);
}

let htmlString;

function generateMyHTML() {
  htmlString = `
  <!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="Description" content="Enter your description here" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />
    <link rel="stylesheet" href="dist/style.css" />
    <title>Employee Generator</title>
  </head>
  <body>
    <nav class="navbar navbar-light bg-light mb-3">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">My Team Builder</span>
      </div>
    </nav>
    <div id="team-cards" class="container d-flex flex-wrap justify-content-center align-items-center">
    `;
  // giantTeamMemberObject = {
  //   name: name,
  //   id: id,
  //   email: email,
  //   role: role,
  //   additionMethod: additionMethod,
  //   additiionalLable: additiionalLable,
  //   icon: icon,
  // };

  for (let element of teamValueArray) {
    let additionalFinal;
    if (element.role === "Engineer") {
      additionalFinal = ` <a href="https://github.com/${element.additionMethod}">${element.additionMethod}</a>`;
    } else {
      additionalFinal = element.additionMethod;
    }

    let linkedEmail = `<a href="mailto: ${element.email}">${element.email}</a>`;

    htmlString = htmlString.concat(`
    <div class="card m-2" style="min-width: 24rem">
    <div class="card-body">
      <h5 class="card-title">${element.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${element.icon} ${element.role}</h6>
      <ul class="list-group">
        <li class="list-group-item">Employee id: ${element.id}</li>
        <li class="list-group-item">Employee Email: ${linkedEmail}</li>
        <li class="list-group-item">${element.additiionalLable} ${additionalFinal}</li>
      </ul>
    </div>
  </div>
</div>
`);
  }
  htmlString = htmlString.concat(
    `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
    </body>
    </html> `
  );
  createHtmlDoc(htmlString);
}

function createHtmlDoc(text) {
  fs.writeFile("index.html", text, (err) => {
    err ? console.log(err) : console.log("Document Created!");
  });
}

managerPrompt();
