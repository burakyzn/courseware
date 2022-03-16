import { StyleSheet, FlatList, View, Text } from "react-native";
import React from "react";
import responsiveFonts from "../../utils/ResponsiveFonts";
import COLORS from "../../constants/Colors";
import CourseCard from "./CourseCard";

const CourseCardList = (props) => {
  const { data, style, header, leftText, rightText } = props;

  return (
    <View style={[styles.container, style]}>
      {header ? (
        <View>
          <View style={styles.header}>
            {leftText ? (
              <Text style={styles.headerLeftText}>{leftText}</Text>
            ) : null}
            {rightText ? (
              <Text style={styles.headerRightText}>{rightText}</Text>
            ) : null}
          </View>
        </View>
      ) : null}
      <FlatList
        data={data}
        style={styles.courseList}
        renderItem={({ item }) => {
          return (
            <View style={styles.courseWrapper}>
              <CourseCard
                title={item.title}
                author={item.author}
                score={item.score}
                level={item.level}
                price={item.price}
              />
            </View>
          );
        }}
        keyExtractor={(course) => course.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CourseCardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  courseWrapper: {
    marginBottom: 20,
  },
  courseList: {
    marginTop: "5%",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  headerLeftText: {
    fontFamily: "DMSans_700Bold",
    fontSize: responsiveFonts(14),
  },
  headerRightText: {
    fontFamily: "DMSans_700Bold",
    color: COLORS.lightBaseThree,
    fontSize: responsiveFonts(12),
  },
});
