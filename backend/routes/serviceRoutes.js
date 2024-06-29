const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, serviceController.addService);
router.get('/list', authMiddleware, serviceController.listServices);

module.exports = router;
