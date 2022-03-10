import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import COLORS from "../../constants/Colors";

const { width, height } = Dimensions.get("window");
const CONTAINER_WIDTH = width - 50;
const CONTAINER_HIGHT = height * 0.06;

const ProfileCard = () => {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  else
    return (
      <View style={styles.container}>
        <Image
          source={require("../../../assets/profile-photo.png")}
          style={styles.profilePhoto}
        ></Image>
        <View style={styles.message}>
          <Text style={styles.welcomeMessage}>Welcome back</Text>
          <Text style={styles.fullName}>Burak Yazan</Text>
        </View>
        <Image
          source={require("../../../assets/bell.png")}
          style={styles.bell}
        ></Image>
      </View>
    );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    top: 70,
    height: CONTAINER_HIGHT,
    width: CONTAINER_WIDTH,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  profilePhoto: {
    height: CONTAINER_HIGHT,
    width: CONTAINER_HIGHT,
    borderRadius: CONTAINER_HIGHT / 2,
  },
  message: {
    paddingLeft: 10,
    width: CONTAINER_WIDTH - CONTAINER_HIGHT * 2,
    height: CONTAINER_HIGHT,
    justifyContent: "center",
  },
  welcomeMessage: {
    color: COLORS.lightBaseOne,
    fontSize: 10,
    fontFamily: "DMSans_400Regular",
  },
  fullName: {
    color: COLORS.lightBaseOne,
    fontSize: 14,
    fontFamily: "DMSans_700Bold",
  },
  bell: {
    height: CONTAINER_HIGHT * 0.5,
    width: CONTAINER_HIGHT * 0.5,
    justifyContent: "center",
    alignSelf: "center",
  },
});
