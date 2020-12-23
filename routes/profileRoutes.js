const express = require("express")
const profileController = require("../controller/profileController")
const router = express.Router()

// Get all product
router.get("/get", profileController.fn.profileGet)
router.post("/post", profileController.fn.profilePost)
router.put("/:id/update", profileController.fn.profileUpdate)
router.delete("/:id/delete", profileController.fn.profileDelete)
router.get("/:id", profileController.fn.profileFindId)

module.exports = router 