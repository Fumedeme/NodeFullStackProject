const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
  const { email, password } = req.body;
  if (!email || !password) {
    console.log(email, password);
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("There is no such user");
  }

  const checkPasswd = await bcrypt.compare(password, user.password);

  if (!checkPasswd) {
    res.status(400);
    throw new Error("Wrong password");
  }

  try {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10m" }
    );

    res.status(200).json({ accessToken });
  } catch (e) {
    console.log(e);
    res.status(401);
    throw new Error("Username or password is not valid");
  }
});

//@desc Get the current user
//@route GET /api/users/current
//@access private
const current = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { register, login, current };
