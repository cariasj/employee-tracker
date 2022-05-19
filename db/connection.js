const mysql = require('mysql2'); 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeesdb',
},

console.log('Connection successful')
);

module.exports = db;