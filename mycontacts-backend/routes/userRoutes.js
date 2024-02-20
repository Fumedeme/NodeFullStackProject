const express = require("express");
const { register, login, current } = require("../controllers/userController");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/current", current);

module.exports = router;
