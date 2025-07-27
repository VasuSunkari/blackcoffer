// server/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import insightsRoute from './routes/insights.js';
import connectDB from './db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/insights', insightsRoute);

const PORT = process.env.PORT || 5000;

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});
