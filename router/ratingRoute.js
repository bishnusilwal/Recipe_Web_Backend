const express= require("express");
const router = new express.Router();

const Rat = require("../models/rating")

router.post("/rating", function(req,res){
    const username = req.body.username;
    const time = req.body.time;
    const rating = req.body.rating;

    const data = new Rat({
        username : username,
        time : time,
        rating : rating
        
        


    })
    data.save()
    res.send(data)

})

    

    module.exports=router;
