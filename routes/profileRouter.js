const express = require('express');
const profileController = require('../controllers/profileController');
const presenceController = require('../controllers/presenceController');

const router = express.Router();

router
  .route('/userSession')
  .get(profileController.userSession);

router
  .route('/updateSettings')
  .post(profileController.updateSettings);

router
  .route('/resetAccount')
  .post(profileController.resetAccount);

router 
  .route('/updateStatus')
  .post(profileController.updateStatus);

router
  .route('/updatePresence')
  .post(presenceController.updatePresence);

router
  .route('/currentSettings')
  .get(presenceController.currentSettings);

router
  .route('/friends')
  .get(profileController.getFriends);

router
  .route('/timePlaying')
  .get(profileController.timePlaying);

router
  .route('/requests')
  .get(profileController.getRequestsCount);

module.exports = router;