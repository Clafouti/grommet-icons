var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Calculator = function Calculator(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Calculator' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M22,23 L2,23 L2,1 L22,1 L22,23 Z M16,17 L18,17 L18,19 L16,19 L16,17 Z M11,17 L13,17 L13,19 L11,19 L11,17 Z M16,12 L18,12 L18,14 L16,14 L16,12 Z M11,12 L13,12 L13,14 L11,14 L11,12 Z M6,17 L8,17 L8,19 L6,19 L6,17 Z M6,12 L8,12 L8,14 L6,14 L6,12 Z M18,9 L6,9 L6,5 L18,5 L18,9 Z' })
      )
    )
  );
};

export default Calculator;