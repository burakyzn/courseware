import React from 'react';
import { View, StyleSheet } from 'react-native';

import COLORS from 'constants/Colors';

function ProgressBar({ progression }) {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.progression, width: progression }} />
    </View>
  );
}

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.lightBaseTwo,
    borderRadius: 25,
  },
  progression: {
    height: '100%',
    backgroundColor: COLORS.success,
    borderRadius: 25,
  },
});
