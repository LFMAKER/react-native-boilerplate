import React from 'react';
import { element } from 'prop-types';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default DismissKeyboard;

DismissKeyboard.propTypes = {
  children: element.isRequired,
};
