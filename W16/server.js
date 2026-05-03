const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(cors());

// Serve static files
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});