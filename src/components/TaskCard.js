import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Colors from "../components/Colors";

const TaskCard = ({ title, description, date, time }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.activityTitle}>{title}</Text>
      <Text style={styles.activityDescription}>{description}</Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.activityDate}>{date}</Text>
        <Text style={styles.activityTime}>{time}</Text>
      </View>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EFEFF0", // Soft gray background
    margin: 10,
    borderRadius: 10,
    padding: 15,
    justifyContent: "space-between",
    // alignItems: "center",
  },
  activityTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000", // Black
  },
  activityDescription: {
    fontSize: 14,
    color: "#333333", // Dark gray
  },
  activityDate: {
    fontSize: 16,
    color: "#666666", // Slightly lighter gray
  },
  activityTime: {
    fontSize: 16,
    color: Colors.vibrantOrange,
    marginLeft: 20,
  },
});
