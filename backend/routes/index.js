import express from 'express';
import audioRoutes from './audioRoutes.js';
import userRoutes from './userRoutes.js'

const router = express.Router();

router.use('/audio', audioRoutes);
router.use('/auth', userRoutes);

export default router;
