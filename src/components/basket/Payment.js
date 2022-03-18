import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

import Colors from '~constants/Colors';
import { cleanBasket, totalPriceSelector } from '~features/BasketSlice';
import responsiveFonts from '~utils/ResponsiveFonts';

function Payment() {
  const dispatch = useDispatch();
  const totalPrice = useSelector(totalPriceSelector);

  const handleCheckout = () => {
    dispatch(cleanBasket());
  };

  return (
    <View style={styles.container}>
      <View style={styles.totalPriceWrapper}>
        <Text style={styles.totalPriceText}>Total Price</Text>
        <Text style={styles.totalPriceValue}>{totalPrice} $</Text>
      </View>
      <View style={styles.buttonCheckoutWrapper}>
        <Button
          title="Checkout Now"
          buttonStyle={styles.buttonCheckoutStyle}
          containerStyle={styles.buttonCheckoutContainer}
          onPress={handleCheckout}
        />
      </View>
    </View>
  );
}

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  totalPriceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '5%',
  },
  totalPriceText: {
    color: Colors.lightBaseThree,
    fontSize: responsiveFonts(12),
    fontFamily: 'DMSans_700Bold',
  },
  totalPriceValue: {
    fontSize: responsiveFonts(12),
    fontFamily: 'DMSans_700Bold',
    color: Colors.darkBaseOne,
  },
  buttonCheckoutWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonCheckoutStyle: {
    backgroundColor: Colors.success,
    borderRadius: 10,
    height: '100%',
  },
  buttonCheckoutContainer: {
    alignSelf: 'center',
    width: '100%',
    marginTop: '5%',
  },
});
