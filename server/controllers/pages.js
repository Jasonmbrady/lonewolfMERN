const mongoose = require("mongoose");
const Page = mongoose.model("Page");

module.exports = {
    getAll: (req, res) => {
        Page.find()
            .then(Pages => res.json(Pages))
            .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Page.findOne({ _id: req.params.id })
            .then(Page => res.json(Page))
            .catch(err => res.status(400).json(err))
    },
    create: (req, res) => {
        Page.create(req.body)
            .then(newPage => res.json(newPage))
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Page.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(updatedPage => res.json(updatedPage))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Page.deleteOne({ _id: req.params.id })
            .then(response => console.log(response))
            .catch(err => res.status(400).json(err))
    }
}