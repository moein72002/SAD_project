const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/add', authMiddleware, roleMiddleware(['admin']), doctorController.addDoctor);
router.get('/list', authMiddleware, roleMiddleware(['admin', 'system_secretory']), doctorController.listDoctors);

module.exports = router;
