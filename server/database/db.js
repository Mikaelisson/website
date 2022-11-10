const mongoose = require("mongoose");
require("dotenv").config();

var MONGODB_CONNECT;

if (process.env.NODE_ENV !== "development")
  MONGODB_CONNECT = process.env.MONGODB_CONNECT;
else MONGODB_CONNECT = "mongodb://localhost:27017/portfolio";

mongoose.connect("mongodb://localhost:27017/portfolio");

const db = mongoose.connection;
db.once("open", () => console.log("Banco carregado com sucesso!"));
db.once("error", () => console.log("Error ao carregar banco!"));
