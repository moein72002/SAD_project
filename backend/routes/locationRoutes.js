const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/add', authMiddleware, locationController.addLocation);
router.get('/list', authMiddleware, locationController.listLocations);

module.exports = router;
