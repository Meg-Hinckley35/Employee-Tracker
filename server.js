const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'classroom57!',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);


app.get('/api/movies', (req, res) =>
    res.json(`${req.method} request received`));

app.post('/api/update_review', (req, res) => 
    res.json(`${req.method} request received`));

app.put('/api/add-movie', (req, res) => 
    res.json(`${req.method} request received`));

app.delete('/api/movie/:id', (req, res) => 
    res.json(`${req.method} request received`));

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });