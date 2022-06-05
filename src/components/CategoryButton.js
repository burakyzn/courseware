import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import COLORS from '~constants/colors';
import responsiveFonts from '~utils/responsiveFonts';

function CategoryButton(props) {
  const { text, backgroundColor, textColor, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor }]}>
      <Text style={[{ color: textColor }, styles.text]}>{text}</Text>
    </TouchableOpacity>
  );
}

CategoryButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  onPress : PropTypes.func
};

CategoryButton.defaultProps = {
  backgroundColor: COLORS.primary,
  textColor: COLORS.lightBaseOne,
  onPress: () => {}
};

export default CategoryButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderRadius: 30,
    justifyContent: 'center',
  },
  text: {
    fontSize: responsiveFonts(14),
  },
});
