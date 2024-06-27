const express = require('express');
const router = express.Router();
const charityEmployeeController = require('../controllers/charityEmployeeController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/add', authMiddleware, roleMiddleware(['admin']), charityEmployeeController.addCharityEmployee);
router.get('/list', authMiddleware, roleMiddleware(['admin', 'charity_employee']), charityEmployeeController.listCharityEmployees);

module.exports = router;
