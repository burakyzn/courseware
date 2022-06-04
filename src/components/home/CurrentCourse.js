import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';

import COLORS from '~constants/colors';
import responsiveFonts from '~utils/ResponsiveFonts';

import ProgressBar from './ProgressBar';

function CurrentCourse(props) {
  const { width, height, progression, title, author } = props;

  return (
    <View height={height} width={width}>
      <View style={styles.container}>
        <View style={styles.descriptionWrapper}>
          <View style={styles.description}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>- By {author}</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Ionicons name="flask-sharp" size={65} color="black" />
          </View>
        </View>
        <View style={styles.progressWrapper}>
          <View style={styles.progressTextWrapper}>
            <Ionicons name="trophy" size={32} color="black" />
            <Text style={styles.progression}>Current Progress: </Text>
            <Text style={styles.percentage}>{progression}</Text>
          </View>
          <View style={styles.progressBarWrapper}>
            <ProgressBar progression={progression} />
          </View>
        </View>
      </View>
    </View>
  );
}

CurrentCourse.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  progression: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default CurrentCourse;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightBaseOne,
    flex: 1,
    borderRadius: 10,
    padding: 15,
  },
  descriptionWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: COLORS.darkBaseOne,
    fontSize: responsiveFonts(14),
    fontFamily: 'DMSans_400Regular',
  },
  description: {
    flex: 3,
  },
  descriptionText: {
    color: COLORS.darkBaseOne,
    fontSize: responsiveFonts(14),
    fontFamily: 'DMSans_400Regular',
  },
  author: {
    marginTop: '5%',
    fontSize: responsiveFonts(12),
    color: COLORS.darkBaseOne,
    fontFamily: 'DMSans_400Regular_Italic',
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progression: {
    marginLeft: 10,
    alignContent: 'center',
    justifyContent: 'center',
    fontFamily: 'DMSans_400Regular',
    fontSize: responsiveFonts(14),
    color: COLORS.lightBaseThree,
  },
  percentage: {
    marginLeft: 5,
    fontFamily: 'DMSans_400Regular',
    fontSize: responsiveFonts(14),
    color: COLORS.darkBaseOne,
  },
  progressWrapper: {
    flex: 1,
  },
  progressTextWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarWrapper: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
