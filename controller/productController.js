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
        console.log(req.body)
        var stAscendingId;
        var arrProduct = await Product.find().sort({ productid: 1 })
        console.log("asc", arrProduct);
        for (var idx = 0; idx < arrProduct.length; idx++) {
            stAscendingId = arrProduct[idx].productid;
        }
        console.log("stAscendingId", stAscendingId);
        let objProduct = new Product({
            productid: (stAscendingId) ? stAscendingId + 1 : 0,
            productname: req.body.productname,
            sku: req.body.sku,
            price: req.body.price,
            qty: req.body.qty,
            description: req.body.description,
            color: req.body.color,
            size: req.body.size,
            brand: req.body.brand,
            category: req.body.category,
            store: req.body.store,
            availability: req.body.availability,
            isActive: req.body.isActive,
            createdby: req.body.createdby,
            updatedby: req.body.updatedby,
        })
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