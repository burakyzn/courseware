import { View, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "constants/Colors";
import InputBox from "../core/InputBox";

const SearchBox = (props) => {
  const { width, height, placeholder } = props;
  return (
    <View width={width} height={height}>
      <View style={styles.container}>
        <InputBox
          rightIcon={<Ionicons name="search-outline" size={32} color="black" />}
          placheHolder={placeholder}
        />
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: COLORS.lightBaseOne,
  },
  iconWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderWrapper: {
    flex: 5,
    justifyContent: "center",
  },
  placeholder: {
    color: COLORS.lightBaseThree,
    marginLeft: 15,
  },
});
