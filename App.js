import { StyleSheet } from 'react-native';

import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import {
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_700Bold,
  useFonts,
} from '@expo-google-fonts/dm-sans';

import store from '~app/store';
import COLORS from '~constants/colors';
import RootNavigator from '~navigations/RootNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBaseTwo,
    justifyContent: 'center',
  },
});
