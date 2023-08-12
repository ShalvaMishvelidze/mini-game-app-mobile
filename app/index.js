import {
	StyleSheet,
	SafeAreaView,
	StatusBar,
	Platform,
	ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function Page() {
	return (
		<SafeAreaView style={styles.container}>
			<LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.flexOne}>
				<ImageBackground
					source={require('./assets/images/background.png')}
					resizeMode="cover"
					style={styles.flexOne}
					imageStyle={{ opacity: 0.15 }}
				>
					<StartGameScreen />
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
