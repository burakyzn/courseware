import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/Colors";
import NavigatorText from "../components/navigations/NavigatorText";
import { useNavigation } from "@react-navigation/native";
import ProfileCard from "../components/core/ProfileCard";
import CourseCardList from "../components/core/CourseCardList";
import Divider from "../components/core/Divider";
import AchievementDetail from "../components/author/AchievementDetail";

const Author = () => {
  const navigation = useNavigation();

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
            onPress={() => {
              navigation.goBack();
            }}
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
        <AchievementDetail />
      </View>
      <View style={styles.lowerPart}>
        <CourseCardList
          data={authorCourses}
          style={styles.authorCourses}
          header={true}
          leftText={"Courses"}
          rightText={"Total " + authorCourses.length}
        />
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
  authorCourses: {
    marginTop: "3%",
    width: "100%",
  },
});
