import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import HorizontalRule from "../components/HorizontalRule";
import DateTime from "../components/DateTime";
import Colors from "../components/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Task from "../components/Task";
import { FAB } from "react-native-paper";
import Checkbox from "../components/Checkbox";

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalDrawer, setIsModalDrawer] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [important, setImportant] = useState(false);
  const [notimportant, setNotimportant] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const drawerModal = () => {
    setIsModalDrawer(!isModalDrawer);
  };
  const drawerModalClose = () => {
    setIsModalDrawer(false);
  };

  const handleCreateTimetable = () => {
    // Implement your create timetable logic here
    alert("Creating task:", taskName);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleLogout = () => {
    closeModal();
    setIsNavigating(true);
  };

  const closeModal = () => {
    setIsModalDrawer(false);
  };

  useEffect(() => {
    if (isNavigating) {
      // Introduce a 2-second delay before navigating
      setTimeout(() => {
        navigation.navigate("Login");
      }, 2000); // 2000 milliseconds (2 seconds)
    }
  }, [isNavigating]);

  const handleHome = () => {
    setIsModalDrawer(false);
    navigation.navigate("Tab");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={drawerModal}>
          <Image
            source={require("../../assets/images/alex.jpg")}
            style={{ width: 50, height: 50, borderRadius: 100, marginLeft: 10 }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 28,
            marginLeft: 65,
            fontWeight: "900",
            color: Colors.lightBlue,
          }}
        >
          To-Do List
        </Text>
        <FontAwesome
          name="search"
          size={24}
          color="black"
          style={{ marginLeft: 90 }}
        />
      </View>
      <DateTime />
      <View style={styles.dailyOverview}>
        <Text style={styles.sectionTitle}>Daily Overview</Text>
        <Task />
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
          <View style={styles.modalContent}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 24,
                fontWeight: "900",
                color: Colors.darkGray,
              }}
            >
              New Task
            </Text>
            <HorizontalRule />
            <Text
              style={{
                fontWeight: "700",
                fontSize: 18,
                color: Colors.darkGray,
              }}
            >
              Task Title
            </Text>
            <TextInput
              style={styles.taskNameInput}
              placeholder="Add Task Name"
              value={taskName}
              onChangeText={(text) => setTaskName(text)}
            />
            <Text
              style={{
                fontWeight: "700",
                fontSize: 18,
                color: Colors.darkGray,
              }}
            >
              Description
            </Text>
            <TextInput
              style={styles.taskDescriptionInput}
              placeholder="Add Description"
              value={taskDescription}
              onChangeText={(text) => setTaskDescription(text)}
            />
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text> Not Important </Text>
                <Checkbox
                  checked={notimportant}
                  onPress={() => setNotimportant(!notimportant)}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 34,
                }}
              >
                <Text> Important </Text>
                <Checkbox
                  checked={important}
                  onPress={() => setImportant(!important)}
                />
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 18,
                    color: Colors.darkGray,
                  }}
                >
                  Date
                </Text>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 18,
                    color: Colors.darkGray,
                    marginLeft: 160,
                  }}
                >
                  Time
                </Text>
              </View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <TextInput
                  style={styles.taskDateInput}
                  placeholder="dd/mm/yyyy"
                  value={taskDate}
                  onChangeText={(text) => setTaskDate(text)}
                />
                <TextInput
                  style={styles.taskTimeInput}
                  placeholder="hh : mm"
                  value={taskTime}
                  onChangeText={(text) => setTaskTime(text)}
                />
              </View>
            </View>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
            >
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleCancel}
              >
                <Text style={styles.cancelButtonText}> Cancel </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.createButton}
                onPress={handleCreateTimetable}
              >
                <Text style={styles.createButtonText}> Create </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalDrawer}
        onRequestClose={drawerModal}
      >
        <View style={styles.drawerContainer}>
          <View style={styles.drawerContent}>
            <FontAwesome
              name="close"
              size={35}
              color={Colors.white}
              style={styles.closeButton}
              onPress={drawerModalClose}
            />
            <Text style={styles.drawerHeaderText}>
              {" "}
              Hello, Alexander Ikosong{" "}
            </Text>
            <View
              style={{ display: "flex", flexDirection: "row", marginTop: 33 }}
            >
              <Image
                source={require("../../assets/images/alex.jpg")}
                style={{
                  width: 80,
                  height: 80,
                  marginLeft: 10,
                }}
              />
              <View style={{ marginLeft: 23, marginTop: 12 }}>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 16,
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  @derealalexis{" "}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.lightGray,
                    padding: 5,
                    marginTop: 23,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: "900" }}>
                    {" "}
                    Edit Profile{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: 40 }}>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 20,
                  width: "100%",
                }}
                onPress={handleHome}
              >
                <FontAwesome name="home" size={25} color={Colors.white} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: 30,
                    marginTop: 5,
                  }}
                >
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 20,
                  width: "100%",
                }}
              >
                <FontAwesome name="share-alt" size={25} color={Colors.white} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: 30,
                    marginTop: 5,
                  }}
                >
                  Tell a friend
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 20,
                  width: "100%",
                }}
              >
                <Entypo name="info" size={25} color={Colors.white} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: 30,
                    marginTop: 5,
                  }}
                >
                  Information
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 20,
                  width: "100%",
                }}
              >
                <Ionicons name="settings" size={25} color={Colors.white} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: 30,
                    marginTop: 5,
                  }}
                >
                  Setting
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 20,
                  width: "100%",
                  marginTop: "100%",
                }}
                onPress={handleLogout}
              >
                <FontAwesome name="power-off" size={25} color={Colors.white} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: 30,
                    marginTop: 5,
                  }}
                >
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EFEFF0", // Light gray
    padding: 10,
  },
  dailyOverview: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    marginTop: 10,
    color: Colors.lightBlue,
    fontWeight: "700",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.vibrantOrange,
    color: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  modalContent: {
    backgroundColor: Colors.vibrantOrange, // Lighter shade of Vibrant Orange
    borderRadius: 10,
    width: "90%", // Adjust width as needed
    padding: 20,
  },
  taskNameInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: Colors.darkGray,
  },
  taskDescriptionInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: Colors.darkGray,
    height: "20%",
  },
  taskDateInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: Colors.darkGray,
  },
  taskTimeInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: Colors.darkGray,
    marginLeft: 80,
  },
  createButton: {
    backgroundColor: "#66BB6A", // Green
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 150,
  },
  createButtonText: {
    color: "#FFFFFF", // White text
    fontSize: 25,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#FF4D4D", // Red
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#FFFFFF", // White text
    fontSize: 25,
    fontWeight: "bold",
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  drawerContent: {
    backgroundColor: Colors.lightBlue, // Lighter shade of Vibrant Orange
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    width: "65%",
    height: "100%",
    padding: 20,
  },
  closeButton: {
    marginLeft: 200,
  },
  drawerHeaderText: {
    fontSize: 22,
    color: Colors.white,
    marginTop: 32,
  },
});

export default HomeScreen;
