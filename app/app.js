import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useSelector } from 'react-redux';
import colors from './utils/colors';
// import * as Font from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { useCallback } from 'react';

export default function Page() {
  const { screen } = useSelector((store) => store.game);

  // const [fontsLoaded] = Font.useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  // if (!fontsLoaded) {
  //   SplashScreen.hideAsync();
  // }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[colors.colPrimaryGradient, colors.colYellow]}
        style={styles.flexOne}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"
          style={styles.flexOne}
          imageStyle={{ opacity: 0.15 }}
        >
          {screen === 'startGameScreen' && <StartGameScreen />}
          {screen === 'gameScreen' && <GameScreen />}
          {screen === 'gameOverScreen' && <GameOverScreen />}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  flexOne: {
    flex: 1,
  },
});
