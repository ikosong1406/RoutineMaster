import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
  TextInput,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import TaskCard from "./TaskCard"; // Import TaskCard
import Colors from "./Colors";
import HorizontalRule from "./HorizontalRule";
import Checkbox from "./Checkbox";

const { width, height } = Dimensions.get("window");

const Task = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

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

  const handleTaskDetails = (task) => {
    setEditedTask(task);
    setIsModalVisible(true);
  };

  const handleSaveTask = () => {
    alert("task editted and saved");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
          marginTop: height * 0.005,
          marginBottom: 5,
        }}
      >
        <TouchableOpacity onPress={() => setSelectedFilter("All")}>
          <Text
            style={{
              fontSize: width * 0.04,
              marginLeft: width * 0.04,
              fontWeight: "900",
            }}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedFilter("Important")}>
          <Text
            style={{
              fontSize: width * 0.04,
              marginLeft: width * 0.04,
              fontWeight: "900",
            }}
          >
            Important
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={{ width: "100%", height: "87%", paddingBottom: height * 0.04 }}
      >
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
                  <FontAwesome
                    name="trash"
                    size={width * 0.07}
                    color={Colors.Overdue}
                    style={{ marginLeft: "92%" }}
                  />
                </TouchableOpacity>
              </View>
            )}
            rightOpenValue={-60}
          />
        ))}
      </ScrollView>
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {editedTask && (
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: width * 0.04,
                    fontWeight: "900",
                    color: Colors.darkGray,
                  }}
                >
                  Edit Task
                </Text>
                <HorizontalRule />
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: width * 0.03,
                    color: Colors.darkGray,
                  }}
                >
                  Task Title
                </Text>
                <TextInput
                  style={styles.taskNameInput}
                  placeholder="Edit Title"
                  value={editedTask.title}
                  onChangeText={(text) =>
                    setEditedTask({ ...editedTask, title: text })
                  }
                />
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: width * 0.03,
                    color: Colors.darkGray,
                  }}
                >
                  Description
                </Text>
                <TextInput
                  style={styles.taskDescriptionInput}
                  placeholder="Edit Description"
                  value={editedTask.description}
                  onChangeText={(text) =>
                    setEditedTask({ ...editedTask, description: text })
                  }
                />
                <View style={{ marginTop: height * 0.02 }}>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: width * 0.03,
                        color: Colors.darkGray,
                      }}
                    >
                      Date
                    </Text>
                    <Text
                      style={{
                        fontWeight: "700",
                        fontSize: width * 0.03,
                        color: Colors.darkGray,
                        marginLeft: width * 0.33,
                      }}
                    >
                      Time
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <TextInput
                      style={styles.taskDateInput}
                      placeholder="dd/mm/yyyy"
                      value={editedTask.date}
                      onChangeText={(text) =>
                        setEditedTask({ ...editedTask, date: text })
                      }
                    />
                    <TextInput
                      style={styles.taskTimeInput}
                      placeholder="hh : mm"
                      value={editedTask.time}
                      onChangeText={(text) =>
                        setEditedTask({ ...editedTask, time: text })
                      }
                    />
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: height * 0.02,
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={handleCancel}
                  >
                    <Text style={styles.cancelButtonText}> Cancel </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.createButton}
                    onPress={handleSaveTask}
                  >
                    <Text style={styles.createButtonText}> Save </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>
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
    backgroundColor: Colors.Blue,
    flex: 1,
    flexDirection: "row",
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
    margin: width * 0.02,
    borderRadius: 10,
    padding: width * 0.03,
    width: "93%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  modalContent: {
    backgroundColor: Colors.white,
    borderColor: Colors.Blue,
    borderWidth: 5,
    borderRadius: 10,
    width: "90%",
    padding: width * 0.05,
  },
  taskNameInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: width * 0.01,
    marginBottom: height * 0.02,
    color: Colors.darkGray,
  },
  taskDescriptionInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: width * 0.01,
    marginBottom: height * 0.02,
    color: Colors.darkGray,
    height: "20%",
  },
  taskDateInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: width * 0.01,
    marginBottom: height * 0.02,
    color: Colors.darkGray,
    width: "40%",
  },
  taskTimeInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: width * 0.01,
    marginBottom: height * 0.02,
    color: Colors.darkGray,
    marginLeft: width * 0.06,
    width: "40%",
  },
  createButton: {
    backgroundColor: Colors.Completed,
    padding: width * 0.02,
    borderRadius: 10,
    alignItems: "center",
  },
  createButtonText: {
    color: Colors.white,
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: Colors.Overdue,
    padding: width * 0.02,
    borderRadius: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    color: Colors.white,
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
});
