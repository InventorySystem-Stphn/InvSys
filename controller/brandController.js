
const Brand = require("../models/brandModel") // new

var fn = {};

fn.brandGet = async function(req, res){
    const brand = await Brand.find();
    res.send(brand);
}

fn.brandPost = async function(req, res){
    console.log(req.body)
    var ascendingId;
    var arrBrand = await Brand.find().sort({brandid:1})
    console.log("asc",arrBrand);
    for(var idx = 0; idx < arrBrand.length; idx++){
        ascendingId = arrBrand[idx].brandid;
    }
    console.log("ascendingId",ascendingId);

	const brand = new Brand({
        brandid : (ascendingId) ? ascendingId + 1 : 0,
		brandname: req.body.brandname,
		isActive: req.body.isActive,
		createdby: req.body.createdby,
		updatedby: req.body.updatedby,
	})
	await brand.save()
	res.send(brand)
}


module.exports = {fn : fn};