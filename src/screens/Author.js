import { View, StyleSheet, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/Colors";
import NavigatorText from "../components/navigations/NavigatorText";
import { useNavigation } from "@react-navigation/native";
import responsiveFonts from "../utils/ResponsiveFonts";
import { Ionicons } from "@expo/vector-icons";
import ProfileCard from "../components/core/ProfileCard";
import CourseCardList from "../components/core/CourseCardList";
import Divider from "../components/core/Divider";

const Author = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const [authorCourses, setAuthorCourses] = useState([
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
      price: 25,
    },
    {
      id: "6",
      title: "Data Visualization With D3.js",
      author: "Barış Ertakuş",
      score: 4.2,
      level: "All Level",
      price: 25,
    },
  ]);

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width={"100%"}
            height={50}
            text={"Author"}
            onPress={goBack}
            showBasketIcon={true}
          />
        </View>
      </View>
      <View style={styles.middlePart}>
        <ProfileCard
          fullName={"Burak Yazan"}
          summary={"Software Engineer"}
          iconName={"chatbox-ellipses-outline"}
        />
        <Divider />
        <View style={styles.achievementWrapper}>
          <View style={styles.totalStudent}>
            <Ionicons
              name="trophy-outline"
              size={45}
              color={COLORS.lightBaseOne}
            />
            <View>
              <Text style={styles.actievementText}>Total Students</Text>
              <Text style={styles.actievementText}>2405</Text>
            </View>
          </View>
          <View style={styles.reviews}>
            <Ionicons
              name="trophy-outline"
              size={45}
              color={COLORS.lightBaseOne}
            />
            <View>
              <Text style={styles.actievementText}>Reviews</Text>
              <Text style={styles.actievementText}>1205</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.lowerPart}>
        <View style={styles.coursesHeader}>
          <Text style={styles.coursesHeaderText}>Courses</Text>
          <Text style={styles.courseCount}>Total {authorCourses.length}</Text>
        </View>
        <CourseCardList data={authorCourses} style={styles.authorCourses} />
      </View>
    </View>
  );
};

export default Author;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  upperPart: {
    flex: 1,
    paddingHorizontal: 25,
  },
  middlePart: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  lowerPart: {
    flex: 7,
    backgroundColor: COLORS.lightBaseTwo,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  navigatorWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  authorWrapper: {
    width: "100%",
    marginTop: "5%",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  authorInformation: {
    flex: 1,
  },
  authorFullName: {
    fontSize: responsiveFonts(14),
    fontFamily: "DMSans_400Regular",
    color: COLORS.lightBaseOne,
  },
  authorSummary: {
    fontSize: responsiveFonts(12),
    fontFamily: "DMSans_400Regular",
    color: COLORS.lightBaseOne,
  },
  authorCourses: {
    marginTop: "3%",
    width: "100%",
  },
  courseWrapper: {
    marginBottom: 20,
  },
  coursesHeader: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  coursesHeaderText: {
    fontFamily: "DMSans_700Bold",
    fontSize: responsiveFonts(14),
  },
  courseCount: {
    fontFamily: "DMSans_700Bold",
    color: COLORS.lightBaseThree,
    fontSize: responsiveFonts(12),
  },
  achievementWrapper: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
  },
  reviews: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  totalStudent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  actievementText: {
    color: COLORS.lightBaseOne,
    paddingLeft: 10,
  },
});
