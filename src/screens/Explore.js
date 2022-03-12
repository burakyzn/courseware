import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/Colors";
import NavigatorText from "../components/navigations/NavigatorText";
import Searchbox from "../components/Searchbox";
import CategoryButton from "../utils/CategoryButton";
import Course from "../components/course/Course";
import responsiveFonts from "../utils/ResponsiveFonts";
const wp = Dimensions.get("window").width;
const hp = Dimensions.get("window").height;

const Explore = () => {
  const [recommentedCategories, setRecommentedCategories] = useState([
    "Technology",
    "JavaScript",
    "React Native",
    "React",
    "Programming",
    "Swift",
    "Finance",
  ]);

  const [recommentedCourses, setrecommentedCourses] = useState([
    {
      title: "JavaScript Best Practices Course",
      author: "Burak Yazan",
      score: 4.5,
      level: "All Level",
      price: "25$",
    },
    {
      title: "Introduction to C++",
      author: "Şule Aktaş",
      score: 4.8,
      level: "All Level",
      price: "25$",
    },
    {
      title: "Introduction to Java",
      author: "Maftun Hashimli",
      score: 4.3,
      level: "All Level",
      price: "25$",
    },
    {
      title: "React Native Crash Course",
      author: "Burak Yazan",
      score: 4.5,
      level: "Entry Level",
      price: "25$",
    },
    {
      title: "Responsive Web Design",
      author: "Barış Ertakuş",
      score: 4.9,
      level: "All Level",
      price: "25$",
    },
    {
      title: "Data Visualization With D3.js",
      author: "Barış Ertakuş",
      score: 4.2,
      level: "All Level",
      price: "25$",
    },
  ]);

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText width={wp - 50} height={50} text={"Explore"} />
        </View>
      </View>
      <View style={styles.lowerPart}>
        <View style={styles.searchboxWrapper}>
          <Searchbox
            width={wp - 50}
            height={60}
            placeholder="Search for courses"
          />
        </View>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryText}>Browser Category</Text>
          <ScrollView
            style={{ marginTop: "2%" }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {recommentedCategories.map((category, i) => {
              return <CategoryButton key={i} text={category} />;
            })}
          </ScrollView>
        </View>
        <View style={styles.recommendedWrapper}>
          <Text style={styles.categoryText}>Recommended Courses</Text>
          <ScrollView
            style={{ marginTop: "5%", height: hp * 0.5 }}
            showsVerticalScrollIndicator={false}
          >
            {recommentedCourses.map((course, i) => {
              return (
                <View style={styles.courseWrapper} key={i}>
                  <Course
                    width={wp - 50}
                    height={hp * 0.15}
                    title={course.title}
                    author={course.author}
                    score={course.score}
                    level={course.level}
                    price={course.price}
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  upperPart: {
    flex: 1,
    alignItems: "center",
  },
  lowerPart: {
    flex: 6.3,
    backgroundColor: COLORS.lightBaseTwo,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  navigatorWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  searchboxWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "7%",
  },
  categoryWrapper: {
    marginTop: "5%",
    paddingLeft: 25,
  },
  categoryText: {
    fontFamily: "DMSans_700Bold",
    fontSize: responsiveFonts(14),
  },
  recommendedWrapper: {
    marginTop: "3%",
    paddingLeft: 25,
  },
  courseWrapper: {
    marginBottom: 20,
  },
});
