const express = require('express');
const router = express.Router();
const charityController = require('../controllers/charityController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/add', authMiddleware, roleMiddleware(['admin']), charityController.addCharity);
router.get('/list', authMiddleware, roleMiddleware(['admin']), charityController.listCharities);

module.exports = router;
