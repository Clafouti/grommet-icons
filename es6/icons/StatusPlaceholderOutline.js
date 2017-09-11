var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var StatusPlaceholderOutline = function StatusPlaceholderOutline(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'StatusPlaceholderOutline' }, props),
    React.createElement('rect', { width: '20', height: '20', x: '2', y: '2', fill: 'none', stroke: '#000', strokeWidth: '2', rx: '2' })
  );
};

export default StatusPlaceholderOutline;