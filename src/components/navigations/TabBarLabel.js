import React from 'react';
import { StyleSheet, Text } from 'react-native';

import COLORS from '~constants/Colors';

function TabBarLabel({ focused, text }) {
  return (
    <Text style={[styles.text, focused ? styles.activeColor : styles.defaultColor]}>{text}</Text>
  );
}

export default TabBarLabel;

const styles = StyleSheet.create({
  text: {
    bottom: 10,
    fontSize: 10,
    fontFamily: 'DMSans_400Regular',
  },
  activeColor: {
    color: COLORS.secondary,
  },
  defaultColor: {
    color: COLORS.darkBaseOne,
  },
});
