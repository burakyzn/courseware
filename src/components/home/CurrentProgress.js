import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';

import Colors from '~constants/Colors';

const actievementPhoto = require('~assets/achievement.png');

function CurrentProgress({ height, progression }) {
  return (
    <View style={styles.container}>
      <Image style={{ width: height, height }} source={actievementPhoto} />
      <Text style={styles.progression}>Current Progress: </Text>
      <Text style={styles.percentage}>{progression}</Text>
    </View>
  );
}

CurrentProgress.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  progression: PropTypes.string.isRequired,
};

export default CurrentProgress;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  progression: {
    marginLeft: 10,
    alignContent: 'center',
    justifyContent: 'center',
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: Colors.lightBaseThree,
  },
  percentage: {
    marginLeft: 5,
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    color: Colors.darkBaseOne,
  },
});
