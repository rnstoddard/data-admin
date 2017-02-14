'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sr_pool = require('./sr_pool');

var _sr_pool2 = _interopRequireDefault(_sr_pool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SR = function () {
  function SR() {
    _classCallCheck(this, SR);

    var self = this;
    _sr_pool2.default.getConnection(function (err, conn) {
      if (err) console.log(err);else {
        self.conn = conn;
      }
    });
  }

  _createClass(SR, [{
    key: 'close',
    value: function close() {
      this.conn.release();
    }
  }, {
    key: 'issueInfo',
    value: function issueInfo(id, action) {
      var qString = 'SELECT * FROM `srs-schema`.issue_type_status\n      ';
      if (id) {
        qString += ' WHERE Issue_id = ' + id + ';';
      }
      this.query(qString, action);
    }
  }, {
    key: 'equipInfo',
    value: function equipInfo(id, action) {
      var qString = 'SELECT * FROM `srs-schema`.equip_info\n      ';
      if (id) {
        qString += ' WHERE Eq_piece_id = ' + id + ';';
      }
      this.query(qString, action);
    }
  }, {
    key: 'srInfo',
    value: function srInfo(num, action) {
      var qString = 'SELECT *\n      FROM `srs-schema`.`sr_issue`\n      ';
      if (num) {
        qString += ' WHERE SR_num = ' + num + ';';
      }
      this.query(qString, action);
    }

    //returns an array of customer information
    //if no id is given, then all customers are returned
    //if an id is specified, then returns the customer matching that id

  }, {
    key: 'custInfo',
    value: function custInfo(id, action) {
      var qString = 'SELECT *\n      FROM `srs-schema`.`cust_info`\n      ';
      if (id) {
        qString += 'WHERE Cust_id = ' + id + ';';
      }
      this.query(qString, action);
    }
  }, {
    key: 'query',
    value: function query(qString, action) {
      this.conn.query(qString, function (err, res, fields) {
        action(res);
      });
    }
  }]);

  return SR;
}();

exports.default = SR;