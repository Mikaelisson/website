const express = require("express");
const router = express.Router();
const constroller = require("../controllers/controller");

router.use(express.urlencoded({ extended: true }));

router.get("/", constroller.home);

router.post("/add", constroller.add);
router.post("/edit/:id", constroller.edit);

module.exports = router;
