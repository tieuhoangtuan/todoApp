import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Note = (props) => (
  <View style={styles.item}>
    <Icon
      name={props.checked ? "check" : "square"}
      size={30}
      color="#900"
      style={{ marginLeft: 15 }}
      onPress={props.setChecked}
    />

    <View>
      {props.checked && <View style={styles.verticalLine}></View>}
      <Text style={styles.task}>{props.text}</Text>
    </View>
    <Icon
      name="trash-2"
      size={30}
      color="#900"
      style={{ marginLeft: "auto" }}
      onPress={props.delete}
    />
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    marginBottom: 20,
    height: 65,
  },

  verticalLine: {
    borderBottomColor: "black",
    borderBottomWidth: 4,
    marginLeft: 10,
    width: "100%",
    position: "absolute",
    marginTop: 15,
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    marginTop: 6,
    borderColor: "#F0F0F0",
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
});

export default Note;
