const Attribute = require("../models/attributeModel") // new

var fn = {};

fn.attributeGet = async function (req, res) {
    try {
        let objAttribute = await Attribute.find();
        res.send(objAttribute);
    } catch (e) {
        console.log("error attributeGet", e);
    }
}

fn.attributePost = async function (req, res) {
    try {
        let objReqBody = req.body;
        let objAttribute = new Attribute();
        let objAttributeSchema = Attribute.schema.obj;
        var stAscendingId;
        var arrAttribute = await Attribute.find().sort({ attributeid: 1 })

        for (var idx = 0; idx < arrAttribute.length; idx++) {
            stAscendingId = arrAttribute[idx].attributeid;
        }

        objAttributeSchema.brandid = (stAscendingId) ? stAscendingId + 1 : 0;
        for (var idx in objReqBody) {
            if (objAttributeSchema[idx]) {
                objAttribute[idx] = objReqBody[idx];
            }
        }

        await objAttribute.save()
        res.send(objAttribute)
    } catch (e) {
        console.log("error attributePost", e);
    }
}

fn.attributeUpdate = async function (req, res) {
    try {
        let objAttribute = await Attribute.findOneAndUpdate(req.params.id, req.body);
        res.send(objAttribute);
    } catch (e) {
        console.log("error attributeUpdate:", e);
    }
}

fn.attributeDelete = async function (req, res) {
    try {
        let objAttribute = await Attribute.deleteOne({ _id: req.params.id });
        res.send(objAttribute);
    } catch (e) {
        console.log("error attributeDelete", e)
    }
}

fn.attributeFindId = async function (req, res) {
    try {
        let stAttributeId = await Attribute.findById({ _id: req.params.id });
        res.send(stAttributeId);
    } catch (e) {
        console.log("error attributeFindId", e)
    }
}

module.exports = { fn: fn };