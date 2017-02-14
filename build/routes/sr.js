'use strict';

var _sr = require('../services/sr');

var _sr2 = _interopRequireDefault(_sr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var http = require('http');
var express = require('express');
var router = express.Router();


var srService = new _sr2.default();

router.get('/customer', function (req, res) {
  srService.custInfo(undefined, function (data) {
    res.send(data);
  });
});
router.get('/customer/:custId', function (req, res) {
  srService.custInfo(req.params.custId, function (data) {
    res.send(data);
  });
});
router.get('/sr', function (req, res) {
  srService.srInfo(undefined, function (data) {
    res.send(data);
  });
});
router.get('/sr/:srNum', function (req, res) {
  srService.srInfo(req.params.srNum, function (data) {
    res.send(data);
  });
});
router.get('/issue', function (req, res) {
  srService.issueInfo(undefined, function (data) {
    res.send(data);
  });
});
router.get('/issue/:issueId', function (req, res) {
  srService.issueInfo(req.params.issueId, function (data) {
    res.send(data);
  });
});
router.get('/equip', function (req, res) {
  srService.equipInfo(undefined, function (data) {
    res.send(data);
  });
});
router.get('/equip/:equipId', function (req, res) {
  srService.equipInfo(req.params.equipId, function (data) {
    res.send(data);
  });
});

module.exports = router;