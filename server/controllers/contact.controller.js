import Contact from "../models/contact.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const create = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    return res.status(200).json(contact);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
const list = async (req, res) => {
  try {
    res.json(await Contact.find());
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
const contactByID = async (req, res, next, id) => {
  try {
    const contact = await Contact.findById(id);
    if (!contact) return res.status(400).json({ error: "Contact not found" });
    req.contact = contact;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve contact" });
  }
};
const read = (req, res) => res.json(req.contact);
const update = async (req, res) => {
  try {
    const contact = extend(req.contact, req.body);
    await contact.save();
    res.json(contact);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
const remove = async (req, res) => {
  try {
    res.json(await req.contact.deleteOne());
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
const removeAll = async (req, res) => {
  try {
    const result = await Contact.deleteMany({});
    res.json({ message: `${result.deletedCount} contacts removed` });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
export default { create, list, contactByID, read, update, remove, removeAll };