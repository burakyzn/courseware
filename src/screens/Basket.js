import React from 'react';
import { StyleSheet, View } from 'react-native';

import { useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import Payment from '~components/basket/Payment';
import CourseCardList from '~components/core/CourseCardList';
import Divider from '~components/core/Divider';
import NavigatorText from '~components/navigations/NavigatorText';
import COLORS from '~constants/colors';
import { itemsSelector } from '~features/BasketSlice';
import {PAGES_TITLE} from '~constants/pages';

function Basket() {
  const navigation = useNavigation();

  const coursesInBasket = useSelector(itemsSelector);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width="100%"
            height={50}
            text={PAGES_TITLE.basket}
            onPress={goBack}
            showBasketIcon={false}
          />
        </View>
      </View>
      <View style={styles.lowerPart}>
        <CourseCardList style={styles.courseList} data={coursesInBasket} />
        <Divider />
        <Payment />
      </View>
    </View>
  );
}

export default Basket;

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
    paddingVertical: 25,
  },
  navigatorWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  courseList: {
    flex: 5,
  },
});
