const express = require("express");
const { register, login, current } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

//Require token validation only if user wants to get current user
router.get("/current", validateToken, current);

module.exports = router;
