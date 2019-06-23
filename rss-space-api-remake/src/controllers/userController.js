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
                res.status(201).send(user)
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
        console.log(userInfo[0])
        bcrypt.compare(req.body.password, userInfo[0].password).then((match) => {
            console.log(match)
            if(match) {
                res.status(200).send(userInfo[0])
            } else {
                res.send({"msg": "fail"}) 
            }   
        })

        })
}

exports.subscribed = function(req,res) {
    userSchema.findOne({_id: req.body.userId}, (err, userInfo) => { 
        if(err) console.log(err)
        console.log(userInfo)
        let isExisted = false
        userInfo.subscribed.forEach(element => {
            if(element == req.body.feedProviderId) {
                isExisted = true
            }
        }); 
        if(!isExisted) {
        userInfo.subscribed.push(req.body.feedProviderId)
        userInfo.save((err, user) => {
            if(err) console.log(err)
            res.status(201).send("OK") 
        })
        } else {
            res.status(200).send({"msg":"existed"})
        }

    })
}
