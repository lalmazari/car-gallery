const express = require('express');
const pageController = require('../controllers/pageController');
const router = express.Router();


router.route('/about').get(pageController.getAboutPage);
router.route('/add').get(pageController.getAddPage);

module.exports = router;