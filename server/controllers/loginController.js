const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  try {
    //search user
    const doc = await User.findOne({ email: user.email });
    if (!doc) res.status(400).send("Usuário ou senha inválidos.");

    //check password
    const validatePassword = bcrypt.compareSync(user.password, doc.password);

    if (!validatePassword) res.status(400).send("Usuário ou senha inválidos.");

    //token creation
    const token = jwt.sign({ _id: doc.id }, process.env.TOKEN_SECRET, {
      expiresIn: 15 //60 * 30,
    });

    //add token in header
    res.header("authorization-token", token);
    next();
  } catch (error) {
    console.log("login ==>" + error.message);
    res.status(404).send(error.message);
  }
};
