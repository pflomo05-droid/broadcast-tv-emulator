const express = require('express');
const cors = require('cors');
const path = require('path');
const tvGuide = require('./data/tvGuide');
const channels = require('./data/channels');
const commercials = require('./data/commercials');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Get all channels
app.get('/api/channels', (req, res) => {
  res.json(channels);
});

// Get TV guide for a specific channel and date
app.get('/api/guide/:channelId/:date', (req, res) => {
  const { channelId, date } = req.params;
  const guide = tvGuide.getGuideForChannel(channelId, date);
  res.json(guide);
});

// Get current program
app.get('/api/current/:channelId', (req, res) => {
  const { channelId } = req.params;
  const program = tvGuide.getCurrentProgram(channelId);
  res.json(program);
});

// Get commercials for a channel
app.get('/api/commercials/:channelId', (req, res) => {
  const { channelId } = req.params;
  const ads = commercials.getCommercialsForChannel(channelId);
  res.json(ads);
});

// Get full TV guide for a date
app.get('/api/guide/:date', (req, res) => {
  const { date } = req.params;
  const guide = tvGuide.getGuideForDate(date);
  res.json(guide);
});

// Serve main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🎬 Broadcast TV Emulator running on http://localhost:${PORT}`);
  console.log(`📺 Welcome to the 2000s-2010s Canadian TV experience!`);
});
