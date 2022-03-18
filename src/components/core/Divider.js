import React from 'react';
import { StyleSheet, View } from 'react-native';

import COLORS from 'constants/Colors';

function Divider() {
  return <View style={styles.divider} />;
}

export default Divider;

const styles = StyleSheet.create({
  divider: {
    borderTopWidth: 1,
    width: '100%',
    borderColor: COLORS.lightBaseThree,
  },
});
