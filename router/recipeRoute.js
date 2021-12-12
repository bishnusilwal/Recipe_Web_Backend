const express= require("express");
const router = new express.Router();

const Res = require("../models/Recipes")

router.post("/recipes", function(req,res){
    const name = req.body.name;
    const description = req.body.description;
    const coving = req.body.coving;
    const img = req.body.img;
    const pretime = req.body.pretime;
    const cooktime = req.body.pretime;
    const totaltime = req.body.totaltime;
    const yield = req.body.yield;
    const category = req.body.category;

    const data = new Res({
        name : name,
        description : description,
        coving : coving,
        img : img,
        pretime : pretime,
        cooktime : cooktime,
        totaltime : totaltime,
        yield : yield,
        category : category

        


    })
    data.save()
    res.send(data)

})

    

    module.exports=router;
