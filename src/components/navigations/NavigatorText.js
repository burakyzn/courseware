import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useDispatch } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import COLORS from '~constants/Colors';
import { closeTabBar } from '~features/TabBarSlice';

function NavigatorText(props) {
  const { width, height, text, onPress, showBasketIcon } = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleShowIcon = () => ({ display: showBasketIcon ? null : 'none' });

  return (
    <View width={width} height={height}>
      <View style={styles.container}>
        <View style={styles.leftWrapper}>
          <Ionicons
            name="chevron-back-outline"
            size={32}
            color={COLORS.lightBaseOne}
            onPress={onPress}
          />
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={[styles.rightWrapper, handleShowIcon()]}>
          <Ionicons
            name="cart-outline"
            size={32}
            color={COLORS.lightBaseOne}
            onPress={() => {
              dispatch(closeTabBar());
              navigation.navigate('Basket');
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default NavigatorText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: COLORS.lightBaseOne,
    fontFamily: 'DMSans_400Regular',
    marginLeft: 20,
  },
  rightWrapper: {
    justifyContent: 'center',
    paddingRight: 5,
  },
});
