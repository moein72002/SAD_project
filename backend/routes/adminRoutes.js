const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/add', authMiddleware, roleMiddleware(['admin']), adminController.addAdmin);
router.get('/list', authMiddleware, roleMiddleware(['admin']), adminController.listAdmins);

module.exports = router;
