const express = require('express');
const { getAllMonitor, getByBrand, getSingleMonitorData } = require('../../Controller/MonitorController');
const router = express.Router();


router.get('/', getAllMonitor);
router.get('/:brand', getByBrand);
router.get('/detail/:id',getSingleMonitorData)


module.exports = router;