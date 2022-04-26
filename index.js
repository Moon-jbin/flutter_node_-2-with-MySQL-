const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

var connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : '!Whdqls9512',
    database : 'test'
});
connection.connect();

app.get("/", (req,res) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (err, result, field) => {
            return res.json(result);
    })
});

app.listen(port, () => {
    console.log(port);
})