const express = require("express")
const brandController = require("../controller/brandController")
const router = express.Router()

// Get all users
router.get("/get", brandController.fn.brandGet)
router.post("/post", brandController.fn.brandPost)

module.exports = router