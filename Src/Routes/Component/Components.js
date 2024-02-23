const express = require('express');
const { getMotherboard, getAllProducts } = require('../../Controller/AllComponentController');
const router = express.Router();



router.get('/', getAllProducts);
router.get('/mother',getMotherboard)


module.exports = router;
