const mongoose = require("mongoose");


const Review = mongoose.model('review', {

    username : {

        type : String

    },

    time : {

        type :  String//date

    },

    review : {

        type: String

    }



})
module.exports=Review;
