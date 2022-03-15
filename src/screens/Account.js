import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  SectionList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../constants/Colors";
import NavigatorText from "../components/navigations/NavigatorText";
import { useNavigation } from "@react-navigation/native";
import responsiveFonts from "../utils/ResponsiveFonts";
import { Ionicons } from "@expo/vector-icons";
const hp = Dimensions.get("window").height;

const Account = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const sections = [
    {
      title: "Account Settings",
      data: ["Account Security", "Notification Preferences", "Reminders"],
    },
    {
      title: "Support",
      data: ["Ask Question", "F.A.Q", "About"],
    },
  ];

  const handleImageStyle = () => {
    let ratio = hp * 0.13;

    return {
      width: ratio,
      height: ratio,
      borderRadius: ratio / 2,
      marginBottom: 20,
    };
  };

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width={"100%"}
            height={50}
            text={"Account"}
            onPress={goBack}
            showBasketIcon={true}
          />
        </View>
      </View>
      <View style={styles.middlePart}>
        <Image
          style={handleImageStyle()}
          source={require("../../assets/profile-photo.png")}
        ></Image>
        <Text
          style={{
            color: COLORS.lightBaseOne,
            fontSize: responsiveFonts(24),
            fontFamily: "DMSans_700Bold",
          }}
        >
          Burak Yazan
        </Text>
        <Text
          style={{
            color: COLORS.lightBaseOne,
            fontSize: responsiveFonts(14),
            fontFamily: "DMSans_400Regular",
          }}
        >
          brkyznn@gmail.com
        </Text>
      </View>
      <View style={styles.lowerPart}>
        <SectionList
          sections={sections}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItem}>
              <Text style={styles.listItemText}>{item}</Text>
              <Ionicons
                style={styles.notification}
                name="chevron-forward-outline"
                size={hp * 0.04}
                color={COLORS.lightBaseThree}
              />
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    </View>
  );
};

export default Account;

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
    flex: 6,
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
  listItem: {
    marginVertical: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    color: COLORS.lightBaseThree,
    fontSize: responsiveFonts(10),
    fontFamily: "DMSans_400Regular",
  },
  listItemText: {
    color: COLORS.darkBaseOne,
    fontSize: responsiveFonts(14),
    fontFamily: "DMSans_400Regular",
  },
});
