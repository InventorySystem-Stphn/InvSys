
const Brand = require("../models/brandModel") // new

var fn = {};

fn.brandGet = async function (req, res) {
    let objBrand = await Brand.find();
    res.send(objBrand);
}

fn.brandPost = async function (req, res) {
    console.log(req.body)
    var ascendingId;
    var arrBrand = await Brand.find().sort({ brandid: 1 })
    console.log("asc", arrBrand);
    for (var idx = 0; idx < arrBrand.length; idx++) {
        ascendingId = arrBrand[idx].brandid;
    }
    console.log("ascendingId", ascendingId);
    let objBrand = new Brand({
        brandid: (ascendingId) ? ascendingId + 1 : 0,
        brandname: req.body.brandname,
        isActive: req.body.isActive,
        createdby: req.body.createdby,
        updatedby: req.body.updatedby,
    })
    await objBrand.save()
    res.send(objBrand)
}

fn.brandUpdate = async function (req, res){
    try{
        let objBrand = await Brand.findOneAndUpdate(req.params.id, req.body);
        res.send(objBrand);
    }catch(e){
        console.log("error brandUpdate:", e);
    }
}

fn.brandDelete = async function (req, res){
    try{
       let brand = await Brand.deleteOne({_id: req.params.id});
       res.send(brand);
    }catch(e){
        console.log("error brandDelete", e)
    }
}

fn.brandFindId = async function (req, res){
    try{
       let brandID = await Brand.findById({_id : req.params.id});
       res.send(brandID);
    }catch(e){
        console.log("error brandFindId", e)
    }
}

module.exports = { fn: fn };