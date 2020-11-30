const mongoose = require("mongoose");

const PageSchema = new mongoose.Schema({
    pgNum: Number,
    text: String

});

mongoose.model("Page", PageSchema);