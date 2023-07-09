const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const fs = require("fs")
const userModel = require('../models/user');
const signAccessToken = require("../utiles/signAccessToken");



const register = async (req, res, next) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      const error = new Error()
      error.status = 400;
      error.array = result.array();
      return next(error)
    }
    
    const { name, password } = req.body;

    encryptedPassword = await bcrypt.hash(password, 10);

    const newuser = {
      name: name,
      password: encryptedPassword,

    }
    const user = await userModel.create(newuser);
    return res.status(201).json({ user: user });

  } catch (err) {
    console.log(err);
  }
};

const login =  async (req, res, next) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const error = new Error()
      error.status = 400;
      error.array = result.array();
      return next(error)
    }

    const { name, password } = req.body;
    const user = await userModel.findOne({ name });

    if (user && (await bcrypt.compare(password, user.password))) {
      const isLoggedIn = false;
      return res.status(200).json({ user: user, isLoggedIn: true });
    }
    return res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }

};
module.exports = {
  register,
  login,
}