const express = require('express');
const router = express.Router();
const radiologyCenterEmployeeController = require('../controllers/radiologyCenterEmployeeController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/add', authMiddleware, roleMiddleware(['admin']), radiologyCenterEmployeeController.addRadiologyCenterEmployee);
router.get('/list', authMiddleware, roleMiddleware(['admin', 'radiology_center_employee']), radiologyCenterEmployeeController.listRadiologyCenterEmployees);

module.exports = router;
