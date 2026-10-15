import Project from "../models/project.model.js";
import extend from "lodash/extend.js";
import errorHandler from "./error.controller.js";

const create = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    return res.status(200).json(project);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
const list = async (req, res) => {
  try {
    res.json(await Project.find());
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
const projectByID = async (req, res, next, id) => {
  try {
    const project = await Project.findById(id);
    if (!project) return res.status(400).json({ error: "Project not found" });
    req.project = project;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve project" });
  }
};
const read = (req, res) => res.json(req.project);
const update = async (req, res) => {
  try {
    const project = extend(req.project, req.body);
    await project.save();
    res.json(project);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
const remove = async (req, res) => {
  try {
    res.json(await req.project.deleteOne());
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
const removeAll = async (req, res) => {
  try {
    const result = await Project.deleteMany({});
    res.json({ message: `${result.deletedCount} projects removed` });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};
export default { create, list, projectByID, read, update, remove, removeAll };