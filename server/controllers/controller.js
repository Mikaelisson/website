const {
  deleteImage,
  deleteImageAfterEditing,
} = require("../firebase/firebaseConfig");
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
  console.log(req.body)
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
    await data.save();
    res.json({ message: "Documento adicionado com sucesso!" });
  } catch (error) {
    res.status(404).send(error);
  }
};

const editProject = async (req, res) => {
  console.log(req.body)
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
    res.json({ message: "Edição realizada com sucesso!" });
  } catch (error) {
    res.status(404).send(error);
  }
};

const editProjectImage = async (req, res) => {
  let id = req.params.id;

  try {
    await validateToken(req.body.email);

    const doc = await Project.findById(id);
    
    await deleteImageAfterEditing(doc.image.slice(83, -10))

    await Project.findByIdAndUpdate(id, { image: req.file.firebaseUrl });
    res.json({ message: "Upload realizado com sucesso!" });
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
    await Project.findByIdAndDelete(id);
    res.json({ message: "Exclusão realizada com sucesso!" });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  searchProject,
  addProject,
  editProject,
  deleteProject,
  editProjectImage,
};
