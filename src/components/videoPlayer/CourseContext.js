import React, { useState } from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CheckBox } from 'react-native-elements';

import Colors from '~constants/Colors';
import responsiveFonts from '~utils/ResponsiveFonts';

function CourseContext() {
  const [isLectureCompleted, setIsLectureCompleted] = useState(false);

  const courseContentMockData = [
    {
      title: 'Hello World',
      data: ['Introduction to JavaScript', 'First Application', 'Debug & Run'],
    },
    {
      title: 'Loops',
      data: ['For', 'ForEach', 'While', 'Do While'],
    },
  ];

  const renderLecture = (item) => (
    <TouchableOpacity style={styles.lessonContainer}>
      <View>
        <Text style={styles.lectureName}>{item}</Text>
        <Text style={styles.lectureType}>Video • 4 Min </Text>
      </View>
      <CheckBox
        center
        checked={isLectureCompleted}
        checkedColor={Colors.secondary}
        onPress={() => setIsLectureCompleted(!isLectureCompleted)}
      />
    </TouchableOpacity>
  );

  const renderLectureGroupHeader = (title) => (
    <View style={styles.lectureGroupHeader}>
      <Text style={styles.lectureGroupName}>Section : {title}</Text>
      <Text style={styles.lectureGroupType}>3/5 Unit • 4 Min</Text>
    </View>
  );

  return (
    <SectionList
      sections={courseContentMockData}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => renderLecture(item)}
      renderSectionHeader={({ section: { title } }) => renderLectureGroupHeader(title)}
    />
  );
}

export default CourseContext;

const styles = StyleSheet.create({
  lessonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lectureName: {
    color: Colors.darkBaseOne,
    fontSize: responsiveFonts(14),
    fontFamily: 'DMSans_400Regular',
    paddingHorizontal: 25,
  },
  lectureType: {
    fontSize: responsiveFonts(10),
    color: Colors.lightBaseThree,
    fontFamily: 'DMSans_400Regular',
    paddingHorizontal: 25,
  },
  lectureGroupName: {
    fontSize: responsiveFonts(14),
    marginBottom: 5,
    color: Colors.darkBaseOne,
    marginTop: 15,
  },
  lectureGroupType: {
    fontSize: responsiveFonts(10),
    color: Colors.lightBaseThree,
  },
  lectureGroupHeader: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: Colors.lightBaseThree,
    paddingHorizontal: 25,
    backgroundColor: Colors.lightBaseOne,
  },
});
