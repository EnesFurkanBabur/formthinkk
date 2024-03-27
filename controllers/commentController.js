const Comment = require('../models/comment');

// yorumları getirme
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// yeni yorum ekleme
const createComment = async (req, res) => {
  try {
    const { text, message } = req.body;
    const comment = await Comment.create({ text, message });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getComments,
  createComment
};
