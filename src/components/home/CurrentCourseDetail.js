import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
} from "@expo-google-fonts/dm-sans";
import COLORS from "../../constants/Colors";

const CurrentCourseDetail = ({ height, width }) => {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
  });

  if (!fontsLoaded) return <AppLoading />;
  else
    return (
      <View style={styles.container}>
        <View>
          <Text
            style={[styles.descriptionText, { width: width - height - 15 }]}
          >
            Zero to hero Java Spring Boot crash course
          </Text>
          <Text style={styles.author}>- Barış Ertakuş</Text>
        </View>
        <Image
          style={{ height: height, width: height }}
          source={require("../../../assets/course-logo.png")}
        ></Image>
      </View>
    );
};

export default CurrentCourseDetail;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  descriptionText: {
    flexWrap: "wrap",
    color: COLORS.darkBaseOne,
    fontFamily: "DMSans_400Regular",
    marginRight: 15,
  },
  author: {
    marginTop: 10,
    fontSize: 12,
    color: COLORS.darkBaseOne,
    fontFamily: "DMSans_400Regular_Italic",
  },
});
