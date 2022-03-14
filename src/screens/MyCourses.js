import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/Colors";
import NavigatorText from "../components/navigations/NavigatorText";
import Course from "../components/course/Course";
import responsiveFonts from "../utils/ResponsiveFonts";
import { useNavigation } from "@react-navigation/native";
const hp = Dimensions.get("window").height;

const MyCourses = () => {
  const navigation = useNavigation();
  const [isDoneTabSelected, setIsDoneTabSelected] = useState(false);
  const [inProgressCourses, setInProgressCourses] = useState([
    {
      title: "JavaScript Best Practices Course",
      author: "Burak Yazan",
      score: 4.5,
      level: "All Level",
      price: 25,
    },
    {
      title: "Introduction to C++",
      author: "Şule Aktaş",
      score: 4.8,
      level: "All Level",
      price: 25,
    },
    {
      title: "Introduction to Java",
      author: "Maftun Hashimli",
      score: 4.3,
      level: "All Level",
      price: 25,
    },
    {
      title: "Data Visualization With D3.js",
      author: "Barış Ertakuş",
      score: 4.2,
      level: "All Level",
      price: 25,
    },
  ]);
  const [doneCourses, setDoneCourses] = useState([
    {
      title: "React Native Crash Course",
      author: "Burak Yazan",
      score: 4.5,
      level: "Entry Level",
      price: 25,
    },
    {
      title: "Responsive Web Design",
      author: "Barış Ertakuş",
      score: 4.9,
      level: "All Level",
      price: 25,
    },
    {
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
            text={"My Courses"}
            onPress={() => {
              navigation.navigate("HomeStack");
            }}
            showBasketIcon={true}
          />
        </View>
      </View>
      <View style={styles.lowerPart}>
        <View style={styles.tabBarContainer}>
          <TouchableOpacity
            style={styles.tabContainer}
            onPress={() => {
              setIsDoneTabSelected(false);
            }}
          >
            <Text
              style={[
                styles.tabText,
                isDoneTabSelected ? styles.nonSelectedTab : styles.selectedTab,
              ]}
            >
              In Progress
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabContainer}
            onPress={() => {
              setIsDoneTabSelected(true);
            }}
          >
            <Text
              style={[
                styles.tabText,
                isDoneTabSelected ? styles.selectedTab : styles.nonSelectedTab,
              ]}
            >
              Done
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.courseListWrapper}>
          <ScrollView
            style={styles.courseList}
            showsVerticalScrollIndicator={false}
          >
            {isDoneTabSelected
              ? doneCourses.map((course, i) => {
                  return (
                    <View style={styles.courseWrapper} key={i}>
                      <Course
                        title={course.title}
                        author={course.author}
                        score={course.score}
                        level={course.level}
                        price={course.price}
                      />
                    </View>
                  );
                })
              : inProgressCourses.map((course, i) => {
                  return (
                    <View style={styles.courseWrapper} key={i}>
                      <Course
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

export default MyCourses;

const styles = StyleSheet.create({
  background: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  upperPart: {
    flex: 1,
    paddingHorizontal: 25,
  },
  lowerPart: {
    flex: 10,
    backgroundColor: COLORS.lightBaseTwo,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
  },
  navigatorWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  courseListWrapper: {
    flex: 9,
  },
  courseList: {
    height: hp * 0.5,
  },
  courseWrapper: {
    marginBottom: 20,
  },
  tabContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarContainer: {
    flex: 1,
    flexDirection: "row",
  },
  tabText: {
    fontFamily: "DMSans_700Bold",
    fontSize: responsiveFonts(14),
  },
  selectedTab: {
    color: COLORS.darkBaseOne,
  },
  nonSelectedTab: {
    color: COLORS.lightBaseThree,
  },
});
