const mongoose = require("mongoose")

const schema = mongoose.Schema({
	attributevalueid: Number,
    attributevaluename: String,
    isActive : Boolean,
	createdby: String,
	updatedby : String

})

module.exports = mongoose.model("attributeValue", schema)