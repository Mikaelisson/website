const express = require("express");
const router = express.Router();
const constroller = require("../controllers/controller");

router.use(express.urlencoded({ extended: true }));

router.get("/", constroller.admin);

router.post("/add/project", constroller.addProject);
router.post("/add/user", constroller.addUser);
router.post("/edit/user/:id", constroller.editUser);
router.post("/edit/project/:id", constroller.editProject);

router.delete("/:id", constroller.deleteProject);

module.exports = router;
