const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/add', authMiddleware, roleMiddleware(['charity_employee']), patientController.addPatient);
router.get('/list', authMiddleware, roleMiddleware(['charity_employee']), patientController.listCharityPatients);

module.exports = router;
