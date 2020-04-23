const Token = require('../models/token');
const telegram = require('./telegram');
const moment = require('moment');


// Create and Save a new token
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
            message: err.message || "Some error occurred while creating the token."
        });
    });
};

async function find(req, res){
   const data = await Token.find({ expiredAt:{ $lte: moment().add(7,'Hours') }, status: "active"})
   if (data.length){
    //console.log(data)
    return res.send(data)
    }
    else if(!data.length){
        return res.status(401).send({
            message: "token active not found "
        });
    }
    else{
        return res.status(500).send({
            message: "Error retrieving token with id "
        });
    }
}

module.exports.find=find;


// Update a token identified by the tokenId in the request
exports.update = (req, res) => {
    
};

// Delete a token with the specified tokenId in the request
exports.delete = (req, res) => {

};

async function verify(req, res){
    const data = await Token.find({ user: req.body.user, token:req.body.token, status: "active"})
    if (data.length){
        //console.log(data)
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

async function expires(){
    try{
        const data = await Token.updateMany({expiredAt:{$lte: moment().add(7,'Hours')}, status: "active"},{status:"expired"})
        if (data){
            console.log("sukses")
        }
        else if(!data.length){
            console.log("not found")
         }
         else{
             console.log("error get data")
         }
    }
    catch(err){
        console.log(err)
    }
        
       /*
       Token.updateMany({ expiredAt:{ $lte: moment().add(7,'Hours') }, status: "active"},{$set : {status: "expired"}}, function(err, result) {
        if (err) {
            console.log("error")
          res.status(500).send(err);
        } else {
            console.log("success")
          res.send(result);
        }
      });*/
}
module.exports.expires = expires;
