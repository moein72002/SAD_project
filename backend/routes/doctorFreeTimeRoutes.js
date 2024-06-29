const express = require('express');
const router = express.Router();
const doctorFreeTimeController = require('../controllers/doctorFreeTimeController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/add', authMiddleware, roleMiddleware(['admin']), doctorFreeTimeController.addDoctorFreeTime);
router.get('/list', authMiddleware, roleMiddleware(['admin']), doctorFreeTimeController.listDoctorFreeTimes);

module.exports = router;
