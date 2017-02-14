const http = require('http');
const express = require('express');
const router = express.Router();
import SR_SERVICE from '../services/sr';

let srService = new SR_SERVICE();

router.get('/customer', (req, res) => {
  srService.custInfo(undefined, (data)=>{
    res.send(data);
  });
});
router.get('/customer/:custId', (req, res) => {
  srService.custInfo(req.params.custId, (data)=>{
    res.send(data);
  });
});
router.get('/sr', (req, res) => {
  srService.srInfo(undefined, (data)=>{
    res.send(data);
  });
});
router.get('/sr/:srNum', (req, res) => {
  srService.srInfo(req.params.srNum, (data)=>{
    res.send(data);
  });
});
router.get('/issue', (req, res) => {
  srService.issueInfo(undefined, (data)=>{
    res.send(data);
  });
});
router.get('/issue/:issueId', (req, res) => {
  srService.issueInfo(req.params.issueId, (data)=>{
    res.send(data);
  });
});
router.get('/equip', (req, res) => {
  srService.equipInfo(undefined, (data)=>{
    res.send(data);
  });
});
router.get('/equip/:equipId', (req, res) => {
  srService.equipInfo(req.params.equipId, (data)=>{
    res.send(data);
  });
});

module.exports = router;
