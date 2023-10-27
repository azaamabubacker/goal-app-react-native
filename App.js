import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [isGoal, setIsGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setIsGoal(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...courseGoals,
      { text: isGoal, id: Math.random().toString() },
    ]);
    setIsGoal("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={{ ...styles.testInput, color: "#93B1A6" }}
          placeholder="Your course goal"
          placeholderTextColor="#93B1A6"
          onChangeText={goalInputHandler}
          value={isGoal}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <View>
                <Text style={styles.goalsTextContainer}>
                  {itemData.item.text}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#040D12",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2,
    paddingBottom: 20,
    flex: 1,
    borderRadius: 20,
  },
  testInput: {
    borderWidth: 2,
    borderColor: "#93B1A6",
    width: "70%",
    marginRight: 6,
    padding: 6,
    borderRadius: 20,
  },
  goalsContainer: {
    flex: 6,
  },
  goalsTextContainer: {
    borderWidth: 2,
    backgroundColor: "#93B1A6",
    padding: 6,
    borderRadius: 5,
    marginBottom: 2,
  },
});
