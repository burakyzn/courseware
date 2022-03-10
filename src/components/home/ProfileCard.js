import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";

const { width, height } = Dimensions.get("window");
const CONTAINER_WIDTH = width - 50;
const CONTAINER_HIGHT = height * 0.06;

const ProfileCard = () => {
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
    color: COLORS.lightText,
    fontSize: 10,
  },
  fullName: {
    color: COLORS.lightText,
    fontSize: 14,
    fontWeight: "bold",
  },
  bell: {
    height: CONTAINER_HIGHT * 0.5,
    width: CONTAINER_HIGHT * 0.5,
    justifyContent: "center",
    alignSelf: "center",
  },
});
