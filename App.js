import RootNavigator from "navigations/RootNavigator";
import { StyleSheet } from "react-native";
import COLORS from "constants/Colors";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "app/store";
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
        <SafeAreaView style={styles.container}>
          <RootNavigator></RootNavigator>
        </SafeAreaView>
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
