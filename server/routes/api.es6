const http = require('http');
const express = require('express');
const router = express.Router();
import sr from './sr';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Set our api routes
router.use('/sr', sr);

module.exports = router;
