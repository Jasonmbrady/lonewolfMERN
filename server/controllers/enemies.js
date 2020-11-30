const mongoose = require("mongoose");
const Enemy = mongoose.model("Enemy");

module.exports = {
    getAll: (req, res) => {
        Enemy.find()
            .then(Enemies => res.json(Enemies))
            .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Enemy.findOne({ _id: req.params.id })
            .then(Enemy => res.json(Enemy))
            .catch(err => res.status(400).json(err))
    },
    create: (req, res) => {
        Enemy.create(req.body)
            .then(newEnemy => res.json(newEnemy))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Enemy.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(updatedEnemy => res.json(updatedEnemy))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Enemy.deleteOne({ _id: req.params.id })
            .then(response => console.log(response))
            .catch(err => res.status(400).json(err))
    }
}