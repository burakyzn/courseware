import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import CurrentCourse from "../components/home/CurrentCourse";
import ProfileCard from "../components/home/ProfileCard";
import COLORS from "../constants/Colors";
import Course from "../components/home/Course";
import AppLoading from "expo-app-loading";
import { useFonts, DMSans_700Bold } from "@expo-google-fonts/dm-sans";

const { width, height } = Dimensions.get("window");

const Home = () => {
  let [fontsLoaded] = useFonts({
    DMSans_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <View style={styles.container}>
      <ProfileCard />
      <View style={styles.bottomContainer}></View>
      <CurrentCourse
        width={width - 50}
        height={height * 0.23}
        style={{ top: 95 }}
      />
      <Text
        style={{ width: width - 50, top: 110, fontFamily: "DMSans_700Bold" }}
      >
        Recommendation
      </Text>
      <Course width={width - 50} height={height * 0.15} style={{ top: 120 }} />
      <Course width={width - 50} height={height * 0.15} style={{ top: 130 }} />
      <Course width={width - 50} height={height * 0.15} style={{ top: 140 }} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
  },
  bottomContainer: {
    height: height * 0.65,
    backgroundColor: COLORS.lightBaseTwo,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
