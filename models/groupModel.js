const mongoose = require("mongoose")

const schema = mongoose.Schema({
	groupid: Number,
    groupname: String,
    isActive : Boolean,
	createdby: String,
	updatedby : String

})

module.exports = mongoose.model("group", schema)