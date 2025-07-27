// routes/insights.route.js
import express from 'express';
import Insight from '../models/Insight.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const query = {};

    if (req.query.topic) query.topic = req.query.topic;
    if (req.query.region) query.region = req.query.region;
    if (req.query.country) query.country = req.query.country;
    if (req.query.city) query.city = req.query.city;
    if (req.query.end_year) query.end_year = +req.query.end_year;

    const data = await Insight.find(query);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
