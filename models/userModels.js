const mongoose = require("mongoose")

const schema = mongoose.Schema({
	firstName: String,
	middleName: String,
	lastName: String,
	address: String,
	email : String

})

module.exports = mongoose.model("users", schema)