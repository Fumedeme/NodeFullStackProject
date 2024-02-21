const asyncHandler = require("express-async-handler");
const Contact = require("../models/contectModel");
require("../routes/contactRoutes");

//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

//@desc Create new contacts
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mndatory!");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

//@desc Get specified contact
//@route GET /api/contacts
//@access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not found");
  }
  res.status(200).json(contact);
});

//@desc Update specified contact
//@route PUT /api/contacts
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not found");
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedContact);
});

//@desc Delete specified contact
//@route DELETE /api/contacts
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not found");
  }

  await Contact.deleteOne(contact);
  res.status(200).json({ message: `Succesfully deleted` });
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
