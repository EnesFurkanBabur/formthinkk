const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const User = require('./models/user');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());


mongoose.connect('mongodb://localhost/forumDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB bağlantısı başarılı.');
    app.listen(PORT, () => {
      console.log(`Sunucu ${PORT} portunda başlatıldı.`);
    });
  })
  .catch(err => console.error('MongoDB bağlantı hatası:', err));

// kayıt route
app.post('/register', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// giris route
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// forum route
app.get('/forum', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'forum.html'));
});
