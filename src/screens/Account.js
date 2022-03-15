import { View, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../constants/Colors";
import NavigatorText from "../components/navigations/NavigatorText";
import { useNavigation } from "@react-navigation/native";
import UserInformation from "../components/account/UserInformation";
import PageList from "../components/account/PageList";

const Account = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width={"100%"}
            height={50}
            text={"Account"}
            onPress={() => {
              navigation.goBack();
            }}
            showBasketIcon={true}
          />
        </View>
      </View>
      <View style={styles.middlePart}>
        <UserInformation />
      </View>
      <View style={styles.lowerPart}>
        <PageList />
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
});
