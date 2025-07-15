"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passengersController_1 = require("../controllers/passengersController");
const Router = express_1.default.Router();
Router.post("/passengers", passengersController_1.addPassenger);
exports.default = Router;
