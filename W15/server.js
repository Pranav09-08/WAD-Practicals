const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/products", (req, res) => {
    fs.readFile("products.json", (err, data) => {
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