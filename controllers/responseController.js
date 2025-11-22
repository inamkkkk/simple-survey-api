const Response = require('../models/Response');

exports.createResponse = async (req, res) => {
  try {
    const response = new Response({
      surveyId: req.params.surveyId,
      answers: req.body.answers
    });

    const savedResponse = await response.save();
    res.status(201).json(savedResponse);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getResponsesBySurvey = async (req, res) => {
  try {
    const responses = await Response.find({ surveyId: req.params.surveyId });
    res.json(responses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};