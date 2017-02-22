const http = require('http');
const express = require('express');
const router = express.Router();
import SR_SERVICE from '../../services/sr';

let srService = new SR_SERVICE();

router.get('', (req, res) => {
  srService.equipInfo(undefined, (data)=>{
    res.send(data);
  });
});
router.get('/:equipId', (req, res) => {
  srService.equipInfo(req.params.equipId, (data)=>{
    res.send(data);
  });
});

module.exports = router;
