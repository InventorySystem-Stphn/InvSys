const mongoose = require("mongoose")
let Float = require('mongoose-float').loadType(mongoose);

const schema = mongoose.Schema({
	profileid: Number,
    username: String,
    email : String,
    firstname : String,
    lastname : String,
    gender : String,
    group : String,
    isActive : Boolean,
	createdby: String,
	updatedby : String

})

module.exports = mongoose.model("profile", schema)