const Project = require("../models/Project");
const { addProjectValidate, editProjectValidate } = require("./validate");

const searchProject = async (req, res) => {
  try {
    const doc = await Project.find({});
    res.send(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

const addProject = async (req, res) => {
  const { error } = addProjectValidate(req.body);
  if (error) res.status(404).send(`Error do JOI ==> ${error.message}`);

  const data = new Project(req.body);

  try {
    const doc = await data.save();
    console.log("Documento adicionado com sucesso!");
    res.send(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

const editProject = async (req, res) => {
  let id = req.params.id;

  const data = req.body;
  const { error } = editProjectValidate(data);

  if (error) res.status(404).send(`Error do JOI ==> ${error.message}`);

  try {
    const doc = await Project.findById(id);

    if (
      data.name === doc.name ||
      data.description === doc.description ||
      data.comments === doc.comments ||
      data.mobileSupport === doc.mobileSupport ||
      data.image === doc.image ||
      data.url === doc.url ||
      data.repository === doc.repository
    ) {
      const error =
        "Error, os dados inseridos já se encontram no banco de dados.";
      res.status(404).send(error);
    }

    await Project.findByIdAndUpdate(id, data);
    res.send("Tudo certo");
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteProject = async (req, res) => {
  let id = req.params.id;

  try {
    const project = await Project.findById(id);
    if (!project) res.status(404).send("Projeto não existe.");

    const doc = await Project.findByIdAndDelete(id);
    console.log(`Projeto deletado com sucesso ==> ${doc}`);
    res.send(doc);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { searchProject, addProject, editProject, deleteProject };
