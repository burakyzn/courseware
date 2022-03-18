import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import COLORS from '~constants/Colors';
import responsiveFonts from '~utils/ResponsiveFonts';

function TabButton(props) {
  const { text, onPress, condition } = props;

  return (
    <TouchableOpacity
      style={[styles.tab, condition ? styles.selectedTabContainer : null]}
      onPress={onPress}
    >
      <Text style={[styles.tabText, condition ? styles.selectedTab : styles.nonSelectedTab]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

export default TabButton;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTabContainer: {
    backgroundColor: COLORS.lightBaseTwo,
  },
  selectedTab: {
    color: COLORS.darkBaseOne,
  },
  nonSelectedTab: {
    color: COLORS.lightBaseThree,
  },
  tabText: {
    fontFamily: 'DMSans_700Bold',
    fontSize: responsiveFonts(14),
  },
});
