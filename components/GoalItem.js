import {Pressable, StyleSheet, Text, View} from "react-native";

const GoalItem = ({id, text, onDeleteItem}) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				style={(pressed) => {pressed && styles.pressedItem}}
				android_ripple={{color: '#210644'}}
				onPress={() => onDeleteItem(id)}
			>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	);
};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: '#5e0acc',
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalText: {
		color: '#fff',
		padding: 8,
	}
});