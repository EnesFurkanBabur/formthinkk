const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// mesajları getirme
router.get('/messages', messageController.getMessages);

// yeni mesaj ekleme
router.post('/messages', messageController.createMessage);

module.exports = router;
