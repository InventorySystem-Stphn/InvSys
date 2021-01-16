const Product = require("../models/productModel") // new

var fn = {};

fn.productGet = async function (req, res) {
    try {
        let objProduct = await Product.find();
        res.send(objProduct);
    } catch (e) {
        console.log("error productGet", e);
    }
}

fn.productPost = async function (req, res) {
    try {
        let objReqBody = req.body;
        let objProduct = new Product();
        let objProductSchema = Product.schema.obj;
        var stAscendingId;
        var arrProduct = await Product.find().sort({ productid: 1 })
        console.log("asc", arrProduct);
        for (var idx = 0; idx < arrProduct.length; idx++) {
            stAscendingId = arrProduct[idx].productid;
        }
        console.log("stAscendingId", stAscendingId);
        objProduct.productid = (stAscendingId) ? stAscendingId + 1 : 0;
        for(var idx in objReqBody){
            if(objProductSchema[idx]){
                objProduct[idx] = objReqBody[idx];
            }
        }
        await objProduct.save()
        res.send(objProduct)
    } catch (e) {
        console.log("error productPost", e);
    }
}

fn.productUpdate = async function (req, res) {
    try {
        let objProduct = await Product.findOneAndUpdate(req.params.id, req.body);
        res.send(objProduct);
    } catch (e) {
        console.log("error productUpdate:", e);
    }
}

fn.productDelete = async function (req, res) {
    try {
        let objProduct = await Product.deleteOne({ _id: req.params.id });
        res.send(objProduct);
    } catch (e) {
        console.log("error productDelete", e)
    }
}

fn.productFindId = async function (req, res) {
    try {
        let stProductId = await Product.findById({ _id: req.params.id });
        res.send(stProductId);
    } catch (e) {
        console.log("error productFindId", e)
    }
}

module.exports = { fn: fn };