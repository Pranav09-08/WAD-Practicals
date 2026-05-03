const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 🔹 Connect MongoDB (Database: student)
mongoose.connect("mongodb://127.0.0.1:27017/student")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// 🔹 Schema
const studentSchema = new mongoose.Schema({
    name: String,
    roll_no: Number,
    wad: Number,
    cc: Number,
    dsbda: Number,
    cns: Number,
    ai: Number
});

const Student = mongoose.model("Student", studentSchema);


// ===============================
// (c) Insert 5 Students
// ===============================
app.get("/insert", async (req, res) => {
    await Student.insertMany([
        { name: "A", roll_no: 1, wad: 25, cc: 26, dsbda: 30, cns: 28, ai: 27 },
        { name: "B", roll_no: 2, wad: 20, cc: 22, dsbda: 18, cns: 19, ai: 21 },
        { name: "C", roll_no: 3, wad: 27, cc: 29, dsbda: 31, cns: 30, ai: 28 },
        { name: "D", roll_no: 4, wad: 15, cc: 18, dsbda: 10, cns: 12, ai: 14 },
        { name: "E", roll_no: 5, wad: 26, cc: 27, dsbda: 25, cns: 26, ai: 29 }
    ]);
    res.send("Inserted 5 students");
});


// ===============================
// (d) Count + Display all
// ===============================
app.get("/students", async (req, res) => {
    const data = await Student.find();
    res.json({ count: data.length, data });
});


// ===============================
// (e) DSBDA > 20
// ===============================
app.get("/dsbda20", async (req, res) => {
    const data = await Student.find({ dsbda: { $gt: 20 } }, { name: 1, _id: 0 });
    res.json(data);
});


// ===============================
// (f) Update marks of specific student by +10
// ===============================
app.get("/update/:name", async (req, res) => {
    await Student.updateOne(
        { name: req.params.name },
        { $inc: { wad: 10, cc: 10, dsbda: 10, cns: 10, ai: 10 } }
    );
    res.send("Marks Updated");
});


// ===============================
// (g) Students >25 in ALL subjects
// ===============================
app.get("/above25all", async (req, res) => {
    const data = await Student.find({
        wad: { $gt: 25 },
        cc: { $gt: 25 },
        dsbda: { $gt: 25 },
        cns: { $gt: 25 },
        ai: { $gt: 25 }
    }, { name: 1, _id: 0 });

    res.json(data);
});


// ===============================
// (h) <40 in Maths & Science (Assume Maths=wad, Science=cns)
// ===============================
app.get("/less40", async (req, res) => {
    const data = await Student.find({
        wad: { $lt: 40 },
        cns: { $lt: 40 }
    }, { name: 1, _id: 0 });

    res.json(data);
});


// ===============================
// (i) Delete specific student
// ===============================
app.get("/delete/:name", async (req, res) => {
    await Student.deleteOne({ name: req.params.name });
    res.send("Student Deleted");
});


// ===============================
// (j) Display in Table format
// ===============================
app.get("/table", async (req, res) => {
    const data = await Student.find();

    let html = `
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>WAD</th>
            <th>CC</th>
            <th>DSBDA</th>
            <th>CNS</th>
            <th>AI</th>
        </tr>
    `;

    data.forEach(s => {
        html += `
        <tr>
            <td>${s.name}</td>
            <td>${s.roll_no}</td>
            <td>${s.wad}</td>
            <td>${s.cc}</td>
            <td>${s.dsbda}</td>
            <td>${s.cns}</td>
            <td>${s.ai}</td>
        </tr>
        `;
    });

    html += "</table>";

    res.send(html);
});


// ===============================
// Start Server
// ===============================
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});