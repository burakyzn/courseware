import React from 'react';
import { StyleSheet, View } from 'react-native';

import PropTypes from 'prop-types';

import COLORS from '~constants/colors';

function ProgressBar({ progression }) {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.progression, width: progression }} />
    </View>
  );
}

ProgressBar.propTypes = {
  progression: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

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
