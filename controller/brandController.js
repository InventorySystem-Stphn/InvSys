
const Brand = require("../models/brandModel") // new

var fn = {};


fn.brandGet = async function (req, res) {
    let objBrand = await Brand.find();
    res.header("Access-Control-Allow-Origin", "*");
    res.send(objBrand);
}

fn.brandPost = async function (req, res) {

    let objReqBody = req.body;
    let objBrand = new Brand();
    let objBrandSchema = Brand.schema.obj;
    let ascendingId;
    let arrBrand = await Brand.find().sort({ brandid: 1 })
    for (var idx = 0; idx < arrBrand.length; idx++) {
        ascendingId = arrBrand[idx].brandid;
    }

    objBrand.brandid = (ascendingId) ? ascendingId + 1 : 0;
    for (var idx in objReqBody) {
        if (objBrandSchema[idx]) {
            objBrand[idx] = objReqBody[idx];
        }
    }
    await objBrand.save()
    res.send(objBrand)
}

fn.brandUpdate = async function (req, res) {
    try {
        let objBrand = await Brand.findOneAndUpdate(req.params.id, req.body);
        res.send(objBrand);
    } catch (e) {
        console.log("error brandUpdate:", e);
    }
}

fn.brandDelete = async function (req, res) {
    try {
        let brand = await Brand.deleteOne({ _id: req.params.id });
        res.send(brand);
    } catch (e) {
        console.log("error brandDelete", e)
    }
}

fn.brandFindId = async function (req, res) {
    try {
        let brandID = await Brand.findById({ _id: req.params.id });
        res.send(brandID);
    } catch (e) {
        console.log("error brandFindId", e)
    }
}

module.exports = { fn: fn };