require("dotenv").config();
require("./database/db");
const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/router");
const routerAdmin = require("./routes/routerAdmin");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use("/api", router);
app.use("/admin", routerAdmin);

const sess = {
  secret: "sqbsyv2yb323un",
  cookie: {},
};

if (process.env.NODE_ENV != "development") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

if (process.env.NODE_ENV !== "development") {
  app.use(express.static(path.join(__dirname, "../client/dist/index.html")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"), (error) => {
      if (error) return res.status(404).send(error);
    });
  });
}

app.listen(PORT, () => console.log("Server running on port", PORT));
