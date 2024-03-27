// topicController.js

const Topic = require('../models/topics');

// Yeni konu oluşturma
exports.createTopic = async (req, res) => {
  try {
    const { name } = req.body;
    const newTopic = new Topic({ name });
    await newTopic.save();
    res.status(201).json({ message: 'Konu başarıyla oluşturuldu.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// konuları listeleme
exports.getAllTopics = async (req, res) => {
  // tüm konuları listeleme 
};

// konu detaylarını getirme
exports.getTopicDetails = async (req, res) => {
  // eklenecek
};

// konuyu güncelleme
exports.updateTopic = async (req, res) => {
  // eklenecek
};

// konuyu silme
exports.deleteTopic = async (req, res) => {
//eklenecek
};
