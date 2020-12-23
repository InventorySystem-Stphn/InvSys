const express = require("express")
const attributeValueController = require("../controller/attributeValueController")
const router = express.Router()

// Get all users
router.get("/get", attributeValueController.fn.attributeValueGet)
router.post("/post", attributeValueController.fn.attributeValuePost)
router.put("/:id/update", attributeValueController.fn.attributeValueUpdate)
router.delete("/:id/delete", attributeValueController.fn.attributeValueDelete)
router.get("/:id", attributeValueController.fn.attributeValueFindId)

module.exports = router