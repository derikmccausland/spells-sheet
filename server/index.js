const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

const {getSpells, deleteSpell, createSpell, updateSpell} = require('./controller.js')

app.get(`/spells`, getSpells)
app.delete(`/spells/:id`, deleteSpell)
app.post(`/spells`, createSpell)
// app.put(`/spells/:id`, updateSpell)


app.listen(4000, () => console.log("Server running on 4000"));