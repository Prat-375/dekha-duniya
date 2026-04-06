import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    originCulture: { type: String, required: true },
    genres: [{ type: String, required: true }],
    availableInBengali: { type: Boolean, default: false },
    readingLevel: { type: String, default: 'Intermediate' },
    hook: { type: String, required: true },
    whyItFits: { type: String, required: true },
    summary: { type: String, required: true },
    purchaseUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Book', bookSchema);
