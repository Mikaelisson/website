const express = require("express");
const router = express.Router();
const constroller = require("../controllers/controller");

router.use(express.urlencoded({ extended: true }));

router.get("/search/projects", constroller.searchProject);

module.exports = router;
