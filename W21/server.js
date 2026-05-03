const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

// 🔹 Connect MongoDB (Database: bookstore)
mongoose.connect("mongodb://127.0.0.1:27017/bookstore")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// 🔹 Schema
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    price: Number,
    genre: String
});

const Book = mongoose.model("Book", bookSchema);


// ===============================
// ➕ CREATE (Add Book)
// ===============================
app.post("/books", async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.send("Book Added");
});


// ===============================
// 📄 READ (Get All Books)
// ===============================
app.get("/books", async (req, res) => {
    const books = await Book.find();
    res.json(books);
});


// ===============================
// ✏️ UPDATE Book
// ===============================
app.put("/books/:id", async (req, res) => {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.send("Book Updated");
});


// ===============================
// ❌ DELETE Book
// ===============================
app.delete("/books/:id", async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.send("Book Deleted");
});


// ===============================
// Start Server
// ===============================
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});