import express, { Request, Response } from "express";
import { addPassenger } from "../controllers/passengersController";

const Router = express.Router();

Router.post("/passengers", addPassenger);



export default Router;