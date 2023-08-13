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

export default function Page() {
  const { screen } = useSelector((store) => store.game);
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.flexOne}>
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  flexOne: {
    flex: 1,
  },
});
