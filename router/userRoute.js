
const express= require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = new express.Router();

const user = require("../models/usermodel")
router.post("/user/register",function(req,res){
    const username =req.body.username;
    user.findOne({username : username}) 
    .then(function(userData){
        if (userData!=null){
            res.json({message: "User already Exists!"});
            return;
        }
        //now this place is for the user which is not available in db
        const password = req.body.password;
        const fullname = req.body.fullname;
        const email = req.body.email;
        const phone = req.body.phone;
        const location = req.body.location;
        const bio = req.body.bio;
        const img = req.body.img;
        bcryptjs.hash(password,10,function(e,hashed_value){
            const data = new user({
                username : username,
                password: hashed_value,
                fullname : fullname,
                email : email,

                phone : phone,
                location : location,
                bio : bio,
                img : img,
                


            })
            data.save()
            .then(function(){
                res.json({message: "Registered Success"});
            })
            .catch(function(e){
                res.json(e)
            })
            

        })


    })

})

// login route for user

router.post("/user/login", function(req,res){
    const username = req.body.username;
    user.findOne({username: username})
    .then(function(userData){
        if(userData===null){
            return res.json({message: "invalid login password"})

        }
        //here the code goes for comparing pws
        //console.log(userData);//userData.phone(only phone excess)
        const password = req.body.password;
        bcryptjs.compare(password,userData.password, function(e,result){
            //console.log(result);
            if(result===false){
                return res.json({message :"invalid"})
            }
            // now lest generate token
            // jsonwebtoken 

            const token = jwt.sign({usstId:userData._id},"anykey");
            res.json({token:token,message: "success"})


        

        })


       

    })


    
})





// // get all recipe
// router.get("/", function(req,res){
//     const recipes = require("../models/Recipes");
//     res.send(recipes);
   
// })

// // get one recipe
// router.get("/:id", function(req,res){
   
// })

// // post recipe
// router.post("/", function(req,res){
   
// })

// // update recipe
// router.put("/:id", function(req,res){
   
// })
// // delete recipe
// router.delete("/:id", function(req,res){
   
// })

module.exports=router;