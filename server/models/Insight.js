// server/models/Insight.js
import mongoose from 'mongoose';

// Create a schema with dynamic fields using strict: false
const InsightSchema = new mongoose.Schema({}, { strict: false });

// Export the model using ES Module syntax
const Insight = mongoose.model('Insight', InsightSchema);

export default Insight;
