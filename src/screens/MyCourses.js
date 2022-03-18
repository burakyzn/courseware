import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import COLORS from 'constants/Colors';
import NavigatorText from 'components/navigations/NavigatorText';
import ProgressTabs from 'components/myCourses/ProgressTabs';

function MyCourses() {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width="100%"
            height={50}
            text="My Courses"
            onPress={() => {
              navigation.navigate('HomeStack');
            }}
            showBasketIcon
          />
        </View>
      </View>
      <View style={styles.lowerPart}>
        <ProgressTabs />
      </View>
    </View>
  );
}

export default MyCourses;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  upperPart: {
    flex: 1,
    paddingHorizontal: 25,
  },
  lowerPart: {
    flex: 10,
    backgroundColor: COLORS.lightBaseTwo,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
  },
  navigatorWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
