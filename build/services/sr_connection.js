'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var connection = _mysql2.default.createConnection({
  host: process.env.SR_HOST,
  user: process.env.SR_USER,
  password: process.env.SR_PASS
});

console.log(process.env.SR_USER);
exports.default = connection;