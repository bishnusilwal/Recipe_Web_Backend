const res = require("express/lib/response");
const jwt = require("jsonwebtoken");

const User = require("../models/usermodel");
module.exports.verifyUser= function(req,res,next){
   try{
    const token= req.headers.authorization.split(" ")[1];
    const Udata = jwt.verify(token,"anykey")
    User.findOne({_id: Udata.usstId}).then(function(UsData){
        console.log(UsData)
        req.userInfo = UsData;
        next();
    })
    .catch(function(e){
        res.json({error:e})
    })
   



}
catch(e){
    res.json({error:e})
}
}


///admin
module.exports.verifyAdmin= function(req,res,next){
    try{
     const token= req.headers.authorization.split(" ")[1];
     const Udata = jwt.verify(token,"anykey")
     Admin.findOne({_id: Udata.usstId}).then(function(UsData){
         console.log(UsData)
         req.userInfo = UsData;
         next();
     })
     .catch(function(e){
         res.json({error:e})
     })
    
 
 
 
 }
 catch(e){
     res.json({error:e})
 }
 }