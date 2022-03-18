import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Colors from '~constants/Colors';
import responsiveFonts from '~utils/ResponsiveFonts';

function CategoryButton(props) {
  const { text, backgroundColor, textColor } = props;

  const handleBackgroundColor = () => ({
    backgroundColor: backgroundColor || Colors.primary,
  });

  const handleTextColor = () => ({
    color: textColor || Colors.lightBaseOne,
  });

  return (
    <TouchableOpacity style={[styles.container, handleBackgroundColor()]}>
      <Text style={[handleTextColor(), styles.text]}>{text}</Text>
    </TouchableOpacity>
  );
}

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
