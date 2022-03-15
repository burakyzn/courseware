import React from "react";
import { View, StyleSheet } from "react-native";
import { Video } from "expo-av";
import COLORS from "../constants/Colors";
import NavigatorText from "../components/navigations/NavigatorText";
import { useNavigation } from "@react-navigation/native";
import Tabs from "../components/videoPlayer/Tabs";

const VideoPlayer = () => {
  const navigation = useNavigation();
  const video = React.useRef(null);

  return (
    <View style={styles.background}>
      <View style={styles.upperPart}>
        <View style={styles.navigatorWrapper}>
          <NavigatorText
            width={"100%"}
            height={50}
            text={"1. Introduction"}
            onPress={() => {
              navigation.goBack();
            }}
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
        <Tabs />
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
});
