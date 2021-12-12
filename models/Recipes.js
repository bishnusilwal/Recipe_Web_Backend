 


const mongoose = require("mongoose");



const recipes = mongoose.model('Recipe', {

    name : {

        type : String

    },

    description : {

        type : String

    },
    covimg:
    {
        type: String
        // data: Buffer,
        // contentType: String
    },

    img:
    {
        // data: Buffer,
        // contentType: String
        type:String
    },

    pretime : {

        type : String//Date

    },

    cooktime : {

        type : String//date

    },
    totaltime : {

        type :  String//date

    },
    yield : {

        type : String

    },

    category : {

        type : String

    },
}
)
module.exports=recipes;
    








