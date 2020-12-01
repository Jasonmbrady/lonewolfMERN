const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
    name: String,
    weapons: Array,
    backpack: Array,
    misc: Array,
    disciplines: Array,
    beltpouch: Number,
    currEnd: Number,
    maxEnd: Number,
    combatSkill: Number

});

mongoose.model("Character", CharacterSchema);