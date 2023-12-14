import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Colors from "../components/Colors";
import themeContext from "../components/themeContext";

const { width, height } = Dimensions.get("window");

const Information = ({ navigation }) => {
  const theme = useContext(themeContext);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={{ padding: width * 0.04 }}>
        <Text style={[styles.description, { color: theme.textColor }]}>
          Welcome to our Task and Reminder App! This app allows you to manage
          your tasks and set reminders for them.
        </Text>
        <Text style={[styles.instruction, { color: theme.textColor }]}>
          To get started, follow these steps:
        </Text>
        <Text style={[styles.step, { color: theme.textColor }]}>
          1. Click the "+" button to add a new task.
        </Text>
        <Text style={[styles.step, { color: theme.textColor }]}>
          2. Enter the task details and set a reminder date and time.
        </Text>
        <Text style={[styles.step, { color: theme.textColor }]}>
          3. Click "Save" to save the task.
        </Text>
        <Text style={[styles.step, { color: theme.textColor }]}>
          4. Your tasks will be listed on the main screen, and you'll receive
          reminders when they are due.
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.Card}>
          <Text style={styles.Name}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Card}>
          <Text style={styles.Name}>Terms Of Use</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Card}>
          <Text style={styles.Name}>About App</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  description: {
    fontSize: width * 0.04,
    textAlign: "center",
    marginBottom: height * 0.02,
  },
  instruction: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    marginBottom: height * 0.02,
  },
  step: {
    fontSize: width * 0.03,
    marginBottom: height * 0.01,
  },
  Card: {
    backgroundColor: Colors.softGray,
    borderRadius: 10,
    padding: width * 0.04,
    margin: width * 0.02,
  },
  Name: {
    fontSize: width * 0.035,
    fontWeight: "bold",
  },
});

export default Information;
