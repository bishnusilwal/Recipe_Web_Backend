const mongoose = require("mongoose");

const direction = mongoose.model('direction', {

    step : {

        type : String

    },
    discription : {

        type : String

    },

    
})
module.exports=direction;
