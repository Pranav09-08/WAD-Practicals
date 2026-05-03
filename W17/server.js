const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/employees", (req, res) => {
    fs.readFile("employees.json", (err, data) => {
        if (err) {
            res.status(500).send("Error reading file");
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});