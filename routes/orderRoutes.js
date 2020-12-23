const express = require("express")
const orderController = require("../controller/orderController")
const router = express.Router()

// Get all product
router.get("/get", orderController.fn.orderGet)
router.post("/post", orderController.fn.orderPost)
router.put("/:id/update", orderController.fn.orderUpdate)
router.delete("/:id/delete", orderController.fn.orderDelete)
router.get("/:id", orderController.fn.orderFindId)

module.exports = router 