import React from 'react';
import { ActivityIndicator } from 'react-native';
import { string } from 'prop-types';

const LoadingIndicator = ({ size, color }) => (
  <ActivityIndicator color={color} size={size} />
);

LoadingIndicator.propTypes = {
  color: string,
  size: string,
};

LoadingIndicator.defaultProps = {
  color: '#FFF',
  size: 'small',
};

export default LoadingIndicator;
