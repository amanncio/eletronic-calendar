const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.post("/upload", (req, res) => {
    const activityName = req.body.activityName;
    const description = req.body.description;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const status = req.body.status;

    db.query(
        "INSERT INTO activities (activity_name, description, start_date, end_date, status) VALUES (?, ?, ?, ?, ?);",
        [activityName, description, startDate, endDate, status],
        (err, results) => {
            console.log(err)
            res.send(results);
        }
    )
})