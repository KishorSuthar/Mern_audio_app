import { body } from 'express-validator';

export const audioCrudValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('image').notEmpty().withMessage('Image URL is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('song').notEmpty().withMessage('Song URL is required'),
  body('duration')
    .isInt({ min: 30 })
    .withMessage('Audio duration must be at least 30 seconds'),
  body('action')
    .notEmpty()
    .withMessage('Action is required')
    .isIn(['play', 'pause'])
    .withMessage('Action must be either "play" or "pause"'),
];

export const audioStreamValidator = [
  body('name').notEmpty().withMessage('Song name is required'),
  body('image').notEmpty().withMessage('Image is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('song').notEmpty().withMessage('Song file/URL is required'),
  body('duration')
    .isInt({ min: 30 })
    .withMessage('Audio duration must be at least 30 seconds'),
  body('action')
    .notEmpty()
    .withMessage('Action is required')
    .isIn(['play', 'pause'])
    .withMessage('Action must be either "play" or "pause"'),
];
