import Demo from "./Demo.js";
import express from "express";
const Router = express.Router();
Router.get("/:name",Demo)
export default Router;