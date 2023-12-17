import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { FAB } from "react-native-paper";
import TimetableList from "../components/TimetableList";
import TimetableForm from "../components/TimetableForm";
import Colors from "../components/Colors";
import themeContext from "../components/themeContext";

const { width, height } = Dimensions.get("window");

const TimetableScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [timetable, setTimetable] = useState([]);

  const addTimetable = (newTimetable) => {
    setTimetable((prevTimetable) => [...prevTimetable, newTimetable]);
    setIsModalVisible(false);
  };

  const deleteTimetable = (timetableId) => {
    const updatedTimetable = timetable.filter(
      (timetable) => timetable.id !== timetableId
    );
    setTimetable(updatedTimetable);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const theme = useContext(themeContext);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <TimetableList timetable={timetable} onDeleteTask={deleteTimetable} />
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
                fontSize: width * 0.04,
                fontWeight: "900",
                color: Colors.darkGray,
                color: theme.textColor,
              }}
            >
              New Timetable
            </Text>
            <TimetableForm onSubmit={addTimetable} />
            <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    padding: width * 0.02,
    width: "95%",
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
