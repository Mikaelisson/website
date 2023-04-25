const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { addUserValidate, editUserValidate } = require("./validate");
const controller = require("./controller");

const dashboard = async (req, res) => {
  try {
    //getting token
    const token = res.get("authorization-token");

    //search user and save token
    const user = await User.findOne({ email: req.body.email });
    await User.findByIdAndUpdate(user.id, { token });

    res.json(token);
  } catch (error) {
    res.status(404).send("Dashboard error => " + error.message);
  }
};

const queryUsers = async (req, res) => {
  try {
    const doc = await User.find({}, ["name", "email"]);
    res.json(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

const addUser = async (req, res) => {
  const { error } = addUserValidate(req.body);
  if (error) res.status(404).send(`Error JOI ==> ${error.message}`);

  const password = bcrypt.hashSync(req.body.passwordInput, 10);

  const data = new User({
    name: req.body.nameInput,
    email: req.body.emailInput,
    password,
    date: new Date(),
    lastChange: new Date(),
  });

  try {
    await controller.validateToken(req.body.email);

    const verifyUserExist = await User.findOne({ email: req.body.emailInput });
    if (verifyUserExist) res.status(404).send("Usuário ou senha inválidos");

    await data.save();
    res.json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    res.status(404).send(error);
  }
};

const editUser = async (req, res) => {
  const { error } = editUserValidate(req.body);
  if (error) res.status(404).send(`Error JOI ==> ${error.message}`);

  let id = req.params.id;

  const user = {
    name: req.body.nameInput,
    email: req.body.emailInput,
    lastChange: new Date(),
  };

  try {
    await controller.validateToken(req.body.email);

    await User.findByIdAndUpdate(id, user);
    await User.findById(id);

    res.json({ message: "Usuário editado com sucesso!" });
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteUser = async (req, res) => {
  let id = req.params.id;

  try {
    await controller.validateToken(req.body.email);
    const doc = await User.findByIdAndDelete(id);
    console.log("Usuário deletado com sucesso!");
    res.send(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

//validate token
const validateToken = async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.email }, "-password");
    jwt.verify(data.token, process.env.TOKEN_SECRET);

    //return json with token and name
    const doc = {
      token: data.token,
      name: data.name,
    };

    res.json(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  dashboard,
  addUser,
  editUser,
  deleteUser,
  validateToken,
  queryUsers,
};
