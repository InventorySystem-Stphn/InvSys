const express = require("express")
const companyController = require("../controller/companyController")
const router = express.Router()

// Get all group
router.get("/get", companyController.fn.companyGet)
router.post("/post", companyController.fn.companyPost)
router.put("/:id/update", companyController.fn.companyUpdate)
router.delete("/:id/delete", companyController.fn.companyDelete)
router.get("/:id", companyController.fn.companyFindId)

module.exports = router