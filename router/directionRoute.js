const express= require("express");
const router = new express.Router();

const dir = require("../models/direction")

router.post("/descriptions", function(req,res){
    const step = req.body.step;
    const discription = req.body.discription;

    const data = new dir({
        step : step,
        discription : discription
        
        


    })
    data.save()
    res.send(data)

})

    

    module.exports=router;
