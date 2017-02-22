const http = require('http');
const express = require('express');
const router = express.Router();
import sr from './sr/srRouter';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Set our api routes
router.use('/sr', sr);

module.exports = router;
