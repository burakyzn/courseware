import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '~constants/Colors';

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
    backgroundColor: Colors.lightBaseTwo,
    borderRadius: 25,
  },
  progression: {
    height: '100%',
    backgroundColor: Colors.success,
    borderRadius: 25,
  },
});
