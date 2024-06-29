const express = require('express');
const router = express.Router();
const prescriptionController = require('../controllers/prescriptionController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, prescriptionController.addPrescription);
router.get('/list', authMiddleware, prescriptionController.listPrescriptions);

module.exports = router;
