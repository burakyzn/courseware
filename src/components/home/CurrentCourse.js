import { View, StyleSheet, Dimensions, Text } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import ProgressBar from "../../components/home/ProgressBar";
import CurrentProgress from "../../components/home/CurrentProgress";
import CurrentCourseDetail from "../../components/home/CurrentCourseDetail";

const CurrentCourse = ({ width, height, style }) => {
  if (!width || !height) return <View />;

  return (
    <View style={[styles.container, style, { width: width, height: height }]}>
      <View style={{ height: height * 0.35 }}>
        <CurrentCourseDetail width={width - 30} height={height * 0.35} />
      </View>
      <View style={{ height: height * 0.2 }}>
        <CurrentProgress progression={"25%"} height={height * 0.2} />
      </View>
      <View style={{ height: height * 0.1, width: width - 30 }}>
        <ProgressBar progression={"25%"} />
      </View>
    </View>
  );
};

export default CurrentCourse;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightBaseOne,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
});
