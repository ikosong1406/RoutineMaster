import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import Colors from "../components/Colors";

const { width, height } = Dimensions.get("window");

const TaskCard = ({ title, description, date, time }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.activityTitle}>{title}</Text>
      <Text style={styles.activityDescription}>{description}</Text>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 7 }}>
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
    margin: width * 0.03,
    borderRadius: 10,
    padding: width * 0.035,
    justifyContent: "space-between",
    width: "95%",
  },
  activityTitle: {
    fontSize: width * 0.045,
    fontWeight: "bold",
    color: Colors.darkGray,
  },
  activityDescription: {
    fontSize: width * 0.035,
    color: Colors.darkGray,
  },
  activityDate: {
    fontSize: width * 0.035,
    color: Colors.darkGray,
  },
  activityTime: {
    fontSize: width * 0.035,
    color: Colors.vibrantOrange,
    marginLeft: width * 0.04,
  },
});
