import {Button, Image, Modal, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

const GoalInput = ({addGoalHandler, visible, onCancel}) => {
	const [enteredGoalText, setEnteredGoalText] = useState('');
	
	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText);
	}
	
	const goalHandler = () => {
		if (enteredGoalText.length === 0) return
		addGoalHandler(enteredGoalText);
		setEnteredGoalText('');
	}
	
	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image source={require('../assets/images/goal.png')} />
				<TextInput value={enteredGoalText} onChangeText={goalInputHandler} placeholder='Course goal' style={styles.textInput} />
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button onPress={goalHandler} title='Add goal' />
					</View>
					<View style={styles.button}>
						<Button onPress={onCancel} title='Cancel' />
					</View>
				</View>
			</View>
		</Modal>
	);
};

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 24,
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		width: '100%',
		padding: 8
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: 'row',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	}
});