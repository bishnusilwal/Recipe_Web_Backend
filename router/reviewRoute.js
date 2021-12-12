const express= require("express");
const router = new express.Router();

const Rew = require("../models/review")

router.post("/review", function(req,res){
    const username = req.body.username;
    const time = req.body.time;
    const review = req.body.review;

    const data = new Rew({
        username : username,
        time : time,
        review : review
        
        


    })
    data.save()
    res.send(data)

})

    

    module.exports=router;
