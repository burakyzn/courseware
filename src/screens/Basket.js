import { View, StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import COLORS from "../constants/Colors";
import NavigatorText from "../components/navigations/NavigatorText";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { cleanBasket } from "../features/basketSlice";
import { Button } from "react-native-elements";
import { itemsSelector, totalPriceSelector } from "../features/basketSlice";
import Course from "../components/course/Course";
import responsiveFonts from "../utils/ResponsiveFonts";

const Basket = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const totalPrice = useSelector(totalPriceSelector);
  const coursesInBasket = useSelector(itemsSelector);

  const goBack = () => {
    navigation.goBack();
  };

  const handleCheckout = () => {
    dispatch(cleanBasket());
  };

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width={"100%"}
            height={50}
            text={"Basket"}
            onPress={goBack}
            showBasketIcon={false}
          />
        </View>
      </View>
      <View style={styles.lowerPart}>
        <View style={styles.courseArea}>
          <FlatList
            style={styles.coursesInBasket}
            data={coursesInBasket}
            renderItem={({ item }) => {
              return (
                <View style={styles.courseWrapper}>
                  <Course
                    title={item.title}
                    author={item.author}
                    score={item.score}
                    level={item.level}
                    price={item.price}
                  />
                </View>
              );
            }}
            keyExtractor={(course) => course.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.divider}></View>
        <View style={styles.paymentArea}>
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
      </View>
    </View>
  );
};

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
    justifyContent: "flex-end",
  },
  divider: {
    borderTopWidth: 1,
    borderColor: COLORS.lightBaseThree,
  },
  paymentArea: {
    flex: 1,
  },
  totalPriceWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
  },
  totalPriceText: {
    color: COLORS.lightBaseThree,
    fontSize: responsiveFonts(12),
    fontFamily: "DMSans_700Bold",
  },
  totalPriceValue: {
    fontSize: responsiveFonts(12),
    fontFamily: "DMSans_700Bold",
    color: COLORS.darkBaseOne,
  },
  buttonCheckoutWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonCheckoutStyle: {
    backgroundColor: COLORS.success,
    borderRadius: 10,
    height: "100%",
  },
  buttonCheckoutContainer: {
    alignSelf: "center",
    width: "100%",
    marginTop: "5%",
  },
  courseArea: {
    flex: 5,
    paddingVertical: 20,
  },
  coursesInBasket: {
    width: "100%",
  },
  courseWrapper: {
    marginBottom: 20,
  },
});
