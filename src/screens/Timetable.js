import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const TimetableScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [timetableName, setTimetableName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleCreateTimetable = () => {
    // Implement your create timetable logic here
    console.log("Creating timetable:", timetableName);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/alex.jpg")}
            style={{ width: 60, height: 60, borderRadius: 100 }}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.createNewButton} onPress={toggleModal}>
        <Text style={styles.createNewButtonText}>Create New Timetable</Text>
      </TouchableOpacity>
      {/* Active Timetables List */}
      {/* Timetable Cards */}
      {/* Empty State Message */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.timetableNameInput}
              placeholder="Timetable Name"
              value={timetableName}
              onChangeText={(text) => setTimetableName(text)}
            />
            {/* Category Dropdown */}
            {/* Create Button */}
            {/* Cancel Button */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  createNewButton: {
    backgroundColor: "#FFA500",
    borderRadius: 8,
    margin: 16,
    padding: 12,
    alignItems: "center",
  },
  createNewButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    width: "80%",
  },
  timetableNameInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
});

export default TimetableScreen;
