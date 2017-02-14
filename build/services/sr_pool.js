'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var pool = _mysql2.default.createPool({
  connectionLimit: 10,
  host: process.env.SR_HOST,
  user: process.env.SR_USER,
  password: process.env.SR_PASS
});

exports.default = pool;