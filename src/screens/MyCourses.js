import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import ProgressTabs from '~components/myCourses/ProgressTabs';
import NavigatorText from '~components/NavigatorText';
import COLORS from '~constants/colors';
import {PAGES_STACK ,PAGES_TITLE} from '~constants/pages';

function MyCourses() {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width="100%"
            height={50}
            text={PAGES_TITLE.courseDetail}
            onPress={() => {
              navigation.navigate(PAGES_STACK.homeStack);
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
