const Profile = require("../models/profileModel") // new

var fn = {};

fn.profileGet = async function (req, res) {
    try {
        let objProfile = await Profile.find();
        res.send(objProfile);
    } catch (e) {
        console.log("error profileGet", e);
    }
}

fn.profilePost = async function (req, res) {
    try {
        console.log(req.body)
        var stAscendingId;
        var arrProfile = await Profile.find().sort({ profileid: 1 })
        console.log("asc", arrProfile);
        for (var idx = 0; idx < arrProfile.length; idx++) {
            stAscendingId = arrCarrProfileompany[idx].profileid;
        }
        console.log("stAscendingId", stAscendingId);
        let objProfile = new Profile({
            profileid: (stAscendingId) ? stAscendingId + 1 : 0,
            username: req.body.username,
            email: req.body.email,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            group: req.body.group,
            isActive: req.body.isActive,
            createdby: req.body.createdby,
            updatedby: req.body.updatedby,
        })
        await objProfile.save()
        res.send(objProfile)
    } catch (e) {
        console.log("error profilePost", e);
    }
}

fn.profileUpdate = async function (req, res) {
    try {
        let objProfile = await Profile.findOneAndUpdate(req.params.id, req.body);
        res.send(objProfile);
    } catch (e) {
        console.log("error profileUpdate:", e);
    }
}

fn.profileDelete = async function (req, res) {
    try {
        let objProfile = await Profile.deleteOne({ _id: req.params.id });
        res.send(objProfile);
    } catch (e) {
        console.log("error profileDelete", e)
    }
}

fn.profileFindId = async function (req, res) {
    try {
        let stProfileId = await Profile.findById({ _id: req.params.id });
        res.send(stProfileId);
    } catch (e) {
        console.log("error profileFindId", e)
    }
}

module.exports = { fn: fn };