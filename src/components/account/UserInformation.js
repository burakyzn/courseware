import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import COLORS from "constants/Colors";
import responsiveFonts from "utils/ResponsiveFonts";

const hp = Dimensions.get("window").height;

const UserInformation = () => {
  const handleImageStyle = () => {
    let ratio = hp * 0.13;

    return {
      width: ratio,
      height: ratio,
      borderRadius: ratio / 2,
      marginBottom: 20,
    };
  };

  return (
    <View style={styles.container}>
      <Image
        style={handleImageStyle()}
        source={require("assets/profile-photo.png")}
      ></Image>
      <Text style={styles.fullName}>Burak Yazan</Text>
      <Text style={styles.email}>brkyznn@gmail.com</Text>
    </View>
  );
};

export default UserInformation;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  fullName: {
    color: COLORS.lightBaseOne,
    fontSize: responsiveFonts(24),
    fontFamily: "DMSans_700Bold",
  },
  email: {
    color: COLORS.lightBaseOne,
    fontSize: responsiveFonts(14),
    fontFamily: "DMSans_400Regular",
  },
});
