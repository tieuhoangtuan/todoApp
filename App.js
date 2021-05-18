import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Note from "./component/Note";

export default function App() {
  const [note, setNote] = useState("");
  const [noteItems, setNoteItems] = useState([]);

  const handleAddNote = () => {
    if (note.length > 0) {
      setNoteItems([
        ...noteItems,
        { text: note, key: Date.now(), checked: false },
      ]);
      setNote("");
    }
  };

  const handleDelete = (id) => {
    setNoteItems(
      noteItems.filter((todo) => {
        if (todo.key !== id) return true;
      })
    );
  };

  const handleChecked = (id) => {
    setNoteItems(
      noteItems.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.notesWrapper}>
          <Text style={styles.sectionTitle}>Today note</Text>
          <View style={styles.items}>
            {noteItems.map((task) => (
              <Note
                text={task.text}
                key={task.key}
                checked={task.checked}
                setChecked={() => handleChecked(task.key)}
                delete={() => handleDelete(task.key)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeNoteWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={"Write a note"}
            value={note}
            onChangeText={(text) => setNote(text)}
          />

          <TouchableOpacity onPress={() => handleAddNote()}>
            <View style={styles.addWrapper}>
              <Text style={styles.add}> Add </Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  notesWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeNoteWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "blue",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "blue",
    borderWidth: 1,
  },
  add: {},
});
