import React from "react";
import { StyleSheet, Text, View } from "react-native";
import COLORS from "../constants/Colors";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>This is home screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.activeBackground,
    alignItems: "center",
    justifyContent: "center",
  },
});
