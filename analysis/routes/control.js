var express = require('express');
var router = express.Router();
var db_utils = require('./db_utils');
var eleastic_utils = require('./elastic_utils')
var debug = require('./debugTool');

module.exports = router;