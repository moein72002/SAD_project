const express = require('express');
const router = express.Router();
const radiologyCenterVisitController = require('../controllers/radiologyCenterVisitController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, radiologyCenterVisitController.addRadiologyCenterVisit);
router.get('/list', authMiddleware, radiologyCenterVisitController.listRadiologyCenterVisits);

module.exports = router;
