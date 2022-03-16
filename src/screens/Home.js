import React, { useState } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList } from "react-native";
import CurrentCourse from "../components/home/CurrentCourse";
import ProfileCard from "../components/core/ProfileCard";
import COLORS from "../constants/Colors";
import CourseCardList from "../components/core/CourseCardList";
import responsiveFonts from "../utils/ResponsiveFonts";
const hp = Dimensions.get("window").height;

const Home = () => {
  const [currentCourse, setCurruntCourse] = useState({
    title: "Zero to hero Java Spring Boot crash course",
    author: "Barış Ertakuş",
    progression: "25%",
  });
  const [recommendedCourses, setrecommendedCourses] = useState([
    {
      id: "1",
      title: "JavaScript Best Practices Course",
      author: "Burak Yazan",
      score: 4.5,
      level: "All Level",
      price: 25,
    },
    {
      id: "2",
      title: "Introduction to C++",
      author: "Şule Aktaş",
      score: 4.8,
      level: "All Level",
      price: 25,
    },
    {
      id: "3",
      title: "Introduction to Java",
      author: "Maftun Hashimli",
      score: 4.3,
      level: "All Level",
      price: 25,
    },
    {
      id: "4",
      title: "React Native Crash Course",
      author: "Burak Yazan",
      score: 4.5,
      level: "Entry Level",
      price: 25,
    },
    {
      id: "5",
      title: "Responsive Web Design",
      author: "Barış Ertakuş",
      score: 4.9,
      level: "All Level",
      price: "25",
    },
    {
      id: "6",
      title: "Data Visualization With D3.js",
      author: "Barış Ertakuş",
      score: 4.2,
      level: "All Level",
      price: "25",
    },
  ]);

  return (
    <View style={styles.background}>
      <View style={styles.bottomContainer}></View>
      <View style={styles.container}>
        <View style={styles.profileWrapper}>
          <ProfileCard
            fullName={"Burak Yazan"}
            summary={"Welcome back"}
            iconName={"notifications-outline"}
          />
        </View>
        <View style={styles.currentCourseWrapper}>
          <CurrentCourse
            width={"100%"}
            height={hp * 0.23}
            progression={currentCourse.progression}
            title={currentCourse.title}
            author={currentCourse.author}
          />
        </View>
        <CourseCardList
          data={recommendedCourses}
          style={styles.recommendedCourses}
          header={true}
          leftText={"Recommendation"}
        />
      </View>
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
    paddingHorizontal: 25,
  },
  profileWrapper: {
    marginTop: "5%",
    width: "100%",
    height: hp * 0.06,
  },
  currentCourseWrapper: {
    marginTop: "5%",
  },
  recommendationText: {
    width: "100%",
    fontFamily: "DMSans_700Bold",
    fontSize: responsiveFonts(14),
    marginTop: "5%",
  },
  courseWrapper: {
    marginBottom: 20,
  },
  recommendedCourses: {
    marginTop: "5%",
    width: "100%",
    flex: 1,
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
