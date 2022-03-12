import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "../../constants/Colors";

const NavigatorText = (props) => {
  const { width, height, text, onPress } = props;

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
        <View style={styles.rightWrapper}>
          <Ionicons name="cart-outline" size={32} color={COLORS.lightBaseOne} />
        </View>
      </View>
    </View>
  );
};

export default NavigatorText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  leftWrapper: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: COLORS.lightBaseOne,
    fontFamily: "DMSans_400Regular",
    marginLeft: 20,
  },
  rightWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 5,
  },
});
