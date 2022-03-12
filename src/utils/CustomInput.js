import React from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Input } from "react-native-elements";
import COLORS from "../constants/Colors";

const CustomInput = ({ placheHolder, value, ...props }) => {
  return (
    <Input
      placeholder={placheHolder}
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      placeholderTextColor={COLORS.lightBaseThree}
      inputStyle={styles.input}
      {...props}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 0,
    backgroundColor: COLORS.lightBaseOne,
    padding: 7,
    paddingLeft: 20,
    borderRadius: 10,
  },
  container: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  input: {
    fontSize: 14,
  },
});
