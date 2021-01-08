const mongodb = require('mongoose')

const UserDB = new mongodb.Schema({
    nama: {
        type :String,
        require : [true, "masukkan nama anda"],
        unique : true
    
    }, email : {
        type :String
    
    },  phone : {
        type : Number,
        default : 15,

    }, address : {
        type : String
    }, image : {
        type : File
    }

});

const Users = mongodb.model('users',UserDB);

module.exports = Users;