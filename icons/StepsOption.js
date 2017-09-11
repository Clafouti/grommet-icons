'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StepsOption = function StepsOption(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'StepsOption' }, props),
    _react2.default.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M24,9 L19,9 L19,14 L14,14 L14,19 L9,19 L9,24 M1,24 L1,16.9970301 C1,16.4463856 1.31329632,15.6867037 1.70336215,15.2966378 L15.2966378,1.70336215 C15.685094,1.31490596 16.4530363,1 16.9970301,1 L24,1' })
  );
};

exports.default = StepsOption;