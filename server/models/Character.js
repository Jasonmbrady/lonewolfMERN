const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
    name: String,


});

mongoose.model("Character", CharacterSchema);