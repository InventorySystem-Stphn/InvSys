const express = require("express")
const userController = require("../controller/userController")
const router = express.Router()

// Get all users
router.get("/get", userController.fn.userGet)
router.post("/post", userController.fn.userPost)
router.post("/login", userController.fn.userLogin)

module.exports = router