const express = require("express");
const auth = require("../controllers/authController");
const router = express.Router();
const constroller = require("../controllers/controller");
const constrollerUsers = require("../controllers/controllerUser");
const loginController = require("../controllers/loginController");
const multer = require("multer");
const multerConfig = require("../controllers/multerConfig");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/users", constrollerUsers.queryUsers);

//routes auth
router.post("/auth", loginController, auth, constrollerUsers.dashboard);
router.post("/auth/token", constrollerUsers.validateToken);

//routes user
router.post("/add/user", constrollerUsers.addUser);
router.post("/edit/user/:id", constrollerUsers.editUser);

router.delete("/delete/user/:id", constrollerUsers.deleteUser);

//routes project
router.post(
  "/add/project",
  multer(multerConfig).single("image"),
  constroller.addProject
);

//edit project
router.post("/edit/project/:id", constroller.editProject);

//edit project image
router.post(
  "/edit/project/image/:id",
  multer(multerConfig).single("image"),
  constroller.editProjectImage
);

//delete project
router.delete("/delete/project/:id", constroller.deleteProject);

module.exports = router;
