require("dotenv").config();
require("./database/db");
const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/router");
const routerAdmin = require("./routes/routerAdmin");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "https://devmikaelisson.onrender.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(cors(corsOptions));
app.use("/api", router);
app.use("/admin", routerAdmin);

if (process.env.NODE_ENV != "development") {
  app.use(express.static(path.join(__dirname, "../client/dist/index.html")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"), (error) => {
      if (error) return res.status(404).send(error);
    });
  });
}

app.listen(PORT, () => console.log("Server running on port", PORT));
