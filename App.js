import {StyleSheet, Button, TextInput, View, FlatList} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);
  
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }
  
  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  }
  
  const goalHandler = (enteredGoalText) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    endAddGoalHandler();
  }
  
  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }
  
  return (
    <View style={styles.appContainer}>
      <Button title={'Add new goal'} color="#5e0acc" onPress={startAddGoalHandler} />
      {modalIsVisible &&
        <GoalInput
          addGoalHandler={goalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
      }
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={itemData => {
            return <GoalItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDeleteItem={removeGoalHandler}
            />
          }}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
