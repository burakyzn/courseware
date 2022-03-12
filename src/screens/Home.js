import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CurrentCourse from "../components/course/CurrentCourse";
import ProfileCard from "../components/home/ProfileCard";
import COLORS from "../constants/Colors";
import Course from "../components/course/Course";
import responsiveFonts from "../utils/ResponsiveFonts";
const wp = Dimensions.get("window").width;
const hp = Dimensions.get("window").height;

const Home = () => {
  const [currentCourse, setCurruntCourse] = useState({
    title: "Zero to hero Java Spring Boot crash course",
    author: "Barış Ertakuş",
    progression: "25%",
  });
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
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.bottomContainer}></View>
        <View style={styles.container}>
          <View style={styles.profileWrapper}>
            <ProfileCard />
          </View>
          <View style={styles.currentCourseWrapper}>
            <CurrentCourse
              width={wp - 50}
              height={hp * 0.23}
              progression={currentCourse.progression}
              title={currentCourse.title}
              author={currentCourse.author}
            />
          </View>
          <Text style={styles.recommendationText}>Recommendation {}</Text>
          <View style={styles.scrollWrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
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
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileWrapper: {
    marginTop: "5%",
  },
  currentCourseWrapper: {
    marginTop: "5%",
  },
  recommendationText: {
    width: wp - 50,
    fontFamily: "DMSans_700Bold",
    fontSize: responsiveFonts(14),
    marginTop: "5%",
  },
  courseWrapper: {
    marginBottom: 20,
  },
  scrollWrapper: {
    marginTop: "5%",
    height: hp * 0.447,
  },
  bottomContainer: {
    height: hp * 0.65,
    backgroundColor: COLORS.lightBaseTwo,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
