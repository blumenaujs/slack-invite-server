'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _httpStatus = require('http-status');

var _httpStatus2 = _interopRequireDefault(_httpStatus);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());

app.use(_bodyParser2.default.urlencoded({
  extended: true
}));

app.use('/api', (0, _cors2.default)({
  origin: false
}), _routes2.default);

app.set('port', process.env.port || process.env.PORT || 80);

app.use(function (request, response, next) {
  var err = new Error('Not Found');
  err.status = _httpStatus2.default.NOT_FOUND;
  next(err);
});

app.use(function (err, request, response) {
  response.status(err.status || _httpStatus2.default.INTERNAL_SERVER_ERROR).json({
    err: err.message
  });
});

exports.default = app;
//# sourceMappingURL=app.js.map