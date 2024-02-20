const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//@desc Register the user
//@route POST /api/users/register
//@access public
const register = asyncHandler(async (req, res) => {
  //Take the data from req body and check their existence
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  //Check if such user exists
  const userAvailable = await User.findOne({ email });

  //If user is available give error
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  //Hash the passwd
  const hashedPasswd = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashedPasswd,
  });

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

//@desc Login the user
//@route POST /api/users/login
//@access public
const login = asyncHandler(async (req, res) => {
  res.json({ message: "logging in" });
});

//@desc Get the current user
//@route GET /api/users/current
//@access private
const current = asyncHandler(async (req, res) => {
  res.json({ message: "current user" });
});

module.exports = { register, login, current };
