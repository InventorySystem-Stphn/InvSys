const express = require("express")
const attributeController = require("../controller/attributeController")
const router = express.Router()

// Get all users
router.get("/get", attributeController.fn.attributeGet)
router.post("/post", attributeController.fn.attributePost)
router.put("/:id/update", attributeController.fn.attributeUpdate)
router.delete("/:id/delete", attributeController.fn.attributeDelete)
router.get("/:id", attributeController.fn.attributeFindId)

module.exports = router