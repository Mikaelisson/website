const Project = require("../models/Project");
const { addProjectValidate, editProjectValidate } = require("./validate");

const home = (req, res) => {
  res.send();
};

const add = async (req, res) => {
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

const edit = async (req, res) => {
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
    res.send(error);
  }
};

module.exports = { home, add, edit };
