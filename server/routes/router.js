const express = require("express");
const router = express.Router();
const constroller = require("../controllers/controller");
const constrollerUser = require("../controllers/controllerUser");

router.use(express.urlencoded({ extended: true }));

router.get("/search/projects", constroller.searchProject);

router.post("/login", constrollerUser.loginUser);

module.exports = router;
