const express = require('express');
const { getAllLaptop, getByBrand, getSingleLaptopData } = require('../../Controller/LaptopController');
const router = express.Router();

router.get('/', getAllLaptop);
router.get('/:brand', getByBrand);
router.get('/detail/:id',getSingleLaptopData)

module.exports = router;
