const mongoose = require("mongoose")
let Float = require('mongoose-float').loadType(mongoose);

const schema = mongoose.Schema({
	productid: Number,
    productname: String,
    sku : String,
    price : {type : Float},
    qty : Number,
    description : String,
    color : String,
    size : String,
    brand : String,
    category: String,
    store : String,
    availability : String,
    isActive : Boolean,
	createdby: String,
	updatedby : String

})

module.exports = mongoose.model("product", schema)