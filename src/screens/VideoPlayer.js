import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SectionList,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import COLORS from "../constants/Colors";
import responsiveFonts from "../utils/ResponsiveFonts";
import NavigatorText from "../components/navigations/NavigatorText";
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "react-native-elements";
const hp = Dimensions.get("window").height;

const VideoPlayer = () => {
  const navigation = useNavigation();
  const video = React.useRef(null);
  const [isCourseContent, setIsCourseContent] = useState(true);
  const [isLessonCompleted, setIsLessonCompleted] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const sections = [
    {
      title: "Hello World",
      data: ["Introduction to JavaScript", "First Application", "Arrays"],
    },
    {
      title: "Loops",
      data: ["For", "ForEach", "While", "Do While"],
    },
  ];

  const discussions = [
    {
      id: "1",
      photo: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Veronica Peters",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "2",
      photo: "https://randomuser.me/api/portraits/men/64.jpg",
      name: "Andre Steward",
      message:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "3",
      photo: "https://randomuser.me/api/portraits/women/84.jpg",
      name: "Sherry Cruz",
      message:
        "Lacus luctus accumsan tortor posuere ac. Ut porttitor leo a diam sollicitudin tempor id. ",
    },
    {
      id: "4",
      photo: "https://randomuser.me/api/portraits/men/93.jpg",
      name: "Gabe Hicks",
      message:
        "Tellus orci ac auctor augue mauris. At urna condimentum mattis pellentesque id nibh tortor id. Tristique risus nec feugiat in fermentum posuere urna nec. Amet est placerat in egestas erat imperdiet sed euismod nisi. Magna fringilla urna porttitor rhoncus dolor purus. Habitant morbi tristique senectus et netus et malesuada. Pellentesque adipiscing commodo elit at imperdiet dui accumsan.",
    },
    {
      id: "6",
      photo: "https://randomuser.me/api/portraits/women/57.jpg",
      name: "Isabella Dean",
      message:
        "Tristique risus nec feugiat in fermentum posuere urna nec. Amet est placerat in egestas erat imperdiet sed euismod nisi.",
    },
  ];

  const handleImageStyle = () => {
    let ratio = hp * 0.05;

    return {
      width: ratio,
      height: ratio,
      borderRadius: ratio / 2,
      marginRight: 10,
    };
  };

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width={"100%"}
            height={50}
            text={"1. Introduction"}
            onPress={goBack}
            showBasketIcon={false}
          />
        </View>
      </View>
      <View style={styles.middlePart}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode="contain"
        />
      </View>
      <View style={styles.lowerPart}>
        <View style={styles.tabBarContainer}>
          <TouchableOpacity
            style={[
              styles.tabContainer,
              !isCourseContent ? styles.selectedTabContainer : null,
            ]}
            onPress={() => {
              setIsCourseContent(true);
            }}
          >
            <Text
              style={[
                styles.tabText,
                isCourseContent ? styles.selectedTab : styles.nonSelectedTab,
              ]}
            >
              Course Content
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabContainer,
              isCourseContent ? styles.selectedTabContainer : null,
            ]}
            onPress={() => {
              setIsCourseContent(false);
            }}
          >
            <Text
              style={[
                styles.tabText,
                isCourseContent ? styles.nonSelectedTab : styles.selectedTab,
              ]}
            >
              Discussion
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.courseListWrapper}>
          {isCourseContent ? (
            <SectionList
              sections={sections}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.listItem}>
                  <View>
                    <Text style={styles.listItemText}>{item}</Text>
                    <Text style={styles.lessonType}>Video • 4 Min </Text>
                  </View>
                  <CheckBox
                    center
                    checked={isLessonCompleted}
                    checkedColor={COLORS.secondary}
                    onPress={() => setIsLessonCompleted(!isLessonCompleted)}
                  />
                </TouchableOpacity>
              )}
              renderSectionHeader={({ section: { title } }) => (
                <View style={styles.header}>
                  <Text style={styles.sectionName}>Section 1 : {title}</Text>
                  <Text style={styles.sectionType}>3/5 Unit • 4 Min</Text>
                </View>
              )}
            />
          ) : (
            <FlatList
              style={styles.discussions}
              data={discussions}
              renderItem={({ item }) => {
                return (
                  <View style={styles.messageContainer}>
                    <Image
                      style={handleImageStyle()}
                      source={{ uri: item.photo }}
                    ></Image>
                    <View style={styles.messageWrapper}>
                      <Text style={styles.fullName}>{item.name}</Text>
                      <Text style={styles.message}>{item.message}</Text>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  upperPart: {
    flex: 1,
    paddingHorizontal: 25,
  },
  middlePart: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  lowerPart: {
    flex: 7,
    backgroundColor: COLORS.lightBaseOne,
  },
  navigatorWrapper: {
    flex: 1,
    justifyContent: "flex-end",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
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
  courseListWrapper: {
    flex: 6,
  },
  tabText: {
    fontFamily: "DMSans_700Bold",
    fontSize: responsiveFonts(14),
  },
  selectedTabContainer: {
    backgroundColor: COLORS.lightBaseTwo,
  },
  selectedTab: {
    color: COLORS.darkBaseOne,
  },
  nonSelectedTab: {
    color: COLORS.lightBaseThree,
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listItemText: {
    color: COLORS.darkBaseOne,
    fontSize: responsiveFonts(14),
    fontFamily: "DMSans_400Regular",
    paddingHorizontal: 25,
  },
  header: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.lightBaseThree,
    paddingHorizontal: 25,
    backgroundColor: COLORS.lightBaseOne,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  messageWrapper: {
    flex: 1,
  },
  fullName: {
    fontSize: 12,
    fontFamily: "DMSans_700Bold",
    color: COLORS.primary,
  },
  message: {
    fontSize: 12,
    fontFamily: "DMSans_400Regular",
    flexWrap: "wrap",
    textAlign: "justify",
  },
  discussions: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  sectionName: {
    fontSize: responsiveFonts(14),
    marginBottom: 5,
    color: COLORS.darkBaseOne,
    marginTop: 15,
  },
  sectionType: {
    fontSize: responsiveFonts(10),
    color: COLORS.lightBaseThree,
  },
  lessonType: {
    fontSize: responsiveFonts(10),
    color: COLORS.lightBaseThree,
    fontFamily: "DMSans_400Regular",
    paddingHorizontal: 25,
  },
});
