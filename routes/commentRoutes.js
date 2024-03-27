const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// yorumları getirme
router.get('/comments', commentController.getComments);

// yeni yorum ekleme
router.post('/comments', commentController.createComment);

module.exports = router;
