import React, { useState, useEffect, useContext, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Modal,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
import HorizontalRule from "../components/HorizontalRule";
import DateTime from "../components/DateTime";
import Colors from "../components/Colors";
import { FAB } from "react-native-paper";
import themeContext from "../components/themeContext";
import { FontAwesome } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation, onSubmit }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { ...task, id: tasks.length + 1 };
    setTasks([...tasks, newTask]);
    setIsModalVisible(false);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const theme = useContext(themeContext);

  const filteredTasks = tasks.filter((task) => {
    if (selectedFilter === "All") {
      return true; // Show all tasks
    } else if (selectedFilter === "Important") {
      return task.isImportant === true; // Show only important tasks
    }
    // Add more filter conditions as needed
  });

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <DateTime />
      <View style={styles.dailyOverview}>
        <Text style={[styles.sectionTitle, { color: theme.textColor }]}>
          Daily Overview
        </Text>
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

        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </View>
      <FAB
        style={styles.fab}
        icon="plus"
        color={Colors.darkGray}
        onPress={toggleModal}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View
            style={[styles.modalContent, { backgroundColor: theme.background }]}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: width * 0.04,
                fontWeight: "900",
                color: Colors.darkGray,
                color: theme.textColor,
              }}
            >
              New Task
            </Text>
            <TaskForm onSubmit={addTask} />
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancel}
            >
              <Text style={styles.cancelButtonText}> Cancel </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dailyOverview: {
    padding: width * 0.01,
  },
  sectionTitle: {
    fontSize: width * 0.05,
    marginBottom: 10,
    textAlign: "center",
    marginTop: width * 0.02,
    color: Colors.Blue,
    fontWeight: "700",
  },
  fab: {
    position: "absolute",
    margin: width * 0.04,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.Blue,
    color: Colors.vibrantOrange,
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
  cancelButton: {
    backgroundColor: Colors.Overdue,
    padding: width * 0.02,
    borderRadius: 10,
    alignItems: "center",
    marginTop: "5%",
  },
  cancelButtonText: {
    color: Colors.white,
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
});

export default HomeScreen;
