var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Atm = function Atm(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Atm' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M4,10 L1,10 L1,6 L23,6 L23,10 L20,10 M6,6 L18,6 L18,20.0059397 C18,21.1072288 17.0980496,22 15.9914698,22 L8.0085302,22 C6.8992496,22 6,21.1054862 6,20.0059397 L6,6 Z M13,18 L16,18 M13,15 L16,15 M13,12 L16,12 M10,22 L10,6 M3,2 L6,2 M8,2 L11,2 M13,2 L16,2 M18,2 L21,2' })
  );
};

export default Atm;