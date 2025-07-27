const mongoose = require('mongoose');
const fs = require('fs');
const Insight = require('./models/Insight');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const data = JSON.parse(fs.readFileSync('../jsondata.json', 'utf-8'));
  await Insight.insertMany(data);
  console.log('Data imported!');
  process.exit();
});
