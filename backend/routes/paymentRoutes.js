import express from 'express';
import {confirmPayment, createCheckoutSession } from '../controllers/paymentController.js'; 
import auth from '../middlewares/auth.js';

const paymentRouter = express.Router();

paymentRouter.post('/create-checkout-session',auth, createCheckoutSession);
paymentRouter.get('/confirm', confirmPayment);

export default paymentRouter;