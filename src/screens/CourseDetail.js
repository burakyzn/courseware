import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import COLORS from "../constants/Colors";
import NavigatorText from "../components/navigations/NavigatorText";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { openTabBar } from "../features/tabBarSlice";
const wp = Dimensions.get("window").width;
const hp = Dimensions.get("window").height;

const CourseDetail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goBack = () => {
    dispatch(openTabBar());
    navigation.goBack();
  };

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width={wp - 50}
            height={50}
            text={"Course Detail"}
            onPress={goBack}
          />
        </View>
      </View>
      <View style={styles.lowerPart}></View>
    </View>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  upperPart: {
    flex: 1,
    alignItems: "center",
  },
  lowerPart: {
    flex: 6.3,
    backgroundColor: COLORS.lightBaseTwo,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  navigatorWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
