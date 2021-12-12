const mongoose = require("mongoose");


const ingredients = mongoose.model('ingredients', {

    name : {

        type : String

    },
    quality : {

        type : String

    },
    

   
    
    
    
})
module.exports=ingredients;