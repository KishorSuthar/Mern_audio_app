import express from 'express';
import { register, login } from '../controllers/authController.js';
import { loginValidator, registerValidator } from '../validator/authValidate.js';
import { validateRequest } from '../middleware/validate.js';

const router = express.Router();

router.post('/register', registerValidator, validateRequest, register);
router.post('/login', loginValidator, validateRequest, login);

export default router;
