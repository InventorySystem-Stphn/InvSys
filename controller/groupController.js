const Group = require("../models/groupModel") // new

var fn = {};

fn.groupGet = async function (req, res) {
    try {
        let objGroup = await Group.find();
        res.send(objGroup);
    } catch (e) {
        console.log("error groupGet", e);
    }
}

fn.groupPost = async function (req, res) {
    try {
        console.log(req.body)
        var stAscendingId;
        var arrGroup = await Group.find().sort({ groupid: 1 })
        console.log("asc", arrGroup);
        for (var idx = 0; idx < arrGroup.length; idx++) {
            stAscendingId = arrGroup[idx].groupid;
        }
        console.log("stAscendingId", stAscendingId);
        let group = new Group({
            groupid: (stAscendingId) ? stAscendingId + 1 : 0,
            groupname: req.body.groupname,
            isActive: req.body.isActive,
            createdby: req.body.createdby,
            updatedby: req.body.updatedby,
        })
        await group.save()
        res.send(group)
    } catch (e) {
        console.log("error groupPost", e);
    }
}

fn.groupUpdate = async function (req, res) {
    try {
        let objGroup = await Group.findOneAndUpdate(req.params.id, req.body);
        res.send(objGroup);
    } catch (e) {
        console.log("error groupUpdate:", e);
    }
}

fn.groupDelete = async function (req, res) {
    try {
        let objGroup = await Group.deleteOne({ _id: req.params.id });
        res.send(objGroup);
    } catch (e) {
        console.log("error groupDelete", e)
    }
}

fn.groupFindId = async function (req, res) {
    try {
        let stGroupId = await Group.findById({ _id: req.params.id });
        res.send(stGroupId);
    } catch (e) {
        console.log("error groupFindId", e)
    }
}

module.exports = { fn: fn };