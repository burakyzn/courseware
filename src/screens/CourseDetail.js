import { View, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import COLORS from "constants/Colors";
import NavigatorText from "components/navigations/NavigatorText";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { openTabBar } from "features/tabBarSlice";
import { addToBasket } from "features/basketSlice";
import responsiveFonts from "utils/ResponsiveFonts";
import { Button } from "react-native-elements";
import Divider from "components/core/Divider";
import AuthorButton from "components/courseDetail/AuthorButton";
import CourseInformation from "components/courseDetail/CourseInformation";

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
    categories: [
      { id: 1, name: "Swift UI" },
      { id: 2, name: "Software Development" },
    ],
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
        <CourseInformation
          title={mockCourse.title}
          data={mockCourse.categories}
        />
      </View>
      <View style={styles.space}></View>
      <View style={styles.lowerPart}>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionHeader}>Description</Text>
          <Text style={styles.description}>{mockCourse.description}</Text>
        </View>
        <View style={styles.bottomArea}>
          <Divider />
          <AuthorButton
            onPress={() => {
              navigation.navigate("Author");
            }}
          />
          <View style={styles.buttonWrapper}>
            <Button
              title="See Details"
              buttonStyle={styles.button}
              containerStyle={styles.buttonSeeDetailContainer}
              onPress={handleSeeDetails}
            />
            <Button
              title="Add To Basket"
              buttonStyle={[styles.button, styles.buttonSuccess]}
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
  space: {
    flex: 1,
  },
  descriptionWrapper: {
    flex: 1,
  },
  descriptionHeader: {
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
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    height: "100%",
  },
  buttonSuccess: {
    backgroundColor: COLORS.success,
  },
  buttonSeeDetailContainer: {
    flex: 1,
    paddingRight: 10,
  },
  buttonAddToBasketContainer: {
    flex: 1,
    paddingLeft: 10,
  },
});
