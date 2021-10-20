// * create the employee class with everything they want in it
class Employee {
  // *create constructor
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //* create a getName() method
  getName() {
    console.log(this.name);
    return this.name;
  }
  // * create a getID() method
  getId() {
    console.log(this.id);
    return this.id;
  }
  // * create a getEmail() method
  getEmail() {
    console.log(this.email);
    return this.email;
  }
  // * create a getRole() method that returns "Employee"
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
