'use strict';
import PropTypes from 'prop-types'
let React
if (process.env.NODE_ENV === 'production') {
  React = require('./cjs/react.production.min.js');
} else {
  React = require('./cjs/react.development.js');
}
React.PropTypes = PropTypes

module.exports = React
