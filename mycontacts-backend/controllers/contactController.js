const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});

//@desc Create new contacts
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mndatory!");
  }
  console.log(name, email, phone);
  res.status(201).json({ message: "Create new contact" });
});

//@desc Get specified contact
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Get the contact with id: ${req.params.id}` });
});

//@desc Update specified contact
//@route PUT /api/contacts
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact with id: ${req.params.id}` });
});

//@desc Delete specified contact
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact with id: ${req.params.id}` });
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
