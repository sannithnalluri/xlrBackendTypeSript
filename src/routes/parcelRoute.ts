import express, { Request, Response } from 'express';
import { createOrder, getAllOrderById } from '../controllers/orderController';

const Router = express.Router();

Router.post('/add', createOrder);
Router.get('/orders',getAllOrderById)
export default Router;