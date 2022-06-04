import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import PageList from '~components/account/PageList';
import UserInformation from '~components/account/UserInformation';
import NavigatorText from '~components/navigations/NavigatorText';
import COLORS from '~constants/colors';

function Account() {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width="100%"
            height={50}
            text="Account"
            onPress={() => {
              navigation.goBack();
            }}
            showBasketIcon
          />
        </View>
      </View>
      <View style={styles.middlePart}>
        <UserInformation />
      </View>
      <View style={styles.lowerPart}>
        <PageList />
      </View>
    </View>
  );
}

export default Account;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  upperPart: {
    flex: 1,
    paddingHorizontal: 25,
  },
  middlePart: {
    flex: 4,
    justifyContent: 'center',
  },
  lowerPart: {
    flex: 6,
    backgroundColor: COLORS.lightBaseTwo,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  navigatorWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
