import { StyleSheet, Image } from "react-native";
import React from "react";

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
    tintColor: "#FF8181",
  },
  defultColor: {
    tintColor: "#161719",
  },
  icon: {
    height: 22,
    width: 22,
  },
});
