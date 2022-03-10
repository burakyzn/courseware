import { StyleSheet, Text } from "react-native";
import AppLoading from "expo-app-loading";
import React from "react";
import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import COLORS from "../../constants/Colors";

const TabBarLabel = ({ focused, text }) => {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
  });

  if (!fontsLoaded) return <AppLoading />;
  else
    return (
      <Text
        style={[
          styles.text,
          focused ? styles.activeColor : styles.defaultColor,
        ]}
      >
        {text}
      </Text>
    );
};

export default TabBarLabel;

const styles = StyleSheet.create({
  text: {
    bottom: 10,
    fontSize: 10,
    fontFamily: "DMSans_400Regular",
  },
  activeColor: {
    color: COLORS.tabBarSelected,
  },
  defaultColor: {
    color: COLORS.tabBarDefault,
  },
});
