const db = require("../db/connection");
const cTable = require("console.table");

//set up class for the employee's role table
class Role {
  constructor(id, title, salary, dpt_id) {
    (this.id = id),
      (this.title = title),
      (this.salary = salary),
      (this.dpt_id = dpt_id);
  }
  //request to get all roles from table
  getAll() {
    const sql = `SELECT * FROM emp_role`;
    return db
      .promise()
      .query(sql)
      .then(([rows]) => {
        return rows;
      });
  }
  //request to add a role to the table
  addRole() {
    const sql = `INSERT INTO emp_role (title, salary, dpt_id)
    VALUES ("${this.title}", "${this.salary}", "${this.dpt_id}")`;
    return db.promise().query(sql);
  }
}

module.exports = Role;
