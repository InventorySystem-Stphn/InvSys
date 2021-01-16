
const User = require("../models/userModels") // new
const bcrypt = require('bcrypt');
const { restart } = require("nodemon");
var fn = {};

fn.userGet = async function (req, res) {
	const users = await User.find();
	res.send(users);
}

fn.userPost = async function (req, res) {
	try {
		console.log(req.body)
		const hashedPassword = await bcrypt.hash(req.body.password, 10)
		console.log(hashedPassword)
		const user = new User({
			firstName: req.body.firstName,
			middleName: req.body.middleName,
			lastName: req.body.lastName,
			address: req.body.address,
			email: req.body.email,
			password: hashedPassword
		})
		await user.save()
		res.send(user)
	}
	catch (e) {
		res.status(500).send()
	}
}

fn.userLogin = async function (req, res) {

	const user = await User.find({ firstName: req.body.firstName });
	let userObj = {};
	for (let idx = 0; idx < user.length; idx++) {
		userObj = user[idx];
	}
	console.log("user", userObj)
	if (userObj == null) {
		return res.status(400).send('Cannot find user')
	}

	try {
		if (await bcrypt.compare(req.body.password, userObj.password)) {
			res.send('Success')
		} else {
			res.send('Not Allowed')
		}
	} catch {
		res.status(500).send()
	}

}


module.exports = { fn: fn };