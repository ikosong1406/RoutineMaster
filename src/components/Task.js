import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import TaskCard from "./TaskCard";

const Task = () => {
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
  ];

  return (
    <ScrollView style={styles.activityCard}>
      {tasks.map((tasks) => {
        return (
          <TouchableOpacity>
            <TaskCard
              key={tasks.id}
              title={tasks.title}
              description={tasks.description}
              date={tasks.date}
              time={tasks.time}
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
export default Task;

const styles = StyleSheet.create({
  activityCard: {
    width: "100%",
    flexDirection: "column",
  },
});
