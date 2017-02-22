const http = require('http');
const express = require('express');
const router = express.Router();
import SR_SERVICE from '../../services/sr';
import sr from './sr';
import issue from './issue';
import equip from './equip';
import customer from './customer';

let srService = new SR_SERVICE();

router.use('/sr', sr);
router.use('/issue', issue);
router.use('/equip', equip);
router.use('/customer', customer);

router.get('/sr-detail/:srNum', (req, res) => {
  srService.srDetail(req.params.srNum, (data)=>{
    res.send(data);
  });
});

module.exports = router;
