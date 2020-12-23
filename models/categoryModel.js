const mongoose = require("mongoose")

const schema = mongoose.Schema({
	categoryid: Number,
    categoryname: String,
    isActive : Boolean,
	createdby: String,
	updatedby : String

})

module.exports = mongoose.model("category", schema)