const express = require("express");
const router = express.Router();
const pinataController = require("../controllers/pinataController");

router.post("/add", pinataController.add);
router.get("/get", pinataController.get);
router.get("/getall",pinataController.getAll);

module.exports = router;
