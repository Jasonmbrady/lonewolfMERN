const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/LoneWolf", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to LoneWolf Database"))
    .catch(err => console.log("Unable to connect to LoneWolf Database", err))

require("../models/Page");
