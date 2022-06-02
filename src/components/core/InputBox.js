import React from 'react';
import { StyleSheet } from 'react-native';

import PropTypes from 'prop-types';
import { Input } from 'react-native-elements';

import Colors from '~constants/Colors';
import responsiveFonts from '~utils/ResponsiveFonts';

function InputBox(props) {
  const { placeholder, rightIcon, onChangeText } = props;

  return (
    <Input
      placeholder={placeholder}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      placeholderTextColor={Colors.lightBaseThree}
      inputStyle={styles.input}
      rightIcon={rightIcon}
      onChangeText={onChangeText}
    />
  );
}

InputBox.propTypes = {
  placeholder: PropTypes.string,
  rightIcon: PropTypes.element,
  onChangeText: PropTypes.func
};

InputBox.defaultProps = {
  placeholder: null,
  rightIcon: null,
  onChangeText: null
};

export default InputBox;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: Colors.lightBaseOne,
    padding: 7,
    paddingLeft: 20,
    borderRadius: 10,
  },
  container: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  input: {
    fontSize: responsiveFonts(14),
  },
});
