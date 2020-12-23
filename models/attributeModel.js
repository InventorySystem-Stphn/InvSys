const mongoose = require("mongoose")

const schema = mongoose.Schema({
	attributeid: Number,
    attributename: String,
    attributevalue : String,
    isActive : Boolean,
	createdby: String,
	updatedby : String

})

module.exports = mongoose.model("attribute", schema)