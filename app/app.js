import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useSelector } from 'react-redux';
import colors from './utils/colors';

export default function Page() {
  const { screen } = useSelector((store) => store.game);

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
          <ScrollView>
            {screen === 'gameScreen' && <GameScreen />}
            {screen === 'gameOverScreen' && <GameOverScreen />}
          </ScrollView>
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
