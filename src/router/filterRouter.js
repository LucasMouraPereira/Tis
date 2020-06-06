const express = require("express");
const router = express.Router();
const filterController = require('../controller/filterController');

router.get('/data/:data_retorno', filterController.data);

router.get('/status/:status', filterController.status);

module.exports = router;