import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import COLORS from '~constants/colors';

function AchievementDetail(props) {
  const {studentCount, reviewCount} = props;

  return (
    <View style={styles.container}>
      <View style={styles.totalStudent}>
        <Ionicons name="trophy-outline" size={45} color={COLORS.lightBaseOne} />
        <View>
          <Text style={styles.actievementText}>Total Students</Text>
          <Text style={styles.actievementText}>{studentCount}</Text>
        </View>
      </View>
      <View style={styles.reviews}>
        <Ionicons name="trophy-outline" size={45} color={COLORS.lightBaseOne} />
        <View>
          <Text style={styles.actievementText}>Reviews</Text>
          <Text style={styles.actievementText}>{reviewCount}</Text>
        </View>
      </View>
    </View>
  );
}

export default AchievementDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
  },
  reviews: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalStudent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actievementText: {
    color: COLORS.lightBaseOne,
    paddingLeft: 10,
  },
});
