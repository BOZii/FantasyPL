// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var playerSchema = mongoose.Schema({

    Team             : String,
    Name            : String,
    Position         : String,
    Price            : String
    /*
    local            : {
        email        : String,
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    courses          : [{ courseId    :   String}]*/
});

// methods ======================


// create the model for users and expose it to our app
module.exports = mongoose.model('Player', playerSchema);