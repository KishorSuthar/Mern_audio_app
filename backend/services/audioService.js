import Audio from '../models/audio.js';

export const createAudio = async (audioData) => {
  if (!audioData.duration || audioData.duration < 30) {
    throw new Error('Audio duration must be at least 30 seconds');
  }

  const newAudio = new Audio(audioData);
  return await newAudio.save();
};

export const getAudios = async (page, limit) => {
  const skip = (page - 1) * limit;
  const audios = await Audio.find().skip(skip).limit(limit);
  const total = await Audio.countDocuments();

  return {
    total,
    page,
    limit,
    audios,
  };
};

export const updateAudio = async (id, audioData) => {
  if (audioData.duration && audioData.duration < 30) {
    throw new Error('Audio duration must be at least 30 seconds');
  }
  const updatedAudio = await Audio.findByIdAndUpdate(id, audioData, { new: true });

  if (!updatedAudio) {
    throw new Error('Audio not found');
  }
  return updatedAudio;
};

export const deleteAudio = async (id) => {
  const deleted = await Audio.findByIdAndDelete(id);

  if (!deleted) {
    throw new Error('Audio not found');
  }
  return deleted;
};
