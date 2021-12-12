const mongoose = require("mongoose");


const Rating = mongoose.model('rating', {

    username : {

        type : String

    },

    time : {

        type : String//date

    },

    rating : {

        type:  String// mongoose.Mixed

    }



})
module.exports=Rating;