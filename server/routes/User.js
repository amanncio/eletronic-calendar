const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.post("/cadastro", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO users (username, password) VALUES (?, ?);",
        [username, password],
        (err, results) => {
            console.log(err)
            res.send(results);
        }
    )
})

router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username = ?;",
        username,
        (err, results) => {
            if(err) {
                console.log(err);
            }
            if(results.length > 0){
                if(password == results[0].password) {
                    res.json({ loggedIn: true, username: username });
                } else{
                    res.json({ loggedIn: false,message: "Usuário ou senha incorreto!" });
                }
            }else{
                res.json({ loggedIn: false,message: "Usuário não existe!" });
            }
        }
    )
})

module.exports = router;