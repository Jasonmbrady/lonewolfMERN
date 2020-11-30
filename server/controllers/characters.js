const mongoose = require("mongoose");
const Character = mongoose.model("Character");

module.exports = {
    getAll: (req, res) => {
        Character.find()
            .then(Characters => res.json(Characters))
            .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Character.findOne({ _id: req.params.id })
            .then(Character => res.json(Character))
            .catch(err => res.status(400).json(err))
    },
    create: (req, res) => {
        Character.create(req.body)
            .then(newCharacter => res.json(newCharacter))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Character.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(updatedCharacter => res.json(updatedCharacter))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Character.deleteOne({ _id: req.params.id })
            .then(response => console.log(response))
            .catch(err => res.status(400).json(err))
    }
}