var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var CloudComputer = function CloudComputer(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'CloudComputer' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M6,6 L6,5 C6,2 7.5,1 10,1 L14,1 C16.5,1 18,2.5 18,5 L18,6 C21,6 23,8 23,11 C23,14 21,16 18,16 M14,6 L6,6 C3,6 1,7.5 1,11 C1,14.5 3,16 6,16 M8,19 L16,19 L16,12 L8,12 L8,19 Z M12,19 L12,23 L12,19 Z M9,23 L15,23 L9,23 Z' })
  );
};

export default CloudComputer;