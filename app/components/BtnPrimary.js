import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BtnPrimary = ({
	text = 'click me',
	onPress = () => console.log("I've been clicked!!!"),
}) => {
	return (
		<View style={styles.container}>
			<Pressable
				style={
					Platform.OS === 'ios'
						? ({ pressed }) => {
								return pressed
									? [styles.pressable, styles.pressed]
									: styles.pressable;
						  }
						: styles.pressable
				}
				onPress={onPress}
				android_ripple={{ color: '#640233' }}
			>
				<Text style={styles.text}>{text}</Text>
			</Pressable>
		</View>
	);
};

export default BtnPrimary;

const styles = StyleSheet.create({
	container: {
		borderRadius: 1000,
		overflow: 'hidden',
		flex: 1,
	},
	pressable: {
		backgroundColor: '#72063c',
		alignSelf: 'center',
		paddingHorizontal: 16,
		paddingVertical: 8,
		justifyContent: 'center',
		elevation: 2,
		width: '100%',
	},
	text: {
		textAlign: 'center',
		textTransform: 'uppercase',
		color: '#fff',
	},
	pressed: {
		opacity: 0.75,
	},
});
