const express = require("express");
const router = express.Router();
const constroller = require("../controllers/controller");
const constrollerUsers = require("../controllers/controllerUser");

router.use(express.urlencoded({ extended: true }));

router.get("/", constrollerUsers.admin);

//routes user
router.post("/add/user", constrollerUsers.addUser);
router.post("/edit/user/:id", constrollerUsers.editUser);

router.delete("/delete/user/:id", constrollerUsers.deleteUser);

//routes project
router.post("/add/project", constroller.addProject);
router.post("/edit/project/:id", constroller.editProject);

router.delete("/delete/project/:id", constroller.deleteProject);

module.exports = router;
