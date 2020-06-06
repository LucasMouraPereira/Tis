const express = require("express");
const router = express.Router();
const recordController = require('../controller/recordController');

router.get("/", recordController.index);

router.post('/create', recordController.store);

module.exports = router;

