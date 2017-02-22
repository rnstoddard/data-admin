const http = require('http');
const express = require('express');
const router = express.Router();
import SR_SERVICE from '../../services/sr';

let srService = new SR_SERVICE();

router.get('', (req, res) => {
  srService.srInfo(undefined, (data)=>{
    res.send(data);
  });
});
router.get('/:srNum', (req, res) => {
  srService.srInfo(req.params.srNum, (data)=>{
    res.send(data);
  });
});

router.put('', (req,res) =>{
  res.send('{error: "Put not implemented yet"}');
});
module.exports = router;
