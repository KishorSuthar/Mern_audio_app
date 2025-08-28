import express from 'express';
import {
  createAudio,
  getAudios,
  updateAudio,
  deleteAudio,
} from '../controllers/audioController.js';
import {
  audioCrudValidator,
  audioStreamValidator,
} from '../validator/audioValidate.js';
import { validateRequest } from '../middleware/validate.js';

const router = express.Router();

router.post('/', audioCrudValidator, validateRequest, createAudio);
router.get('/', getAudios);
router.put('/:id', audioCrudValidator, validateRequest, updateAudio);
router.delete('/:id', deleteAudio);

export default router;
