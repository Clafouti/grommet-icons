var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var LinkUp = function LinkUp(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'LinkUp' }, props),
    React.createElement('path', { fill: 'none', stroke: '#000', strokeWidth: '2', d: 'M12,2 L12,22 M3,11 L12,2 L21,11' })
  );
};

export default LinkUp;