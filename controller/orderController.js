const Order = require("../models/orderModel") // new

var fn = {};

fn.orderGet = async function (req, res) {
    try {
        let objOrder = await Order.find();
        res.send(objOrder);
    } catch (e) {
        console.log("error orderGet", e);
    }
}

fn.orderPost = async function (req, res) {
    try {
        console.log(req.body)
        var stAscendingId;
        var arrOrder = await Order.find().sort({ orderid: 1 })
        console.log("asc", arrOrder);
        for (var idx = 0; idx < arrOrder.length; idx++) {
            stAscendingId = arrOrder[idx].orderid;
        }
        console.log("stAscendingId", stAscendingId);
        let objOrder = new Order({
            orderid: (stAscendingId) ? stAscendingId + 1 : 0,
            customername: req.body.customername,
            customeraddress: req.body.customeraddress,
            customerphone: req.body.customerphone,
            qty: req.body.qty,
            rate: req.body.rate,
            grossamount: req.body.grossamount,
            vat: req.body.vat,
            discount: req.body.discount,
            isActive: req.body.isActive,
            createdby: req.body.createdby,
            updatedby: req.body.updatedby,
        })
        await objOrder.save()
        res.send(objOrder)
    } catch (e) {
        console.log("error orderPost", e);
    }
}

fn.orderUpdate = async function (req, res) {
    try {
        let objOrder = await Order.findOneAndUpdate(req.params.id, req.body);
        res.send(objOrder);
    } catch (e) {
        console.log("error orderUpdate:", e);
    }
}

fn.orderDelete = async function (req, res) {
    try {
        let objOrder = await Order.deleteOne({ _id: req.params.id });
        res.send(objOrder);
    } catch (e) {
        console.log("error orderDelete", e)
    }
}

fn.orderFindId = async function (req, res) {
    try {
        let stOrderId = await Order.findById({ _id: req.params.id });
        res.send(stOrderId);
    } catch (e) {
        console.log("error orderFindId", e)
    }
}

module.exports = { fn: fn };