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
        let objReqBody = req.body;
        let objOrder = new Order();
        let objOrderSchema = Order.schema.obj;
        var stAscendingId;
        var arrOrder = await Order.find().sort({ orderid: 1 })
        console.log("asc", arrOrder);
        for (var idx = 0; idx < arrOrder.length; idx++) {
            stAscendingId = arrOrder[idx].orderid;
        }
        objOrder.orderid = (stAscendingId) ? stAscendingId + 1 : 0;
        for(var idx in objReqBody){
            if(objOrderSchema[idx]){
                objOrder[idx] = objReqBody[idx];
            }
        }
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