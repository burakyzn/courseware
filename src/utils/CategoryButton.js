import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import COLORS from "../constants/Colors";

const CategoryButton = ({ text }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ color: COLORS.lightBaseOne }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    color: COLORS.primary,
    padding: 10,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
  },
});
