const express = require('express');
const { getAllGPU, getByBrand, getSingleGPUData } = require('../../Controller/GraphicsController');
const router = express.Router();


router.get('/', getAllGPU);
router.get('/:brand', getByBrand);
router.get('/detail/:id',getSingleGPUData)



module.exports = router;