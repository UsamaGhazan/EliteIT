import mongoose from 'mongoose';
const recordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Record = mongoose.model('Record', recordSchema);

export default Record;
