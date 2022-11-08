const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/portfolio");

const db = mongoose.connection;

db.once("open", () => console.log("Banco carregado com sucesso!"));
db.once("error", () => console.log("Error ao carregar banco!"));

const projectsSchema = new mongoose.Schema({
  name: String,
  description: String,
  comments: String,
  mobileSupport: Boolean,
  image: String,
  url: String,
  repository: String,
});

const Projects = mongoose.model("Projects", projectsSchema);

module.exports = db;
