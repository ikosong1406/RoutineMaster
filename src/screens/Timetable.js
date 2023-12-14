import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { FAB } from "react-native-paper";
import TimetableCard from "../components/TimetableCard";
import CreateTimetable from "../components/CreateTimetable";
import Colors from "../components/Colors";
import themeContext from "../components/themeContext";

const { width, height } = Dimensions.get("window");

const TimetableScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [timetableName, setTimetableName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [timetable, setTimetable] = useState([
    // Dummy timetable data
    { id: 1, name: "Timetable 1", description: "Description of Timetable 1" },
    { id: 2, name: "Timetable 2", description: "Description of Timetable 2" },
    { id: 3, name: "Timetable 3", description: "Description of Timetable 3" },
  ]);
  const [selectedTimetable, setSelectedTimetable] = useState(null);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleCreateTimetable = () => {
    // Implement your create timetable logic here
    console.log("Creating timetable:", timetableName);
    setIsModalVisible(false);
  };

  const showTimetableDetails = (timetable) => {
    setSelectedTimetable(timetable);
  };

  const closeTimetableDetails = () => {
    setSelectedTimetable(null);
  };

  const theme = useContext(themeContext);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {timetable.map((timetable) => (
        <TouchableOpacity
          key={timetable.id}
          style={styles.timetableCard}
          onPress={() => showTimetableDetails(timetable)}
        >
          <Text style={styles.timetableName}>{timetable.name}</Text>
          <Text style={styles.timetableDescription}>
            {timetable.description}
          </Text>
        </TouchableOpacity>
      ))}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <CreateTimetable />
            <TouchableOpacity
              style={styles.createButton}
              onPress={handleCreateTimetable}
            >
              <Text style={styles.createButtonText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {
        /* Display Full Timetable Details */
        selectedTimetable && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={!!selectedTimetable}
            onRequestClose={closeTimetableDetails}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.timetableName}>
                  {selectedTimetable.name}
                </Text>
                <Text style={styles.timetableDescription}>
                  {selectedTimetable.description}
                </Text>
                <TimetableCard />
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={closeTimetableDetails}
                >
                  <Text style={styles.closeButtonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={closeTimetableDetails}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )
      }
      <FAB
        style={styles.fab}
        icon="plus"
        color={Colors.darkGray}
        onPress={toggleModal}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: Colors.white,
    borderColor: Colors.Blue,
    borderWidth: 5,
    borderRadius: 10,
    padding: width * 0.05,
    width: "90%",
  },
  timetableNameInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
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
  timetableCard: {
    backgroundColor: Colors.softGray,
    borderRadius: 10,
    padding: width * 0.04,
    margin: width * 0.02,
  },
  timetableName: {
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
  timetableDescription: {
    fontSize: width * 0.03,
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: Colors.Blue,
    borderRadius: 10,
    padding: width * 0.02,
    alignItems: "center",
    marginTop: height * 0.02,
  },
  closeButtonText: {
    color: Colors.white,
    fontSize: width * 0.03,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: Colors.Overdue,
    borderRadius: 10,
    padding: width * 0.02,
    alignItems: "center",
    marginTop: height * 0.02,
  },
});

export default TimetableScreen;
