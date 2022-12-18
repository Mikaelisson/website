const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const userCredential = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    const doc = await User.findOne({ email: userCredential.email });
    if (!doc) res.status(400).send("Usuário ou senha incorretos.");

    const validatePassword = bcrypt.compareSync(
      userCredential.password,
      doc.password
    );

    if (!validatePassword) res.status(400).send("Usuário ou senha incorretos.");

    const token = jwt.sign({ _id: doc.id }, process.env.TOKEN_SECRET, {
      expiresIn: 60 * 30,
    });

    req.session = { name: doc.name, email: doc.email };

    res.header("authorization-token", token);
    next();
  } catch (error) {
    console.log("login ==>" + error.message);
    res.status(404).send(error.message);
  }
};
