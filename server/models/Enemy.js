const mongoose = require("mongoose");

const EnemySchema = new mongoose.Schema({
    name: String,

});

mongoose.model("Enemy", EnemySchema);