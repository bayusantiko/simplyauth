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


    // Create a Token
    var val = Math.floor(1000 + Math.random() * 9000);
    const token = new Token({
        token: val,
        user: req.body.user,
        status: "active"
    });

    // Save Token in the database
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
    Token.find({status: 'active'})
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};

async function verify(req, res){
    const data = await Token.find({ user: req.body.user, token:req.body.token, status: "active"})
    if (data.length){
        console.log(data)
        return res.send(data)
    }
    else if(!data.length){
        return res.status(401).send({
            message: "token active not found " + req.body.user
        });
    }
    else{
        return res.status(500).send({
            message: "Error retrieving token with id " + req.body.user
        });
    }
}
module.exports.verify = verify;

