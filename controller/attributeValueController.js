
const AttributeValue = require("../models/attributeValueModel") // new

var fn = {};

fn.attributeValueGet = async function (req, res) {
    let objAttributeValue = await AttributeValue.find();
    res.send(objAttributeValue);
}

fn.attributeValuePost = async function (req, res) {
    console.log(req.body)
    var ascendingId;
    var arrAttributeValue = await AttributeValue.find().sort({ attributevalueid: 1 })
    console.log("asc", arrAttributeValue);
    for (var idx = 0; idx < arrAttributeValue.length; idx++) {
        ascendingId = arrAttributeValue[idx].attributevalueid;
    }
    console.log("ascendingId", ascendingId);
    let objAttributeValue = new AttributeValue({
        attributevalueid: (ascendingId) ? ascendingId + 1 : 0,
        attributevaluename: req.body.attributevaluename,
        isActive: req.body.isActive,
        createdby: req.body.createdby,
        updatedby: req.body.updatedby,
    })
    await objAttributeValue.save()
    res.send(objAttributeValue)
}

fn.attributeValueUpdate = async function (req, res){
    try{
        let objAttributeValue = await AttributeValue.findOneAndUpdate(req.params.id, req.body);
        res.send(objAttributeValue);
    }catch(e){
        console.log("error attributeValueUpdate:", e);
    }
}

fn.attributeValueDelete = async function (req, res){
    try{
       let objAttributeValue = await AttributeValue.deleteOne({_id: req.params.id});
       res.send(objAttributeValue);
    }catch(e){
        console.log("error attributeValueDelete", e)
    }
}

fn.attributeValueFindId = async function (req, res){
    try{
       let attributeValuedID = await AttributeValue.findById({_id : req.params.id});
       res.send(attributeValuedID);
    }catch(e){
        console.log("error attributeValueFindId", e)
    }
}

module.exports = { fn: fn };