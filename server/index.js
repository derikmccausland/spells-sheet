const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 4000
const app = express();
const path = require("path");

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/css', (req, res) =>{
    res.sendFile(path.join(__dirname, '../client/styles.css'))
})

app.get('/js', (req, res) =>{
    res.sendFile(path.join(__dirname, '../client/main.js'))
})

app.get('/db', (req, res) =>{
    res.sendFile(path.join(__dirname, './db.json'))
})

const {getMovies, deleteMovie, createMovie, updateMovie} = require('./controller.js')

app.get(`/api/movies`, getMovies)
app.delete(`/api/movies/:id`, deleteMovie)
app.post(`/api/movies`, createMovie)
app.put(`/api/movies/:id`, updateMovie)

app.listen(port, () => console.log("Server running on 4000"));

