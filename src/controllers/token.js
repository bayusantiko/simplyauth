const Token = require('../models/token');
const telegram = require('./telegram');

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.user) {
        return res.status(400).send({
            message: "user cannot be empty"
        });
    }

    // Create a Note
    var val = Math.floor(1000 + Math.random() * 9000);
    const token = new Token({
        token: val,
        user: req.body.user
    });

    // Save Note in the database
    token.save()
    .then(data => {
        telegram.sendToken(val,req.body.user);
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};


// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {

};

// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};
