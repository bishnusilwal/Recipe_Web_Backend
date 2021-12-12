
const mongoose = require("mongoose");



const user = mongoose.model('User', {

    username : {

        type : String

    },

    password : {

        type : String

    },
    fullName : {

        type : String

    },
    email : {

        type : String

    },

    phone : {

        type : String

    },
    
    location : {

        type : String

    },
    bio : {

        type : String

    },
    img:
    {
        type: String
        // data: Buffer,
        // contentType: String
    }
    

})

module.exports=user;



