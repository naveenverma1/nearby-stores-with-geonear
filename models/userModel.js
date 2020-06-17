const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  //  _id: mongoose.Schema.Types.ObjectId,
    userName: {
        type :String,
        required : true,
        unique: true,
		trim: true
    },
    email: {
        type: String,
       required : true
       
    },
    password : {
        type : String,
        required : true  
    },
    address:{
        type :String,
        requires : true
    }
    ,
    location: {
		type: { type: String, default: "Point" },
		coordinates: { type: [Number], default: [0, 0] }
	}
     //or later we can use
    // address: {
    //     city: String,
    //     street: String,
    //     houseNumber: String
    // }
   
    // phonenumber:{
    //     type : String,
    //     match: /^[0-9]{10}$/   
    // },
   , date : {
        type : Date,
        default :Date.now
    }
})
module.exports = mongoose.model('user',userSchema);