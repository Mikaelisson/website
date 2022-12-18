const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { addUserValidate, editUserValidate } = require("./validate");

const admin = async (req, res) => {
  try {
    res.send();
  } catch (error) {
    res.status(404).send(error);
  }
};

const dashboard = (req, res) => {
  try {
    const token = res.get("authorization-token");
    res.json({ token });
  } catch (error) {
    res.status(404).send("Dashboard error => " + error.message);
  }
};

const logoutUser = async (req, res) => {
  if (req.session) req.session = null;
  else res.status(404).send("Nenhum usuário conectado");

  try {
    res.send("Usuário desconectado com sucesso!");
  } catch (error) {
    res.status(404).send(error);
  }
};

const addUser = async (req, res) => {
  const { error } = addUserValidate(req.body);
  if (error) res.status(404).send(`Error JOI ==> ${error.message}`);

  const password = bcrypt.hashSync(req.body.password, 10);

  const data = new User({
    name: req.body.name,
    email: req.body.email,
    password,
    date: new Date(),
    lastChange: new Date(),
  });

  try {
    const doc = await data.save();
    console.log("Usuário cadastrado com sucesso!");
    res.send(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

const editUser = async (req, res) => {
  const { error } = editUserValidate(req.body);
  if (error) res.status(404).send(`Error JOI ==> ${error.message}`);

  let id = req.params.id;

  const user = {
    name: req.body.name,
    email: req.body.email,
    lastChange: new Date(),
  };

  try {
    await User.findByIdAndUpdate(id, user);
    const doc = await User.findById(id);
    console.log("Usuário editado com sucesso!");
    res.send(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteUser = async (req, res) => {
  let id = req.params.id;

  try {
    const doc = await User.findByIdAndDelete(id);
    console.log("Usuário deletado com sucesso!");
    res.send(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  admin,
  dashboard,
  addUser,
  editUser,
  deleteUser,
  logoutUser,
};
