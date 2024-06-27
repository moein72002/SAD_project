const express = require('express');
const router = express.Router();
const systemSecretaryController = require('../controllers/systemSecretaryController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

router.post('/add', authMiddleware, roleMiddleware(['admin']), systemSecretaryController.addSystemSecretary);
router.get('/list', authMiddleware, roleMiddleware(['admin', 'system_secretary']), systemSecretaryController.listSecretaries);

module.exports = router;
