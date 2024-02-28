const express = require('express');
const {getAllProducts, Router, getSingleProducts, getFeaturedProducts, getRam, getRamByBrand } = require('../../Controller/AllComponentController');
const router = express.Router();



router.get('/detail/:id', getSingleProducts);
router.get('/ram', getRam);
router.get('/featured', getFeaturedProducts);
router.get('/:component', Router);
router.get('/ram/:brand',getRamByBrand)
router.get('/', getAllProducts);


//65a0c7b1fde290429c941c2f
//65a0c7b1fde290429c941c2f
module.exports = router;
