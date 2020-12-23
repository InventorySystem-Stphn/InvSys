const express = require("express")
const productController = require("../controller/productController")
const router = express.Router()

// Get all product
router.get("/get", productController.fn.productGet)
router.post("/post", productController.fn.productPost)
router.put("/:id/update", productController.fn.productUpdate)
router.delete("/:id/delete", productController.fn.productDelete)
router.get("/:id", productController.fn.productFindId)

module.exports = router