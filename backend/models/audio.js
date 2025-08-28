import mongoose from 'mongoose';

const audioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  song: { type: String, required: true },
  duration: { type: Number, required: true }, // duration in seconds
  action: { type: String, enum: ['play', 'pause'], required: true }, // action button
});

const Audio = mongoose.model('Audio', audioSchema);
export default Audio;
