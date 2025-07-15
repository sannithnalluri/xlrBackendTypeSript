"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const middleware_1 = require("../middelware/middleware");
const Router = express_1.default.Router();
Router.post("/login", authController_1.login);
Router.post("/signup", authController_1.signup);
Router.get("/testingAuth", middleware_1.verifyJwtToken, (req, res) => {
    res.status(200).json({ message: "You are authenticated!" });
});
exports.default = Router;
