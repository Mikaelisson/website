const express = require("express");
const router = express.Router();
const constroller = require("../controllers/controller");

router.use(express.urlencoded({ extended: true }));

router.get("/", constroller.searchProject);

router.post("/add", constroller.addProject);
router.post("/edit/:id", constroller.editProject);

router.delete("/:id", constroller.deleteProject);

module.exports = router;
