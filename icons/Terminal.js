'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Terminal = function Terminal(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Terminal' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,5 L8,11 L2,17 M9,17 L23,17' })
  );
};

exports.default = Terminal;