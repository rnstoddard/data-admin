const http = require('http');
const express = require('express');
const router = express.Router();
import SR_SERVICE from '../../services/sr';

let srService = new SR_SERVICE();

router.get('', (req, res) => {
  srService.custInfo(undefined, (data)=>{
    res.send(data);
  });
});
router.get('/:custId', (req, res) => {
  srService.custInfo(req.params.custId, (data)=>{
    res.send(data);
  });
});

module.exports = router;
