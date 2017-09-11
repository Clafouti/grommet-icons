var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var Flag = function Flag(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'Flag' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M2,24 L2,2 C10,-1.5238864 13,6.64375708 22,2 L22,14 C14,18.895222 9,9.89651097 2,14' })
  );
};

export default Flag;