// Import MODEL 
let userSchema = require('../models/user')

const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');




exports.getAll = function(req,res) {

    userSchema.find({}, function(err, user){
        res.status(200).send(user);
    })

}

exports.create = function(req, res) {

   
    userSchema.find({email: req.body.email}, (err, result) => {
        if(err) console.log(err)
        if(result.length == 0) {
            var user = new userSchema(req.body)

            user.save((err, user) => {
                if(err) console.log(err)
                res.status(201).send({"msg" : "OK"})
            }) 
            return;
        }
        res.status(412).send({ "msg": "duplicated" })
    })

}

exports.authenticate = function(req,res) {
    userSchema.find({email: req.body.email}, (err, userInfo) => {
        if(err) console.log(err)

        if (userInfo.length == 0)  {
            res.status(412).send({ "msg": "user is not existed" }) 
            return;
        }

        bcrypt.compare(req.body.password, userInfo[0].password).then((match) => {
            if(match) {
                res.status(200).send({"msg" : "OK"})
            } else {
                res.send({"msg": "fail"}) 
            }   
        })

        })
}

