const mongoose = require("mongoose")

const schema = mongoose.Schema({
	brandid: Number,
    brandname: String,
    isActive : Boolean,
	createdby: String,
	updatedby : String

})

module.exports = mongoose.model("brand", schema)