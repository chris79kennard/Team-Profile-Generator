// * import the Employee Class
const Employee = require("./Employee");

// * create the employee class with everything they want in it
class Engineer extends Employee {
  // *create constructor
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  // * override getRole() method to return  Engineer"
  getRole() {
    return "Engineer";
  }
  // * create a getGithub() method
  getGithub() {
    console.log(this.github);
    return this.github;
  }
  // getGithubLink() {}
}

module.exports = Engineer;
