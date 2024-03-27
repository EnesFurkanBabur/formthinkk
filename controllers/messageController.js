const Message = require('../models/message');

// mesajları getirme
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// yeni mesaj ekleme
const createMessage = async (req, res) => {
  try {
    const { text, topic } = req.body;
    const message = await Message.create({ text, topic });
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getMessages,
  createMessage
};
