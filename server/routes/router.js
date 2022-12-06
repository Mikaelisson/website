const express = require("express");
const router = express.Router();
const constroller = require("../controllers/controller");

router.get("/api/search/projects", constroller.searchProject);

module.exports = router;
