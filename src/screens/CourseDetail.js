import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../constants/Colors";
import NavigatorText from "../components/navigations/NavigatorText";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { openTabBar } from "../features/tabBarSlice";
import { addToBasket } from "../features/basketSlice";
import CategoryButton from "../components/core/CategoryButton";
import responsiveFonts from "../utils/ResponsiveFonts";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import Divider from "../components/core/Divider";

const CourseDetail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [mockCourse, setMockCourse] = useState({
    id: "1",
    title: "JavaScript Best Practices Course",
    author: "Burak Yazan",
    score: 4.5,
    level: "All Level",
    price: 25,
    categories: ["Swift UI", "Software Development"],
    description: `Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Vel quam elementum pulvinar etiamnim lobortis scelerisque. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur....`,
  });

  const goBack = () => {
    dispatch(openTabBar());
    navigation.goBack();
  };

  const handleAddToBasket = () => {
    dispatch(addToBasket(mockCourse));
  };

  const handleSeeDetails = () => {
    navigation.navigate("VideoPlayer");
  };

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width={"100%"}
            height={50}
            text={"Course Detail"}
            onPress={goBack}
            showBasketIcon={true}
          />
        </View>
      </View>
      <View style={styles.middlePart}>
        <Text style={styles.courseTitle}>{mockCourse.title}</Text>
        <View style={styles.categories}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {mockCourse.categories.map((category, i) => {
              return (
                <CategoryButton
                  key={i}
                  text={category}
                  backgroundColor={COLORS.accentPrimary}
                  textColor={COLORS.primary}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
      <View style={styles.space}></View>
      <View style={styles.lowerPart}>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.header}>Description</Text>
          <Text style={styles.description}>{mockCourse.description}</Text>
        </View>
        <View style={styles.bottomArea}>
          <Divider />
          <Text style={styles.authorHeader}>Author</Text>
          <TouchableOpacity
            style={styles.authorWrapper}
            onPress={() => {
              navigation.navigate("Author");
            }}
          >
            <View style={styles.authorProfile}>
              <Ionicons name="person-circle" size={60} color="black" />
            </View>
            <View style={styles.authorInformation}>
              <Text style={styles.authorFullName}>Burak Yazan</Text>
              <Text style={styles.authorSummary}>
                14 Courses • 1400 Students
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.buttonWrapper}>
            <Button
              title="See Details"
              buttonStyle={styles.buttonSeeDetailStyle}
              containerStyle={styles.buttonSeeDetailContainer}
              onPress={handleSeeDetails}
            />
            <Button
              title="Add To Basket"
              buttonStyle={styles.buttonAddToBasketStyle}
              containerStyle={styles.buttonAddToBasketContainer}
              onPress={handleAddToBasket}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CourseDetail;

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
    flex: 6,
    backgroundColor: COLORS.lightBaseOne,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 25,
  },
  navigatorWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  courseTitle: {
    color: COLORS.lightBaseOne,
    fontSize: responsiveFonts(24),
    fontFamily: "DMSans_700Bold",
  },
  categories: {
    width: "100%",
  },
  space: {
    flex: 1,
  },
  descriptionWrapper: {
    flex: 1,
  },
  header: {
    fontSize: responsiveFonts(12),
    fontFamily: "DMSans_400Regular",
    color: COLORS.lightBaseThree,
  },
  description: {
    fontSize: responsiveFonts(14),
    fontFamily: "DMSans_400Regular",
    color: COLORS.darkBaseOne,
    marginTop: "5%",
    lineHeight: 22,
  },
  bottomArea: {
    flex: 1,
  },
  authorWrapper: {
    backgroundColor: COLORS.lightBaseTwo,
    width: "100%",
    marginTop: "5%",
    borderRadius: 20,
    flex: 1,
    flexDirection: "row",
  },
  authorHeader: {
    fontSize: responsiveFonts(12),
    fontFamily: "DMSans_400Regular",
    color: COLORS.lightBaseThree,
    marginTop: "5%",
  },
  authorProfile: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  authorInformation: {
    flex: 3,
    justifyContent: "center",
  },
  authorFullName: {
    fontSize: responsiveFonts(14),
    fontFamily: "DMSans_400Regular",
    color: COLORS.darkBaseOne,
  },
  authorSummary: {
    fontSize: responsiveFonts(10),
    fontFamily: "DMSans_400Regular",
    color: COLORS.lightBaseThree,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  buttonSeeDetailStyle: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    height: "100%",
  },
  buttonSeeDetailContainer: {
    flex: 1,
    paddingRight: 10,
    marginTop: 10,
  },
  buttonAddToBasketStyle: {
    backgroundColor: COLORS.success,
    borderRadius: 10,
    height: "100%",
  },
  buttonAddToBasketContainer: {
    flex: 1,
    paddingLeft: 10,
    marginTop: 10,
  },
});
