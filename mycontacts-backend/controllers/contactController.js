//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create new contacts
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create new contact" });
};

//@desc Get specified contact
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
  res
    .status(404)
    .json({ message: `Get the contact with id: ${req.params.id}` });
};

//@desc Update specified contact
//@route PUT /api/contacts
//@access public
const updateContact = (req, res) => {
  res.status(404).json({ message: `Update contact with id: ${req.params.id}` });
};

//@desc Delete specified contact
//@route DELETE /api/contacts
//@access public
const deleteContact = (req, res) => {
  res.status(404).json({ message: `Delete contact with id: ${req.params.id}` });
};

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
