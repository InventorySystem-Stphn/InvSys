
const User = require("../models/userModels") // new

var fn = {};

fn.userGet = async function(req, res){
    const users = await User.find();
    res.send(users);
}

fn.userPost = async function(req, res){
	console.log(req.body)
	const user = new User({
		firstName: req.body.firstName,
		middleName: req.body.middleName,
		lastName: req.body.lastName,
		address: req.body.address,
		email: req.body.email,
	})
	await user.save()
	res.send(user)
}


module.exports = {fn : fn};