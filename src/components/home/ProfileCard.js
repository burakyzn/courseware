import { View, Image, StyleSheet, Text } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import responsiveFonts from "../../utils/ResponsiveFonts";
import { Ionicons } from "@expo/vector-icons";

const ProfileCard = (props) => {
  const { width, height } = props;

  const handleImageStyle = () => {
    return {
      width: height,
      height: height,
      borderRadius: height / 2,
      marginRight: 20,
    };
  };

  return (
    <View height={height} width={width}>
      <View style={styles.container}>
        <View style={styles.userInformation}>
          <Image
            source={require("../../../assets/profile-photo.png")}
            style={handleImageStyle()}
          ></Image>
          <View>
            <Text style={styles.welcomeMessage}>Welcome back</Text>
            <Text style={styles.fullName}>Burak Yazan</Text>
          </View>
        </View>
        <Ionicons
          style={styles.notification}
          name="notifications-outline"
          size={height * 0.75}
          color={COLORS.lightBaseOne}
        />
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  userInformation: {
    flexDirection: "row",
    alignItems: "center",
  },
  fullName: {
    color: COLORS.lightBaseOne,
    fontSize: responsiveFonts(14),
    fontFamily: "DMSans_700Bold",
  },
  welcomeMessage: {
    color: COLORS.lightBaseOne,
    fontSize: responsiveFonts(12),
    fontFamily: "DMSans_400Regular",
  },
  notification: {
    justifyContent: "center",
    alignSelf: "center",
  },
});
