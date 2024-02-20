const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(404).json({ message: "Get all contacts" });
});

router.route("/").post((req, res) => {
  res.status(404).json({ message: "Create new contact" });
});

router.route("/:id").get((req, res) => {
  res
    .status(404)
    .json({ message: `Get the contact with id: ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.status(404).json({ message: `Update contact with id: ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(404).json({ message: `Delete contact with id: ${req.params.id}` });
});

module.exports = router;
