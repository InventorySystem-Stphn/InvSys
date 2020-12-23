const express = require("express")
const brandController = require("../controller/brandController")
const router = express.Router()

// Get all users
router.get("/get", brandController.fn.brandGet)
router.post("/post", brandController.fn.brandPost)
router.put("/:id/update", brandController.fn.brandUpdate)
router.delete("/:id/delete", brandController.fn.brandDelete)
router.get("/:id", brandController.fn.brandFindId)

module.exports = router