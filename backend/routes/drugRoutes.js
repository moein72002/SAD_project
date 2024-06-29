const express = require('express');
const router = express.Router();
const drugController = require('../controllers/drugController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, drugController.addDrug);
router.get('/list', authMiddleware, drugController.listDrugs);

module.exports = router;
