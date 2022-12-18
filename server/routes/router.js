const express = require("express");
const router = express.Router();
const constroller = require("../controllers/controller");
const constrollerUser = require("../controllers/controllerUser");
// const loginController = require("../controllers/loginController");

router.use(express.urlencoded({ extended: true }));

router.get("/search/projects", constroller.searchProject);

// router.post("/login", loginController);
router.post("/logout", constrollerUser.logoutUser);

module.exports = router;
