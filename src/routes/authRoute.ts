import express, { Request, Response } from "express";
import { login, signup } from "../controllers/authController";
import { verifyJwtToken } from "../middelware/middleware";

const Router = express.Router();


Router.post("/login",login);
Router.post("/signup",signup)
Router.get("/testingAuth",verifyJwtToken, (req: Request, res: Response) => {
    res.status(200).json({ message: "You are authenticated!" });
})   


export default Router;