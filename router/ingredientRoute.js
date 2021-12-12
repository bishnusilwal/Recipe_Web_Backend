const express= require("express");
const router = new express.Router();

const Ing = require("../models/ingredient")

router.post("/ingredients", function(req,res){
    const name = req.body.name;
    const quality = req.body.quality;

    const data = new Ing({
        name : name,
        name : name
        
        


    })
    data.save()
    res.send(data)

})

    

    module.exports=router;
