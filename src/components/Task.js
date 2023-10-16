import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import TaskCard from "./TaskCard"; // Import TaskCard
import Colors from "./Colors";

const Task = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const tasks = [
    {
      title: "do assignment",
      description: "do your maths and physics assignment",
      date: "14 June",
      time: "2:45pm",
    },
    {
      title: "another task",
      description: "description of another task",
      date: "15 June",
      time: "3:00pm",
    },
    {
      title: "yet another task",
      description: "description of yet another task",
      date: "16 June",
      time: "4:15pm",
    },
    {
      title: "do assignment",
      description: "do your maths and physics assignment",
      date: "14 June",
      time: "2:45pm",
    },
    {
      title: "another task",
      description: "description of another task",
      date: "15 June",
      time: "3:00pm",
    },
    {
      title: "yet another task",
      description: "description of yet another task",
      date: "16 June",
      time: "4:15pm",
    },
    {
      title: "do assignment",
      description: "do your maths and physics assignment",
      date: "14 June",
      time: "2:45pm",
    },
    {
      title: "another task",
      description: "description of another task",
      date: "15 June",
      time: "3:00pm",
    },
    {
      title: "yet another task",
      description: "description of yet another task",
      date: "16 June",
      time: "4:15pm",
    },
    {
      title: "yet another task",
      description: "description of yet another task",
      date: "16 June",
      time: "4:15pm",
    },
  ];

  const filteredTasks = tasks.filter((task) => {
    if (selectedFilter === "All") {
      return true; // Show all tasks
    } else if (selectedFilter === "Important") {
      return task.isImportant === true; // Show only important tasks
    }
    // Add more filter conditions as needed
  });

  const handleTaskDetails = () => {
    alert("task Details");
  };

  const handleDelete = () => {
    alert("Deleted");
  };

  return (
    <View style={styles.activityCard}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
          marginBottom: 5,
        }}
      >
        <TouchableOpacity onPress={() => setSelectedFilter("All")}>
          <Text style={{ fontSize: 20, marginLeft: 19, fontWeight: "900" }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedFilter("Important")}>
          <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: "900" }}>
            Important
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: "100%", height: 600, paddingBottom: 100 }}>
        {filteredTasks.map((task, index) => (
          <SwipeListView
            data={[task]} // Pass the task as an array to the SwipeListView
            renderItem={(data, rowMap) => (
              <TouchableOpacity activeOpacity={0.8} onPress={handleTaskDetails}>
                <TaskCard
                  title={task.title}
                  description={task.description}
                  date={task.date}
                  time={task.time}
                />
              </TouchableOpacity>
            )}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.rowBack}>
                <TouchableOpacity
                  style={{ marginTop: "2%" }}
                  onPress={handleDelete}
                >
                  <FontAwesome name="trash" size={30} color="black" />
                </TouchableOpacity>
              </View>
            )}
            leftOpenValue={60}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  activityCard: {
    width: "100%",
    flexDirection: "column",
  },
  rowBack: {
    backgroundColor: Colors.sandyBeige,
    flex: 1,
    flexDirection: "row",
    margin: 10,
    borderRadius: 10,
    padding: 15,
    marginTop: 17,
  },
});
