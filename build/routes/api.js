'use strict';

var _sr = require('./sr');

var _sr2 = _interopRequireDefault(_sr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var http = require('http');
var express = require('express');
var router = express.Router();


/* GET api listing. */
router.get('/', function (req, res) {
  res.send('api works');
});

// Set our api routes
router.use('/sr', _sr2.default);

module.exports = router;