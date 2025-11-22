const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const surveyRoutes = require('./routes/surveyRoutes');
const responseRoutes = require('./routes/responseRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/surveys', surveyRoutes);
app.use('/api/responses', responseRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});