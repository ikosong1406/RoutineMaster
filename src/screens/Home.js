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
  Dimensions,
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

const { width, height } = Dimensions.get("window");

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
            style={{
              width: width * 0.13,
              height: height * 0.06,
              borderRadius: 100,
              marginLeft: width * 0.03,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: width * 0.08,
            marginLeft: width * 0.06,
            fontWeight: "900",
            color: Colors.lightBlue,
          }}
        >
          Tasks
        </Text>
        <FontAwesome
          name="search"
          size={width * 0.06}
          color="black"
          style={{ marginLeft: width * 0.06 }}
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
                fontSize: width * 0.08,
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
                fontSize: width * 0.04,
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
                fontSize: width * 0.04,
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
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: width * 0.04,
                    color: Colors.darkGray,
                  }}
                >
                  {" "}
                  Not Important{" "}
                </Text>
                <Checkbox
                  checked={notimportant}
                  onPress={() => setNotimportant(!notimportant)}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: width * 0.1,
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: width * 0.04,
                    color: Colors.darkGray,
                  }}
                >
                  {" "}
                  Important{" "}
                </Text>
                <Checkbox
                  checked={important}
                  onPress={() => setImportant(!important)}
                />
              </View>
            </View>
            <View style={{ marginTop: height * 0.03 }}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: width * 0.04,
                    color: Colors.darkGray,
                  }}
                >
                  Date
                </Text>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: width * 0.04,
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
                  marginTop: height * 0.005,
                }}
              >
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
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: height * 0.04,
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
              size={width * 0.09}
              color={Colors.white}
              style={styles.closeButton}
              onPress={drawerModalClose}
            />
            <Text style={styles.drawerHeaderText}>
              {" "}
              Hello, Alexander Ikosong{" "}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: height * 0.04,
              }}
            >
              <Image
                source={require("../../assets/images/alex.jpg")}
                style={{
                  width: width * 0.2,
                  height: height * 0.1,
                  marginLeft: width * 0.05,
                }}
              />
              <View
                style={{ marginLeft: width * 0.05, marginTop: height * 0.016 }}
              >
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: width * 0.035,
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  @derealalexis{" "}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.lightGray,
                    padding: width * 0.015,
                    marginTop: width * 0.05,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontSize: width * 0.04, fontWeight: "900" }}>
                    {" "}
                    Edit Profile{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: height * 0.05 }}>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: width * 0.05,
                  width: "100%",
                }}
                onPress={handleHome}
              >
                <FontAwesome
                  name="home"
                  size={width * 0.07}
                  color={Colors.white}
                />
                <Text
                  style={{
                    fontSize: width * 0.04,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: width * 0.08,
                    marginTop: height * 0.01,
                  }}
                >
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: width * 0.05,
                  width: "100%",
                }}
              >
                <FontAwesome
                  name="share-alt"
                  size={width * 0.07}
                  color={Colors.white}
                />
                <Text
                  style={{
                    fontSize: width * 0.04,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: width * 0.08,
                    marginTop: height * 0.01,
                  }}
                >
                  Tell a friend
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: width * 0.05,
                  width: "100%",
                }}
              >
                <Entypo name="info" size={width * 0.07} color={Colors.white} />
                <Text
                  style={{
                    fontSize: width * 0.04,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: width * 0.08,
                    marginTop: height * 0.01,
                  }}
                >
                  Information
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: width * 0.05,
                  width: "100%",
                }}
              >
                <Ionicons
                  name="settings"
                  size={width * 0.07}
                  color={Colors.white}
                />
                <Text
                  style={{
                    fontSize: width * 0.04,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: width * 0.08,
                    marginTop: height * 0.01,
                  }}
                >
                  Setting
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: width * 0.05,
                  width: "100%",
                  marginTop: "100%",
                }}
                onPress={handleLogout}
              >
                <FontAwesome
                  name="power-off"
                  size={width * 0.07}
                  color={Colors.white}
                />
                <Text
                  style={{
                    fontSize: width * 0.04,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: width * 0.08,
                    marginTop: height * 0.01,
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
    padding: width * 0.025,
  },
  dailyOverview: {
    padding: width * 0.02,
  },
  sectionTitle: {
    fontSize: width * 0.06,
    marginBottom: 10,
    textAlign: "center",
    marginTop: width * 0.02,
    color: Colors.lightBlue,
    fontWeight: "700",
  },
  fab: {
    position: "absolute",
    margin: width * 0.04,
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
    padding: width * 0.04,
  },
  taskNameInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: width * 0.02,
    marginBottom: height * 0.02,
    color: Colors.darkGray,
  },
  taskDescriptionInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: width * 0.02,
    marginBottom: height * 0.02,
    color: Colors.darkGray,
    height: "20%",
  },
  taskDateInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: width * 0.02,
    marginBottom: height * 0.02,
    color: Colors.darkGray,
    width: "40%",
  },
  taskTimeInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: width * 0.02,
    marginBottom: height * 0.02,
    color: Colors.darkGray,
    marginLeft: width * 0.06,
    width: "40%",
  },
  createButton: {
    backgroundColor: "#66BB6A", // Green
    padding: width * 0.02,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: "45%",
  },
  createButtonText: {
    color: "#FFFFFF", // White text
    fontSize: width * 0.06,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#FF4D4D", // Red
    padding: width * 0.02,
    borderRadius: 10,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#FFFFFF", // White text
    fontSize: width * 0.06,
    fontWeight: "bold",
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  drawerContent: {
    backgroundColor: Colors.lightBlue, // Lighter shade of Vibrant Orange
    borderTopRightRadius: width * 0.04,
    width: "65%",
    height: "100%",
    padding: width * 0.04,
  },
  closeButton: {
    marginLeft: "80%",
  },
  drawerHeaderText: {
    fontSize: width * 0.045,
    color: Colors.white,
    marginTop: height * 0.04,
  },
});

export default HomeScreen;
