import { Router } from 'express';
import userController from '../controllers/userController.js';
const router = Router();

router.post('/signup', userController.signUp);

export default router;
