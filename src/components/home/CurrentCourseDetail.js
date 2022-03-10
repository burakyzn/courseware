import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";

const CurrentCourseDetail = ({ logo, width, height, style }) => {
  if (!width || !height) return <View />;

  return (
    <View style={[styles.container, style]}>
      <View>
        <Text style={[styles.descriptionText, { width: width - height - 15 }]}>
          Zero to hero Java Spring Boot crash course
        </Text>
        <Text style={styles.author}>- By Barış Ertakuş</Text>
      </View>
      <Image style={{ height: height, width: height }} source={logo}></Image>
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
