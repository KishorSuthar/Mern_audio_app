import {
    createAudio as createAudioService,
    getAudios as getAudiosService,
    updateAudio as updateAudioService,
    deleteAudio as deleteAudioService,
  } from '../services/audioService.js';
  
  export const createAudio = async (req, res) => {
    try {
      const newAudio = await createAudioService(req.body);
      res.status(201).json(newAudio);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  export const getAudios = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
  
      const audios = await getAudiosService(page, limit);
      res.json(audios);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  export const updateAudio = async (req, res) => {
    try {
      const updatedAudio = await updateAudioService(req.params.id, req.body);
      res.json(updatedAudio);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  export const deleteAudio = async (req, res) => {
    try {
      await deleteAudioService(req.params.id);
      res.status(204).json({ message: 'Audio deleted successfully' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  