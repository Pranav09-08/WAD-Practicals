const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());

// 🔹 Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/music");

// 🔹 Schema
const songSchema = new mongoose.Schema({
    songname: String,
    film: String,
    music_director: String,
    singer: String,
    actor: String,
    actress: String
});

const Song = mongoose.model("Song", songSchema);


// 🔹 (c) Insert 5 songs
app.get("/insert", async (req, res) => {
    await Song.insertMany([
        { songname: "Song1", film: "Film1", music_director: "MD1", singer: "Singer1" },
        { songname: "Song2", film: "Film2", music_director: "MD2", singer: "Singer2" },
        { songname: "Song3", film: "Film1", music_director: "MD1", singer: "Singer3" },
        { songname: "Song4", film: "Film3", music_director: "MD2", singer: "Singer1" },
        { songname: "Song5", film: "Film2", music_director: "MD3", singer: "Singer2" }
    ]);
    res.send("Inserted 5 songs");
});


// 🔹 (d) Count + list all
app.get("/songs", async (req, res) => {
    const songs = await Song.find();
    res.json({ count: songs.length, data: songs });
});


// 🔹 (e) Songs by music director
app.get("/director/:name", async (req, res) => {
    const songs = await Song.find({ music_director: req.params.name });
    res.json(songs);
});


// 🔹 (f) Songs by director + singer
app.get("/director/:md/singer/:singer", async (req, res) => {
    const songs = await Song.find({
        music_director: req.params.md,
        singer: req.params.singer
    });
    res.json(songs);
});


// 🔹 (g) Delete song
app.get("/delete/:name", async (req, res) => {
    await Song.deleteOne({ songname: req.params.name });
    res.send("Deleted");
});


// 🔹 (h) Add new song
app.post("/add", async (req, res) => {
    const song = new Song(req.body);
    await song.save();
    res.send("Song Added");
});


// 🔹 (i) Songs by singer + film
app.get("/singer/:singer/film/:film", async (req, res) => {
    const songs = await Song.find({
        singer: req.params.singer,
        film: req.params.film
    });
    res.json(songs);
});


// 🔹 (j) Update (add actor/actress)
app.get("/update/:name", async (req, res) => {
    await Song.updateOne(
        { songname: req.params.name },
        { $set: { actor: "Actor1", actress: "Actress1" } }
    );
    res.send("Updated");
});


// 🔹 (k) Display in table format
app.get("/table", async (req, res) => {
    const songs = await Song.find();

    let html = `<table border="1">
        <tr>
            <th>Song</th><th>Film</th><th>Director</th>
            <th>Singer</th><th>Actor</th><th>Actress</th>
        </tr>`;

    songs.forEach(s => {
        html += `<tr>
            <td>${s.songname}</td>
            <td>${s.film}</td>
            <td>${s.music_director}</td>
            <td>${s.singer}</td>
            <td>${s.actor || ""}</td>
            <td>${s.actress || ""}</td>
        </tr>`;
    });

    html += `</table>`;
    res.send(html);
});


// 🔹 Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});