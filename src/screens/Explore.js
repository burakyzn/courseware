import { View, StyleSheet, Text, Dimensions, FlatList } from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/Colors";
import NavigatorText from "../components/navigations/NavigatorText";
import Searchbox from "../components/Searchbox";
import CategoryButton from "../utils/CategoryButton";
import CourseCardList from "../components/core/CourseCardList";
import responsiveFonts from "../utils/ResponsiveFonts";
import { useNavigation } from "@react-navigation/native";
const hp = Dimensions.get("window").height;

const Explore = () => {
  const navigation = useNavigation();
  const [recommendedCategories, setRecommendedCategories] = useState([
    {
      id: "1",
      name: "Technology",
    },
    {
      id: "2",
      name: "JavaScript",
    },
    {
      id: "3",
      name: "Science",
    },
    {
      id: "4",
      name: "English",
    },
    {
      id: "5",
      name: "React Native",
    },
    {
      id: "6",
      name: "React",
    },
    {
      id: "7",
      name: "Programming",
    },
    {
      id: "8",
      name: "Swift",
    },
    {
      id: "9",
      name: "Finance",
    },
  ]);

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
            text={"Explore"}
            onPress={() => {
              navigation.navigate("HomeStack");
            }}
            showBasketIcon={true}
          />
        </View>
      </View>
      <View style={styles.lowerPart}>
        <View style={styles.searchboxWrapper}>
          <Searchbox
            width={"100%"}
            height={60}
            placeholder="Search for courses"
          />
        </View>
        <View style={styles.categoryWrapper}>
          <Text style={styles.categoryText}>Browser Category</Text>
          <FlatList
            style={styles.categories}
            data={recommendedCategories}
            renderItem={({ item }) => {
              return <CategoryButton text={item.name} />;
            }}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.recommendedWrapper}>
          <Text style={styles.categoryText}>Recommended Courses</Text>
          <CourseCardList
            data={recommendedCourses}
            style={styles.recommendedCourses}
          />
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
  searchboxWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "7%",
  },
  categoryWrapper: {
    marginTop: "5%",
  },
  categoryText: {
    fontFamily: "DMSans_700Bold",
    fontSize: responsiveFonts(14),
  },
  categories: {
    marginTop: "2%",
  },
  recommendedWrapper: {
    flex: 1,
  },
  recommendedCourses: {
    marginTop: "5%",
    height: hp * 0.5,
  },
  courseWrapper: {
    marginBottom: 20,
  },
});
