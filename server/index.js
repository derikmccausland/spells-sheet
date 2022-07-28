const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.get(`/api/spells`, getSpells)
app.delete(`/api/spells/:id`, deleteSpell)
app.post(`/api/spells`, createSpell)
app.put(`/api/spells/:id`, updateSpell)

const {getSpells, deleteSpell, createSpell, updateSpell} = require('./controller.js')

app.listen(4000, () => console.log("Server running on 4000"));