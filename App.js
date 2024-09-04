import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onAddTodo = () => {
    if (todo) {
      setTodoList([...todoList, todo]);
      setTodo("");
    }
  };
  const onDeleteTodo = (index) =>
    setTodoList(todoList.filter((_, i) => i !== index));

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Todo List</Text>
      <TextInput
        style={styles.input}
        value={todo}
        onChangeText={setTodo}
        placeholder="Enter a todo"
        placeholderTextColor="#fff"
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={onAddTodo}
        disabled={!todo}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <ScrollView>
        {todoList.map((todo, index) => (
          <View key={`todo${index}`} style={styles.todoItem}>
            <Text style={styles.text} flex={1}>
              No.{index + 1} {todo}
            </Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => onDeleteTodo(index)}
            >
              <Text style={styles.buttonText}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "#161622",
  },
  Title: {
    fontSize: 24,
    marginBottom: 24,
    color: "#fff",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
  input: {
    borderColor: "#fff",
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 8,
    padding: (0, 8),
    color: "#fff",
  },
  submitButton: {
    backgroundColor: "orange",
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  todoItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  deleteButton: {
    backgroundColor: "red",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
  },
});
