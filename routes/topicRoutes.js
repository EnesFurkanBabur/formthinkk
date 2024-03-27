const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController');

// konuları getirme
router.get('/topics', topicController.getTopics);

// yeni konu ekleme
router.post('/topics', topicController.createTopic);

module.exports = router;
