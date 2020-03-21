import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);

	const blogPost = state.find(
		blogPost => blogPost.id === navigation.getParam('id')
	);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{blogPost.title}</Text>
			<Text style={styles.content}>{blogPost.content}</Text>
			<TouchableOpacity
				style={styles.icon}
				onPress={() =>
					navigation.navigate('Edit', { id: navigation.getParam('id') })
				}
			>
				<EvilIcons name='pencil' size={35} />
			</TouchableOpacity>
		</View>
	);
};

ShowScreen.nagivationOptions = ({ navigation }) => {
	return {
		headerRight: (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<EvilIcons name='pencil' size={30} />
			</TouchableOpacity>
		)
	};
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		marginHorizontal: 15
	},
	title: {
		fontSize: 26,
		paddingVertical: 7
	},
	content: {
		fontSize: 20
	},
	icon: {
		position: 'absolute',
		alignSelf: 'flex-end'
	}
});

export default ShowScreen;
