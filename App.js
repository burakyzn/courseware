import RootNavigator from "./src/navigations/RootNavigator";
import { View, StyleSheet } from "react-native";
import COLORS from "./src/constants/Colors";

export default function App() {
  return (
    <View style={styles.container}>
      <RootNavigator></RootNavigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBaseTwo,
    justifyContent: "center",
  },
});
