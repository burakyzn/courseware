import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import COLORS from "constants/Colors";
import { CheckBox } from "react-native-elements";
import responsiveFonts from "utils/ResponsiveFonts";

const CourseContext = () => {
  const [isLectureCompleted, setIsLectureCompleted] = useState(false);

  const courseContentMockData = [
    {
      title: "Hello World",
      data: ["Introduction to JavaScript", "First Application", "Debug & Run"],
    },
    {
      title: "Loops",
      data: ["For", "ForEach", "While", "Do While"],
    },
  ];

  const renderLecture = (item) => {
    return (
      <TouchableOpacity style={styles.lessonContainer}>
        <View>
          <Text style={styles.lectureName}>{item}</Text>
          <Text style={styles.lectureType}>Video • 4 Min </Text>
        </View>
        <CheckBox
          center
          checked={isLectureCompleted}
          checkedColor={COLORS.secondary}
          onPress={() => setIsLectureCompleted(!isLectureCompleted)}
        />
      </TouchableOpacity>
    );
  };

  const renderLectureGroupHeader = (title) => {
    return (
      <View style={styles.lectureGroupHeader}>
        <Text style={styles.lectureGroupName}>Section : {title}</Text>
        <Text style={styles.lectureGroupType}>3/5 Unit • 4 Min</Text>
      </View>
    );
  };

  return (
    <SectionList
      sections={courseContentMockData}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => renderLecture(item)}
      renderSectionHeader={({ section: { title } }) =>
        renderLectureGroupHeader(title)
      }
    />
  );
};

export default CourseContext;

const styles = StyleSheet.create({
  lessonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lectureName: {
    color: COLORS.darkBaseOne,
    fontSize: responsiveFonts(14),
    fontFamily: "DMSans_400Regular",
    paddingHorizontal: 25,
  },
  lectureType: {
    fontSize: responsiveFonts(10),
    color: COLORS.lightBaseThree,
    fontFamily: "DMSans_400Regular",
    paddingHorizontal: 25,
  },
  lectureGroupName: {
    fontSize: responsiveFonts(14),
    marginBottom: 5,
    color: COLORS.darkBaseOne,
    marginTop: 15,
  },
  lectureGroupType: {
    fontSize: responsiveFonts(10),
    color: COLORS.lightBaseThree,
  },
  lectureGroupHeader: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.lightBaseThree,
    paddingHorizontal: 25,
    backgroundColor: COLORS.lightBaseOne,
  },
});
