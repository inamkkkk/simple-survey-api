const Survey = require('../models/Survey');

exports.createSurvey = async (req, res) => {
  try {
    const survey = new Survey(req.body);
    const savedSurvey = await survey.save();
    res.status(201).json(savedSurvey);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.json(surveys);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSurveyById = async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }
    res.json(survey);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSurvey = async (req, res) => {
  try {
    const survey = await Survey.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }
    res.json(survey);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteSurvey = async (req, res) => {
  try {
    const survey = await Survey.findByIdAndDelete(req.params.id);
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }
    res.json({ message: 'Survey deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};