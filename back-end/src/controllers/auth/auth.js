const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const fs = require("fs")
const userModel = require('../models/user');



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
    const token = signAccessToken(user);
    return res.status(201).json({ user: user, token: token });

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




app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // validate user input
  if (!username || !password) {
    return res.status(400).send('Missing required fields');
  }
  if (!isValidPassword(password)) {
    return res.status(400).send('Password must be at least 8 characters long');
  }

  // check if user already exists in database
  const existingUser = await user.findOne({ where: { name } });
  if (existingUser) {
    return res.status(409).send('User with this email already exists');
  }

  // create new user object
  const newUser = {
    name,
    password: await bcrypt.hash(password, 10) // hash password using bcrypt
  };

  // save user to database
  try {
    const createdUser = await User.create(newUser);
    return res.status(201).send('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).send('Error creating user');
  }
});

function isValidPassword(password) {
  // check if password is at least 8 characters long
  return password.length >= 8;
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});