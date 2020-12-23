const express = require("express")
const categoryController = require("../controller/categoryController")
const router = express.Router()

// Get all group
router.get("/get", categoryController.fn.categoryGet)
router.post("/post", categoryController.fn.categoryPost)
router.put("/:id/update", categoryController.fn.categoryUpdate)
router.delete("/:id/delete", categoryController.fn.categoryDelete)
router.get("/:id", categoryController.fn.categoryFindId)

module.exports = router