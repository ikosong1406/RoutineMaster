import React, { useState, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  StyleSheet,
  Modal,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "./Colors";
import themeContext from "../components/themeContext";

const { width, height } = Dimensions.get("window");

const TimetableList = ({ timetable, onDeleteTimetable }) => {
  const [selectedTimetable, setSelectedTimetable] = useState(null);

  const renderTimetableItem = ({ item }) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        backgroundColor: Colors.lightGray,
        borderRadius: 10,
        marginTop: height * 0.02,
      }}
      onPress={() => showTimetableDetails(item)}
    >
      <View>
        <Text style={styles.activityTitle}>{item.timetableName}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleDelete = (timetableId) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this timetable?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => onDeleteTimetable(timetableId) },
      ],
      { cancelable: true }
    );
  };

  const showTimetableDetails = (timetable) => {
    setSelectedTimetable(timetable);
  };

  const closeTimetableDetails = () => {
    setSelectedTimetable(null);
  };

  const theme = useContext(themeContext);

  return (
    <View>
      <ScrollView
        style={{ width: "100%", height: "87%", paddingBottom: height * 0.04 }}
      >
        <SwipeListView
          data={timetable}
          renderItem={renderTimetableItem}
          keyExtractor={(item) => (item.id ? item.id.toString() : "")}
          renderHiddenItem={(data, rowMap) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                backgroundColor: Colors.Blue,
                borderRadius: 10,
                marginTop: height * 0.02,
                height: "auto",
              }}
            >
              <TouchableOpacity
                style={{ justifyContent: "center" }}
                onPress={() => handleDelete(data.item.id)}
              >
                <FontAwesome
                  name="trash"
                  size={width * 0.07}
                  color={Colors.Overdue}
                  style={{ marginLeft: "85%" }}
                />
              </TouchableOpacity>
            </View>
          )}
          rightOpenValue={-65}
        />
        {selectedTimetable && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={!!selectedTimetable}
            onRequestClose={closeTimetableDetails}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.timetableName}>
                  {selectedTimetable.timetableName}
                </Text>

                <ScrollView
                  style={{
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: Colors.lightGray,
                    padding: 5,
                    marginTop: height * 0.01,
                    backgroundColor: theme.background,
                    color: theme.textColor,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: height * 0.02,
                      borderBottomColor: Colors.lightGray,
                      borderBottomWidth: 2,
                      width: "100%",
                    }}
                  >
                    <Text style={styles.input}>S/N</Text>
                    <Text style={styles.input}>{selectedTimetable.c2r1}</Text>
                    <Text style={styles.input}>{selectedTimetable.c3r1}</Text>
                    <Text style={styles.input}>{selectedTimetable.c4r1}</Text>
                    <Text style={styles.input}>{selectedTimetable.c5r1}</Text>
                    <Text style={styles.input}>{selectedTimetable.c6r1}</Text>
                    <Text style={styles.input}>{selectedTimetable.c7r1}</Text>
                    <Text style={styles.input}>{selectedTimetable.c8r1}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: height * 0.02,
                      borderBottomColor: Colors.lightGray,
                      borderBottomWidth: 2,
                    }}
                  >
                    <Text style={styles.input}>{selectedTimetable.c1r2}</Text>
                    <Text style={styles.input}>{selectedTimetable.c2r2}</Text>
                    <Text style={styles.input}>{selectedTimetable.c3r2}</Text>
                    <Text style={styles.input}>{selectedTimetable.c4r2}</Text>
                    <Text style={styles.input}>{selectedTimetable.c5r2}</Text>
                    <Text style={styles.input}>{selectedTimetable.c6r2}</Text>
                    <Text style={styles.input}>{selectedTimetable.c7r2}</Text>
                    <Text style={styles.input}>{selectedTimetable.c8r2}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: height * 0.02,
                      borderBottomColor: Colors.lightGray,
                      borderBottomWidth: 2,
                    }}
                  >
                    <Text style={styles.input}>{selectedTimetable.c1r3}</Text>
                    <Text style={styles.input}>{selectedTimetable.c2r3}</Text>
                    <Text style={styles.input}>{selectedTimetable.c3r3}</Text>
                    <Text style={styles.input}>{selectedTimetable.c4r3}</Text>
                    <Text style={styles.input}>{selectedTimetable.c5r3}</Text>
                    <Text style={styles.input}>{selectedTimetable.c6r3}</Text>
                    <Text style={styles.input}>{selectedTimetable.c7r3}</Text>
                    <Text style={styles.input}>{selectedTimetable.c8r3}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: height * 0.02,
                      borderBottomColor: Colors.lightGray,
                      borderBottomWidth: 2,
                    }}
                  >
                    <Text style={styles.input}>{selectedTimetable.c1r4}</Text>
                    <Text style={styles.input}>{selectedTimetable.c2r4}</Text>
                    <Text style={styles.input}>{selectedTimetable.c3r4}</Text>
                    <Text style={styles.input}>{selectedTimetable.c4r4}</Text>
                    <Text style={styles.input}>{selectedTimetable.c5r4}</Text>
                    <Text style={styles.input}>{selectedTimetable.c6r4}</Text>
                    <Text style={styles.input}>{selectedTimetable.c7r4}</Text>
                    <Text style={styles.input}>{selectedTimetable.c8r4}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: height * 0.02,
                      borderBottomColor: Colors.lightGray,
                      borderBottomWidth: 2,
                    }}
                  >
                    <Text style={styles.input}>{selectedTimetable.c1r5}</Text>
                    <Text style={styles.input}>{selectedTimetable.c2r5}</Text>
                    <Text style={styles.input}>{selectedTimetable.c3r5}</Text>
                    <Text style={styles.input}>{selectedTimetable.c4r5}</Text>
                    <Text style={styles.input}>{selectedTimetable.c5r5}</Text>
                    <Text style={styles.input}>{selectedTimetable.c6r5}</Text>
                    <Text style={styles.input}>{selectedTimetable.c7r5}</Text>
                    <Text style={styles.input}>{selectedTimetable.c8r5}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: height * 0.02,
                      borderBottomColor: Colors.lightGray,
                      borderBottomWidth: 2,
                    }}
                  >
                    <Text style={styles.input}>{selectedTimetable.c1r6}</Text>
                    <Text style={styles.input}>{selectedTimetable.c2r6}</Text>
                    <Text style={styles.input}>{selectedTimetable.c3r6}</Text>
                    <Text style={styles.input}>{selectedTimetable.c4r6}</Text>
                    <Text style={styles.input}>{selectedTimetable.c5r6}</Text>
                    <Text style={styles.input}>{selectedTimetable.c6r6}</Text>
                    <Text style={styles.input}>{selectedTimetable.c7r6}</Text>
                    <Text style={styles.input}>{selectedTimetable.c8r6}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: height * 0.02,
                      borderBottomColor: Colors.lightGray,
                      borderBottomWidth: 2,
                    }}
                  >
                    <Text style={styles.input}>{selectedTimetable.c1r7}</Text>
                    <Text style={styles.input}>{selectedTimetable.c2r7}</Text>
                    <Text style={styles.input}>{selectedTimetable.c3r7}</Text>
                    <Text style={styles.input}>{selectedTimetable.c4r7}</Text>
                    <Text style={styles.input}>{selectedTimetable.c5r7}</Text>
                    <Text style={styles.input}>{selectedTimetable.c6r7}</Text>
                    <Text style={styles.input}>{selectedTimetable.c7r7}</Text>
                    <Text style={styles.input}>{selectedTimetable.c8r7}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      marginTop: height * 0.02,
                    }}
                  >
                    <Text style={styles.input}>{selectedTimetable.c1r8}</Text>
                    <Text style={styles.input}>{selectedTimetable.c2r8}</Text>
                    <Text style={styles.input}>{selectedTimetable.c3r8}</Text>
                    <Text style={styles.input}>{selectedTimetable.c4r8}</Text>
                    <Text style={styles.input}>{selectedTimetable.c5r8}</Text>
                    <Text style={styles.input}>{selectedTimetable.c6r8}</Text>
                    <Text style={styles.input}>{selectedTimetable.c7r8}</Text>
                    <Text style={styles.input}>{selectedTimetable.c8r8}</Text>
                  </View>
                </ScrollView>

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={closeTimetableDetails}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  activityTitle: {
    fontSize: width * 0.04,
    fontWeight: "bold",
    color: Colors.darkGray,
  },
  activityDescription: {
    fontSize: width * 0.03,
    color: Colors.darkGray,
  },
  activityTime: {
    fontSize: width * 0.03,
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
  input: {
    padding: 5,
    margin: 5,
    width: "12.5%",
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
    color: "red",
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

export default TimetableList;
