const db = require("../db/connection");
const cTable = require("console.table");
//setting up a class for department
class Dpt {
  constructor(id, dpt_name) {
    (this.id = id), (this.dpt_name = dpt_name);
  }
  //request for all data in department table
  getAll() {
    const sql = `SELECT * FROM department`;
    return db
      .promise()
      .query(sql)
      .then(([rows]) => {
        return rows;
      });
  }
  //request to add a department to table
  addDpt() {
    const sql = `INSERT INTO department (dpt_name)
    VALUES ("${this.dpt_name}")`;
    return db.promise().query(sql);
  }
}

module.exports = Dpt;