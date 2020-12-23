const Company = require("../models/companyModel") // new

var fn = {};

fn.companyGet = async function (req, res) {
    try {
        let objCompany = await Company.find();
        res.send(objCompany);
    } catch (e) {
        console.log("error companyGet", e);
    }
}

fn.companyPost = async function (req, res) {
    try {
        console.log(req.body)
        var stAscendingId;
        var arrCompany = await Company.find().sort({ companyid: 1 })
        console.log("asc", arrCompany);
        for (var idx = 0; idx < arrCompany.length; idx++) {
            stAscendingId = arrCompany[idx].companyid;
        }
        console.log("stAscendingId", stAscendingId);
        let objCompany = new Company({
            companyid: (stAscendingId) ? stAscendingId + 1 : 0,
            companyname: req.body.groupname,
            chargeamount: req.body.chargeamount,
            chargepercentage: req.body.chargepercentage,
            address: req.body.address,
            phone: req.body.phone,
            country: req.body.country,
            message: req.body.message,
            currency: req.body.currency,
            isActive: req.body.isActive,
            createdby: req.body.createdby,
            updatedby: req.body.updatedby,
        })
        await objCompany.save()
        res.send(objCompany)
    } catch (e) {
        console.log("error companyPost", e);
    }
}

fn.companyUpdate = async function (req, res) {
    try {
        let objCompany = await Company.findOneAndUpdate(req.params.id, req.body);
        res.send(objCompany);
    } catch (e) {
        console.log("error companyUpdate:", e);
    }
}

fn.companyDelete = async function (req, res) {
    try {
        let objCompany = await Company.deleteOne({ _id: req.params.id });
        res.send(objCompany);
    } catch (e) {
        console.log("error companyDelete", e)
    }
}

fn.companyFindId = async function (req, res) {
    try {
        let stCompanyId = await Company.findById({ _id: req.params.id });
        res.send(stCompanyId);
    } catch (e) {
        console.log("error companyFindId", e)
    }
}

module.exports = { fn: fn };