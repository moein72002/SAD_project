const express = require('express');
const router = express.Router();
const doctorVisitController = require('../controllers/doctorVisitController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/add', authMiddleware, roleMiddleware(['admin']), doctorVisitController.addDoctorVisit);
router.get('/list', authMiddleware, roleMiddleware(['admin']), doctorVisitController.listDoctorVisits);

module.exports = router;
