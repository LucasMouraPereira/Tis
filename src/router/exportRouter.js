const express = require("express");
const router = express.Router();
const exportController = require('../controller/exportController');

router.get('/export/tocsv', exportController.exportToCsv);

router.get('/data/:data_retorno/export/tocsv', exportController.data);

router.get('/status/:status/export/tocsv', exportController.status);

module.exports = router;