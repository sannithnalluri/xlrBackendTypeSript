import express, { Request, Response } from 'express';
import { addParcel } from '../controllers/parcelController';

const Router = express.Router();

Router.post('/add', addParcel);
export default Router;