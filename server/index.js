const express = require("express");
const app =  express();

const mysql = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'amancio',
  password : 'amancio',
  database : 'eletronic_calendar'
});


app.get("/cadastro", (req, res) => {
    db.query(
        "INSERT INTO users (username, password) VALUES ('Amancio', 'testandosenha');",
        (err,  results) => {
            console.log(err)
            res.send(results);
        }
    )
})
app.listen(3001, (req, res) => {
    console.log("Its Running...");
})