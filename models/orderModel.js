const mongoose = require("mongoose")
let Float = require('mongoose-float').loadType(mongoose);

const schema = mongoose.Schema({
	orderid: Number,
    customername: String,
    customeraddress : String,
    customerphone : String,
    qty : Number,
    rate : {type : Float},
    amount : {type : Float},
    grossamount : {type : Float},
    vat : {type : Float},
    discount : {type : Float},
    isActive : Boolean,
	createdby: String,
	updatedby : String

})

module.exports = mongoose.model("order", schema)