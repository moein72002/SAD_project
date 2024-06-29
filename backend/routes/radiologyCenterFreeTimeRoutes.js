const express = require('express');
const router = express.Router();
const radiologyCenterFreeTimeController = require('../controllers/radiologyCenterFreeTimeController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, radiologyCenterFreeTimeController.addRadiologyCenterFreeTime);
router.get('/list', authMiddleware, radiologyCenterFreeTimeController.listRadiologyCenterFreeTimes);

module.exports = router;
