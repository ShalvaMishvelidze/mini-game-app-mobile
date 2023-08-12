import { StyleSheet, View, TextInput, Text } from 'react-native';
import React, { useState } from 'react';
import BtnPrimary from '../components/BtnPrimary';

const StartGameScreen = () => {
	const [enteredNumber, setEnteredNumber] = useState('');

	const handleInput = (value) => {
		const regex = /^[^A-Za-z\s,.\\-]+$/;
		setEnteredNumber((prevState) => {
			return +value === 0 || !regex.test(value) ? prevState : value;
		});
	};

	const handleSubmit = () => {
		console.log(`I chose this number: ${enteredNumber}`);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Please enter a number</Text>
			<Text style={styles.note}>
				*note you can only enter values between 1 and 99
			</Text>
			<TextInput
				style={styles.input}
				maxLength={2}
				keyboardType="number-pad"
				onChangeText={handleInput}
				value={enteredNumber}
			/>
			<View style={styles.btnContainer}>
				<BtnPrimary onPress={() => setEnteredNumber('')} text={'reset'} />
				<BtnPrimary onPress={handleSubmit} text={'confirm'} />
			</View>
		</View>
	);
};

export default StartGameScreen;

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		padding: 16,
		marginTop: 100,
		marginHorizontal: 24,
		backgroundColor: '#3b021f',
		borderRadius: 8,
		elevation: 4,
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
		alignItems: 'center',
	},
	header: {
		fontSize: 24,
	},
	note: {
		fontSize: 12,
		opacity: 0.5,
	},
	input: {
		textAlign: 'center',
		height: 50,
		width: 60,
		fontSize: 32,
		borderBottomColor: '#ddb52f',
		borderBottomWidth: 2,
		color: '#ddb52f',
		marginVertical: 8,
		fontWeight: 'bold',
		position: 'relative',
	},
	btnContainer: {
		flexDirection: 'row',
		gap: 16,
		marginTop: 8,
	},
});
