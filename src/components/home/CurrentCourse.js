import { View, StyleSheet, Dimensions, Text } from "react-native";
import React from "react";
import COLORS from "../../constants/Colors";
import ProgressBar from "../../components/home/ProgressBar";
import CurrentProgress from "../../components/home/CurrentProgress";
import CurrentCourseDetail from "../../components/home/CurrentCourseDetail";

const { width, height } = Dimensions.get("window");
const CONTAINER_WIDTH = width - 50;
const CONTAINER_HEIGHT = height * 0.23;

const CurrentCourse = ({ style }) => {
  return (
    <View style={[style, styles.container]}>
      <View style={{ height: CONTAINER_HEIGHT * 0.35 }}>
        <CurrentCourseDetail
          width={CONTAINER_WIDTH - 30}
          height={CONTAINER_HEIGHT * 0.35}
        />
      </View>
      <View style={{ height: CONTAINER_HEIGHT * 0.2 }}>
        <CurrentProgress progression={"25%"} height={CONTAINER_HEIGHT * 0.2} />
      </View>
      <View
        style={{ height: CONTAINER_HEIGHT * 0.1, width: CONTAINER_WIDTH - 30 }}
      >
        <ProgressBar progression={"25%"} />
      </View>
    </View>
  );
};

export default CurrentCourse;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightBaseOne,
    height: CONTAINER_HEIGHT,
    width: CONTAINER_WIDTH,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "space-evenly",
    borderRadius: 10,
  },
});
