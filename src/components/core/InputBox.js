import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import COLORS from "constants/Colors";
import responsiveFonts from "utils/ResponsiveFonts";

const InputBox = ({ placheHolder, value, ...props }) => {
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

export default InputBox;

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
    fontSize: responsiveFonts(14),
  },
});
