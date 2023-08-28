// to download the async handler
// open the command dialog prompt and    type
// npm i express-async-handler
const asyncHandler = require("express-async-handler");
const contact = require("../model/contact");

const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(404);
    throw new Error(" All fields are required");
  }
  const contactz = await contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contactz);
});

const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get all contacts" });
});

const getContact = asyncHandler(async (req, res) => {
  const findContact = await contact.find();
  res.status(200).json(findContact);
});

const updateContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `update contact for ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  getContacts,
  updateContact,
  deleteContact,
};
