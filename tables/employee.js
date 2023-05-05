const db = require("../db/connection");
const cTable = require("console.table");

//set up class for employee table
class Employee {
  constructor(id, first_name, last_name, role_id, mgr_id) {
    (this.id = id),
      (this.first_name = first_name),
      (this.last_name = last_name),
      (this.role_id = role_id),
      (this.mgr_id = mgr_id);
  }
  //request to fet all data from employee table
  getAll() {
    const sql = `SELECT * FROM employee`;
    return db
      .promise()
      .query(sql)
      .then(([row]) => {
        return row;
      });
  }
//request to add an employee to the table
  addEmployee() {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, mgr_id)
    VALUES (?,?,?,?)`;
    const params = [this.first_name, this.last_name, this.role_id, this.mgr_id];
    return db.promise().query(sql, params);
  }
//request to select a specific employee by their id
  getEmployeeById() {
    const sql = `SELECT * FROM employee WHERE id = '${this.id}'`;
    return db
      .promise()
      .query(sql)
      .then(([row]) => {
        return row;
      });
  }
//request to update a current employee
  updateEmployee() {
    const sql = `UPDATE employee SET role_id = ? WHERE id = '${this.id}'`;
    const params = [this.role_id];
    return db
      .promise()
      .query(sql, params)
      .then(([rows]) => {
        return rows;
      });
  }
}

module.exports = Employee;
