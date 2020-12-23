const mongoose = require("mongoose")
let Float = require('mongoose-float').loadType(mongoose);

const schema = mongoose.Schema({
	companyid: Number,
    companyname: String,
    chargeamount : {type: Float},
    chargepercentage : {type: Float},
    address : String,
    phone : String,
    country : String,
    message : String,
    currency : String,
    isActive : Boolean,
	createdby: String,
	updatedby : String

})

module.exports = mongoose.model("company", schema)