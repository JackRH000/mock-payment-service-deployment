import { Router } from 'express';
import PayController from '../controllers/payController';

const router = Router();
const payController = new PayController();

router.post('/pay', payController.processPayment.bind(payController));

export default router;