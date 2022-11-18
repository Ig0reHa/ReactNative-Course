import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

const GoalInput = ({addGoalHandler}) => {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	
	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	}
	
	return (
		<View style={styles.inputContainer}>
			<TextInput onChangeText={goalInputHandler} placeholder='Course goal' style={styles.textInput} />
			<Button onPress={() => addGoalHandler(enteredGoalText)} title='Add goal' />
		</View>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		flex: 1,
		marginRight: 20,
		padding: 8
	},
});