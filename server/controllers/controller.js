const { deleteImage } = require("../firebase/firebaseConfig");
const Project = require("../models/Project");
const { addProjectValidate, editProjectValidate } = require("./validate");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const searchProject = async (req, res) => {
  try {
    const doc = await Project.find({});
    res.send(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

const validateToken = async (email) => {
  const validate = await User.findOne({ email }, "-password");
  const token = jwt.verify(validate.token, process.env.TOKEN_SECRET);
  return token;
};

const addProject = async (req, res) => {
  const { error } = addProjectValidate(req.body);
  if (error) {
    res.status(404).send(`Error JOI ==> ${error.message}`);
    deleteImage(req);
  }

  const data = new Project({
    title: req.body.title,
    description: req.body.description,
    comments: req.body.comments,
    mobileSupport: req.body.mobileSupport,
    image: req.file.firebaseUrl,
    url: req.body.url,
    repository: req.body.repository,
  });

  try {
    await validateToken(req.body.email);
    const doc = await data.save();
    console.log("Documento adicionado com sucesso!");
    res.json(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

const editProject = async (req, res) => {
  let id = req.params.id;

  const data = {
    title: req.body.title,
    description: req.body.description,
    comments: req.body.comments,
    mobileSupport: req.body.mobileSupport,
    url: req.body.url,
    repository: req.body.repository,
  };
  const { error } = editProjectValidate(data);

  if (error) res.status(404).send(`Error do JOI ==> ${error.message}`);

  try {
    await validateToken(req.body.email);
    await Project.findByIdAndUpdate(id, data);
    res.json({ msg: "Tudo certo" });
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteProject = async (req, res) => {
  let id = req.params.id;

  try {
    const project = await Project.findById(id);
    if (!project) res.status(404).send("Projeto não existe.");

    await validateToken(req.body.email);
    const doc = await Project.findByIdAndDelete(id);
    res.send(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  searchProject,
  addProject,
  editProject,
  deleteProject,
};
