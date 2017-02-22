const http = require('http');
const express = require('express');
const router = express.Router();
import SR_SERVICE from '../../services/sr';

let srService = new SR_SERVICE();

router.get('', (req, res) => {
  srService.issueInfo(undefined, (data)=>{
    res.send(data);
  });
});
router.get('/:issueId', (req, res) => {
  srService.issueInfo(req.params.issueId, (data)=>{
    res.send(data);
  });
});

module.exports = router;
