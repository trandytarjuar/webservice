const mongodb = require('mongoose')

const CustomerDB = new mongodb.Schema({
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
    }

});

const Customer = mongodb.model('users',CustomerDB);

module.exports = Customer;