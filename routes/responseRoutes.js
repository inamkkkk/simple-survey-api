const express = require('express');
const responseController = require('../controllers/responseController');
const router = express.Router();

router.post('/:surveyId', responseController.createResponse);
router.get('/:surveyId', responseController.getResponsesBySurvey);

module.exports = router;