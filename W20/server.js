const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// 🔹 MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/company")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// 🔹 Schema
const employeeSchema = new mongoose.Schema({
    name: String,
    department: String,
    designation: String,
    salary: Number,
    joining_date: Date
});

const Employee = mongoose.model("Employee", employeeSchema);


// ===============================
// ➕ CREATE (Add Employee)
// ===============================
app.post("/employees", async (req, res) => {
    const emp = new Employee(req.body);
    await emp.save();
    res.send("Employee Added");
});


// ===============================
// 📄 READ (View All Employees)
// ===============================
app.get("/employees", async (req, res) => {
    const data = await Employee.find();
    res.json(data);
});


// ===============================
// ✏️ UPDATE Employee
// ===============================
app.put("/employees/:id", async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.send("Employee Updated");
});


// ===============================
// ❌ DELETE Employee
// ===============================
app.delete("/employees/:id", async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.send("Employee Deleted");
});


// ===============================
// Start Server
// ===============================
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});