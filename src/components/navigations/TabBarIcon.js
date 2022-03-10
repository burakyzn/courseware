import { StyleSheet, Image } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";

const TabBarIcon = ({ focused, source }) => {
  return (
    <Image
      source={source}
      style={[styles.icon, focused ? styles.activeColor : styles.defultColor]}
      resizeMode="contain"
    />
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  activeColor: {
    tintColor: COLORS.tabBarSelected,
  },
  defultColor: {
    tintColor: COLORS.tabBarDefault,
  },
  icon: {
    height: 22,
    width: 22,
  },
});
