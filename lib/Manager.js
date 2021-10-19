// * import the Employee Class
const Employee = require("./Employee");

// * create the employee class with everything they want in it
class Manager extends Employee {
  // *create constructor
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
  // * override getRole() method to return "Manager"
  getRole() {
    return "Manager";
  }
  // * create a getOfficeNum() method
  getOfficeNum() {
    console.log(this.officeNum);
    return this.officeNum;
  }
}

module.exports = Manager;
