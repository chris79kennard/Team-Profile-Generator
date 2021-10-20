const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");
const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing id, name, and email when called with the 'new' keyword", () => {
      const employee = new Employee("john doe", "1234", "john@doe.com");
      expect("name" in employee).toEqual(true);
      expect("id" in employee).toEqual(true);
      expect("email" in employee).toEqual(true);
      expect("role" in employee).toEqual(true);
      expect("fake" in employee).toEqual(false);
    });
  });

  describe("Check getters work", () => {
    const employee = new Employee("jane deer", "3456", "jane@deer.com");
    it("getName() should return name", () => {
      expect(employee.getName).toEqual("jane deer");
    });
    //it(getId())
    //it(getEmail())
  });
});
