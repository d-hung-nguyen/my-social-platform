import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.models.Activity || mongoose.model('Activity', ActivitySchema);
