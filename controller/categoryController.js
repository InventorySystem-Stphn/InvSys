const Category = require("../models/categoryModel") // new

var fn = {};

fn.categoryGet = async function (req, res) {
    try {
        let objCategory = await Category.find();
        res.send(objCategory);
    } catch (e) {
        console.log("error categoryGet", e);
    }
}

fn.categoryPost = async function (req, res) {
    try {
        console.log(req.body)
        var stAscendingId;
        var arrCategory = await Category.find().sort({ categoryid: 1 })
        console.log("asc", arrCategory);
        for (var idx = 0; idx < arrCategory.length; idx++) {
            stAscendingId = arrCategory[idx].categoryid;
        }
        console.log("stAscendingId", stAscendingId);
        let category = new Category({
            categoryid: (stAscendingId) ? stAscendingId + 1 : 0,
            categoryname: req.body.categoryname,
            isActive: req.body.isActive,
            createdby: req.body.createdby,
            updatedby: req.body.updatedby,
        })
        await category.save()
        res.send(category)
    } catch (e) {
        console.log("error categoryPost", e);
    }
}

fn.categoryUpdate = async function (req, res) {
    try {
        let objCategory = await Category.findOneAndUpdate(req.params.id, req.body);
        res.send(objCategory);
    } catch (e) {
        console.log("error categoryUpdate:", e);
    }
}

fn.categoryDelete = async function (req, res) {
    try {
        let objCategory = await Category.deleteOne({ _id: req.params.id });
        res.send(objCategory);
    } catch (e) {
        console.log("error categoryDelete", e)
    }
}

fn.categoryFindId = async function (req, res) {
    try {
        let stCategoryId = await Category.findById({ _id: req.params.id });
        res.send(stCategoryId);
    } catch (e) {
        console.log("error categoryFindId", e)
    }
}

module.exports = { fn: fn };