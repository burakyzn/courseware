import RootNavigator from "./src/navigations/RootNavigator";
import { View, StyleSheet } from "react-native";
import COLORS from "./src/constants/Colors";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import store from "./src/app/store";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";

export default function App() {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigator></RootNavigator>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBaseTwo,
    justifyContent: "center",
  },
});
