import express, { Request, Response } from "express";
import { addPassenger , getPassengersByRoute,getallPassenger} from "../controllers/passengersController";

const Router = express.Router();

Router.post("/passengers", addPassenger);
Router.post("/passengerByRoute",getPassengersByRoute);
Router.get("/passengers", getallPassenger) 





export default Router;