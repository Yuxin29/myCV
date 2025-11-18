// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // allow React dev server
app.use(express.json()); // parse JSON body

app.use('/api/contact', contactRouter);

// error handling middleware (simple)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
});

// connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});
