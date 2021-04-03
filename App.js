import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	return (
		<View style={styles.container}>
			<Image style={styles.backgroundImage} source={require('./cart1.jpg')}></Image>
			<Text style={styles.heading}>Golf Cart App Bitches!</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	heading: {
		fontSize: 30,
	},
	backgroundImage: {
		position: 'absolute',

		opacity: 0.3,
	},
});
