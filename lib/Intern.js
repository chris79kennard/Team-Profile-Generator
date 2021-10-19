// * import the Employee Class
const Employee = require("./Employee");

// * create the employee class with everything they want in it
class Intern extends Employee {
  // *create constructor
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // * override getRole() method to return  Intern"
  getRole() {
    return "Intern";
  }
  // * create GetSchool() method
  getSchool() {
    console.log(this.school);
    return this.school;
  }
}

module.exports = Intern;
