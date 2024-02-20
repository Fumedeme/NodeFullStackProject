const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email address"],
    },
    phone: {
      type: Int,
      required: [true, "Please give a phone number"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Contact", contactSchema);
