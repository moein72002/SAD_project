const express = require('express');
const router = express.Router();
const radiologyCenterController = require('../controllers/radiologyCenterController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/add', authMiddleware, roleMiddleware(['admin']), radiologyCenterController.addRadiologyCenter);
router.get('/list', authMiddleware, roleMiddleware(['admin']), radiologyCenterController.listRadiologyCenters);

module.exports = router;
