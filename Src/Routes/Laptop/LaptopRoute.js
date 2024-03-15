const express = require('express');
const {  getSingleLaptopData,getAllperpousLaptop, getrelated } = require('../../Controller/LaptopController');
const router = express.Router();

router.get('/related',getrelated)
router.get('/get',getAllperpousLaptop)
router.get('/detail/:id',getSingleLaptopData)
 
module.exports = router;
