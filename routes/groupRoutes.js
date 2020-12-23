const express = require("express")
const groupController = require("../controller/groupController")
const router = express.Router()

// Get all group
router.get("/get", groupController.fn.groupGet)
router.post("/post", groupController.fn.groupPost)
router.put("/:id/update", groupController.fn.groupUpdate)
router.delete("/:id/delete", groupController.fn.groupDelete)
router.get("/:id", groupController.fn.groupFindId)

module.exports = router