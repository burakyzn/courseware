import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import Colors from '~constants/Colors';
import responsiveFonts from '~utils/ResponsiveFonts';

function CategoryButton(props) {
  const { text, backgroundColor, textColor } = props;

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor }]}>
      <Text style={[{ color: textColor }, styles.text]}>{text}</Text>
    </TouchableOpacity>
  );
}

CategoryButton.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

CategoryButton.defaultProps = {
  backgroundColor: Colors.primary,
  textColor: Colors.lightBaseOne,
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
