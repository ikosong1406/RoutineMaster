import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TextInput } from "react-native";

const CreateTimetable = () => {
  const [timetableName, setTimetableName] = useState("");

  return (
    <View style={styles.foodTimetableContainer}>
      <View style={styles.foodTimetableTitle}>
        <TextInput
          style={styles.timetableNameInput}
          placeholder="Timetable Name"
          value={timetableName}
          onChangeText={(text) => setTimetableName(text)}
        />
      </View>
      <View style={styles.Container}>
        <View style={styles.foodTimetableHeader}>
          <View style={styles.foodTimetableCell}>
            <Text style={styles.foodTimetableCellText}>Monday</Text>
          </View>
          <View style={styles.foodTimetableCell}>
            <Text style={styles.foodTimetableCellText}>Tuesday</Text>
          </View>
          <View style={styles.foodTimetableCell}>
            <Text style={styles.foodTimetableCellText}>Wednesday</Text>
          </View>
          <View style={styles.foodTimetableCell}>
            <Text style={styles.foodTimetableCellText}>Dinner</Text>
          </View>
          <View style={styles.foodTimetableCell}>
            <Text style={styles.foodTimetableCellText}>Dinner</Text>
          </View>
          <View style={styles.foodTimetableCell}>
            <Text style={styles.foodTimetableCellText}>Dinner</Text>
          </View>
          <View style={styles.foodTimetableCell}>
            <Text style={styles.foodTimetableCellText}>Dinner</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  foodTimetableContainer: {
    margin: 5,
  },
  foodTimetableTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  foodTimetableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  foodTimetableHeaderCell: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  foodTimetableCell: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
  },
  foodTimetableCellText: {
    fontSize: 13,
  },
  foodTimetableRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});
export default CreateTimetable;
