'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_app2.default.listen(_app2.default.get('port'), function () {
  return console.log('server running at port ' + _app2.default.get('port'));
});
//# sourceMappingURL=index.js.map