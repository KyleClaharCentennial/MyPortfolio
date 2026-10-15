import Qualification from "../models/qualification.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const create = async (req, res) => {
  try {
    const qualification = new Qualification(req.body);
    await qualification.save();
    return res.status(200).json(qualification);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
const list = async (req, res) => {
  try {
    res.json(await Qualification.find());
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
const qualificationByID = async (req, res, next, id) => {
  try {
    const qualification = await Qualification.findById(id);
    if (!qualification) return res.status(400).json({ error: "Qualification not found" });
    req.qualification = qualification;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve qualification" });
  }
};
const read = (req, res) => res.json(req.qualification);
const update = async (req, res) => {
  try {
    const qualification = extend(req.qualification, req.body);
    await qualification.save();
    res.json(qualification);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
const remove = async (req, res) => {
  try {
    res.json(await req.qualification.deleteOne());
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
const removeAll = async (req, res) => {
  try {
    const result = await Qualification.deleteMany({});
    res.json({ message: `${result.deletedCount} qualifications removed` });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
export default { create, list, qualificationByID, read, update, remove, removeAll };