import { View, StyleSheet, Dimensions, Text } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import CurrentCourseDetail from "../../components/home/CurrentCourseDetail";

const CurrentCourse = ({ width, height, style }) => {
  if (!width || !height) return <View />;

  return (
    <View style={[styles.container, style, { width: width, height: height }]}>
      <CurrentCourseDetail
        logo={require("../../../assets/course-logo.png")}
        width={width - 30}
        height={height - 30}
      />
    </View>
  );
};

export default CurrentCourse;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightBaseOne,
    justifyContent: "space-evenly",
    borderRadius: 10,
    padding: 15,
  },
});
