import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Colors from "../components/Colors";
import themeContext from "../components/themeContext";

const { width, height } = Dimensions.get("window");

const TimetableForm = ({ onSubmit }) => {
  const [timetableName, setTimetableName] = useState("");
  const [c2r1, setC2R1] = useState("");
  const [c3r1, setC3R1] = useState("");
  const [c4r1, setC4R1] = useState("");
  const [c5r1, setC5R1] = useState("");
  const [c6r1, setC6R1] = useState("");
  const [c7r1, setC7R1] = useState("");
  const [c8r1, setC8R1] = useState("");

  const [c1r2, setC1R2] = useState("");
  const [c2r2, setC2R2] = useState("");
  const [c3r2, setC3R2] = useState("");
  const [c4r2, setC4R2] = useState("");
  const [c5r2, setC5R2] = useState("");
  const [c6r2, setC6R2] = useState("");
  const [c7r2, setC7R2] = useState("");
  const [c8r2, setC8R2] = useState("");

  const [c1r3, setC1R3] = useState("");
  const [c2r3, setC2R3] = useState("");
  const [c3r3, setC3R3] = useState("");
  const [c4r3, setC4R3] = useState("");
  const [c5r3, setC5R3] = useState("");
  const [c6r3, setC6R3] = useState("");
  const [c7r3, setC7R3] = useState("");
  const [c8r3, setC8R3] = useState("");

  const [c1r4, setC1R4] = useState("");
  const [c2r4, setC2R4] = useState("");
  const [c3r4, setC3R4] = useState("");
  const [c4r4, setC4R4] = useState("");
  const [c5r4, setC5R4] = useState("");
  const [c6r4, setC6R4] = useState("");
  const [c7r4, setC7R4] = useState("");
  const [c8r4, setC8R4] = useState("");

  const [c1r5, setC1R5] = useState("");
  const [c2r5, setC2R5] = useState("");
  const [c3r5, setC3R5] = useState("");
  const [c4r5, setC4R5] = useState("");
  const [c5r5, setC5R5] = useState("");
  const [c6r5, setC6R5] = useState("");
  const [c7r5, setC7R5] = useState("");
  const [c8r5, setC8R5] = useState("");

  const [c1r6, setC1R6] = useState("");
  const [c2r6, setC2R6] = useState("");
  const [c3r6, setC3R6] = useState("");
  const [c4r6, setC4R6] = useState("");
  const [c5r6, setC5R6] = useState("");
  const [c6r6, setC6R6] = useState("");
  const [c7r6, setC7R6] = useState("");
  const [c8r6, setC8R6] = useState("");

  const [c1r7, setC1R7] = useState("");
  const [c2r7, setC2R7] = useState("");
  const [c3r7, setC3R7] = useState("");
  const [c4r7, setC4R7] = useState("");
  const [c5r7, setC5R7] = useState("");
  const [c6r7, setC6R7] = useState("");
  const [c7r7, setC7R7] = useState("");
  const [c8r7, setC8R7] = useState("");

  const [c1r8, setC1R8] = useState("");
  const [c2r8, setC2R8] = useState("");
  const [c3r8, setC3R8] = useState("");
  const [c4r8, setC4R8] = useState("");
  const [c5r8, setC5R8] = useState("");
  const [c6r8, setC6R8] = useState("");
  const [c7r8, setC7R8] = useState("");
  const [c8r8, setC8R8] = useState("");

  const handleSubmit = () => {
    if (!timetableName.trim()) {
      Alert.alert("Error", "Timetable name is required.");
      return;
    }

    onSubmit({
      timetableName,
      c1r2,
      c1r3,
      c1r4,
      c1r5,
      c1r6,
      c1r7,
      c1r8,
      c2r1,
      c2r2,
      c2r3,
      c2r4,
      c2r5,
      c2r6,
      c2r7,
      c2r8,
      c3r1,
      c3r2,
      c3r3,
      c3r4,
      c3r5,
      c3r6,
      c3r7,
      c3r8,
      c4r1,
      c4r2,
      c4r3,
      c4r4,
      c4r5,
      c4r6,
      c4r7,
      c4r8,
      c5r1,
      c5r2,
      c5r3,
      c5r4,
      c5r5,
      c5r6,
      c5r7,
      c5r8,
      c6r1,
      c6r2,
      c6r3,
      c6r4,
      c6r5,
      c6r6,
      c6r7,
      c6r8,
      c7r1,
      c7r2,
      c7r3,
      c7r4,
      c7r5,
      c7r6,
      c7r7,
      c7r8,
      c8r1,
      c8r2,
      c8r3,
      c8r4,
      c8r5,
      c8r6,
      c8r7,
      c8r8,
    });
    setTimetableName("");
    // setTaskDescription("");
    // hideDatePicker();
  };

  const theme = useContext(themeContext);

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        placeholder="TimeTable Name"
        placeholderTextColor={theme.textColor}
        value={timetableName}
        onChangeText={setTimetableName}
        style={{
          borderRadius: 10,
          borderWidth: 2,
          borderColor: Colors.lightGray,
          padding: 5,
          marginTop: height * 0.01,
          backgroundColor: theme.background,
          color: theme.textColor,
        }}
      />

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
          <TextInput
            style={styles.input}
            value={c2r1}
            onChangeText={setC2R1}
            placeholder="c2r1"
          />
          <TextInput
            style={styles.input}
            value={c3r1}
            onChangeText={setC3R1}
            placeholder="c3r1"
          />
          <TextInput
            style={styles.input}
            value={c4r1}
            onChangeText={setC4R1}
            placeholder="c4r1"
          />
          <TextInput
            style={styles.input}
            value={c5r1}
            onChangeText={setC5R1}
            placeholder="c5r1"
          />
          <TextInput
            style={styles.input}
            value={c6r1}
            onChangeText={setC6R1}
            placeholder="c6r1"
          />
          <TextInput
            style={styles.input}
            value={c7r1}
            onChangeText={setC7R1}
            placeholder="c7r1"
          />
          <TextInput
            style={styles.input}
            value={c8r1}
            onChangeText={setC8R1}
            placeholder="c8r1"
          />
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
          <TextInput
            style={styles.input}
            value={c1r2}
            onChangeText={setC1R2}
            placeholder="c1r2"
          />
          <TextInput
            style={styles.input}
            value={c2r2}
            onChangeText={setC2R2}
            placeholder="c2r2"
          />
          <TextInput
            style={styles.input}
            value={c3r2}
            onChangeText={setC3R2}
            placeholder="c3r2"
          />
          <TextInput
            style={styles.input}
            value={c4r2}
            onChangeText={setC4R2}
            placeholder="c4r2"
          />
          <TextInput
            style={styles.input}
            value={c5r2}
            onChangeText={setC5R2}
            placeholder="c5r2"
          />
          <TextInput
            style={styles.input}
            value={c6r2}
            onChangeText={setC6R2}
            placeholder="c6r2"
          />
          <TextInput
            style={styles.input}
            value={c7r2}
            onChangeText={setC7R2}
            placeholder="c7r2"
          />
          <TextInput
            style={styles.input}
            value={c8r2}
            onChangeText={setC8R2}
            placeholder="c8r2"
          />
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
          <TextInput
            style={styles.input}
            value={c1r3}
            onChangeText={setC1R3}
            placeholder="c1r3"
          />
          <TextInput
            style={styles.input}
            value={c2r3}
            onChangeText={setC2R3}
            placeholder="c2r3"
          />
          <TextInput
            style={styles.input}
            value={c3r3}
            onChangeText={setC3R3}
            placeholder="c3r3"
          />
          <TextInput
            style={styles.input}
            value={c4r3}
            onChangeText={setC4R3}
            placeholder="c4r3"
          />
          <TextInput
            style={styles.input}
            value={c5r3}
            onChangeText={setC5R3}
            placeholder="c5r3"
          />
          <TextInput
            style={styles.input}
            value={c6r3}
            onChangeText={setC6R3}
            placeholder="c6r3"
          />
          <TextInput
            style={styles.input}
            value={c7r3}
            onChangeText={setC7R3}
            placeholder="c7r3"
          />
          <TextInput
            style={styles.input}
            value={c8r3}
            onChangeText={setC8R3}
            placeholder="c8r3"
          />
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
          <TextInput
            style={styles.input}
            value={c1r4}
            onChangeText={setC1R4}
            placeholder="c1r4"
          />
          <TextInput
            style={styles.input}
            value={c2r4}
            onChangeText={setC2R4}
            placeholder="c2r4"
          />
          <TextInput
            style={styles.input}
            value={c3r4}
            onChangeText={setC3R4}
            placeholder="c3r4"
          />
          <TextInput
            style={styles.input}
            value={c4r4}
            onChangeText={setC4R4}
            placeholder="c4r4"
          />
          <TextInput
            style={styles.input}
            value={c5r4}
            onChangeText={setC5R4}
            placeholder="c5r4"
          />
          <TextInput
            style={styles.input}
            value={c6r4}
            onChangeText={setC6R4}
            placeholder="c6r4"
          />
          <TextInput
            style={styles.input}
            value={c7r4}
            onChangeText={setC7R4}
            placeholder="c7r4"
          />
          <TextInput
            style={styles.input}
            value={c8r4}
            onChangeText={setC8R4}
            placeholder="c8r4"
          />
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
          <TextInput
            style={styles.input}
            value={c1r5}
            onChangeText={setC1R5}
            placeholder="c1r5"
          />
          <TextInput
            style={styles.input}
            value={c2r5}
            onChangeText={setC2R5}
            placeholder="c2r5"
          />
          <TextInput
            style={styles.input}
            value={c3r5}
            onChangeText={setC3R5}
            placeholder="c3r5"
          />
          <TextInput
            style={styles.input}
            value={c4r5}
            onChangeText={setC4R5}
            placeholder="c4r5"
          />
          <TextInput
            style={styles.input}
            value={c5r5}
            onChangeText={setC5R5}
            placeholder="c5r5"
          />
          <TextInput
            style={styles.input}
            value={c6r5}
            onChangeText={setC6R5}
            placeholder="c6r5"
          />
          <TextInput
            style={styles.input}
            value={c7r5}
            onChangeText={setC7R5}
            placeholder="c7r5"
          />
          <TextInput
            style={styles.input}
            value={c8r5}
            onChangeText={setC8R5}
            placeholder="c8r5"
          />
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
          <TextInput
            style={styles.input}
            value={c1r6}
            onChangeText={setC1R6}
            placeholder="c1r6"
          />
          <TextInput
            style={styles.input}
            value={c2r6}
            onChangeText={setC2R6}
            placeholder="c2r6"
          />
          <TextInput
            style={styles.input}
            value={c3r6}
            onChangeText={setC3R6}
            placeholder="c3r6"
          />
          <TextInput
            style={styles.input}
            value={c4r6}
            onChangeText={setC4R6}
            placeholder="c4r6"
          />
          <TextInput
            style={styles.input}
            value={c5r6}
            onChangeText={setC5R6}
            placeholder="c5r6"
          />
          <TextInput
            style={styles.input}
            value={c6r6}
            onChangeText={setC6R6}
            placeholder="c6r6"
          />
          <TextInput
            style={styles.input}
            value={c7r6}
            onChangeText={setC7R6}
            placeholder="c7r6"
          />
          <TextInput
            style={styles.input}
            value={c8r6}
            onChangeText={setC8R6}
            placeholder="c8r6"
          />
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
          <TextInput
            style={styles.input}
            value={c1r7}
            onChangeText={setC1R7}
            placeholder="c1r7"
          />
          <TextInput
            style={styles.input}
            value={c2r7}
            onChangeText={setC2R7}
            placeholder="c2r7"
          />
          <TextInput
            style={styles.input}
            value={c3r7}
            onChangeText={setC3R7}
            placeholder="c3r7"
          />
          <TextInput
            style={styles.input}
            value={c4r7}
            onChangeText={setC4R7}
            placeholder="c4r7"
          />
          <TextInput
            style={styles.input}
            value={c5r7}
            onChangeText={setC5R7}
            placeholder="c5r7"
          />
          <TextInput
            style={styles.input}
            value={c6r7}
            onChangeText={setC6R7}
            placeholder="c6r7"
          />
          <TextInput
            style={styles.input}
            value={c7r7}
            onChangeText={setC7R7}
            placeholder="c7r7"
          />
          <TextInput
            style={styles.input}
            value={c8r7}
            onChangeText={setC8R7}
            placeholder="c8r7"
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: height * 0.02,
          }}
        >
          <TextInput
            style={styles.input}
            value={c1r8}
            onChangeText={setC1R8}
            placeholder="c1r8"
          />
          <TextInput
            style={styles.input}
            value={c2r8}
            onChangeText={setC2R8}
            placeholder="c2r8"
          />
          <TextInput
            style={styles.input}
            value={c3r8}
            onChangeText={setC3R8}
            placeholder="c3r8"
          />
          <TextInput
            style={styles.input}
            value={c4r8}
            onChangeText={setC4R8}
            placeholder="c4r8"
          />
          <TextInput
            style={styles.input}
            value={c5r8}
            onChangeText={setC5R8}
            placeholder="c5r8"
          />
          <TextInput
            style={styles.input}
            value={c6r8}
            onChangeText={setC6R8}
            placeholder="c6r8"
          />
          <TextInput
            style={styles.input}
            value={c7r8}
            onChangeText={setC7R8}
            placeholder="c7r8"
          />
          <TextInput
            style={styles.input}
            value={c8r8}
            onChangeText={setC8R8}
            placeholder="c8r8"
          />
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.createButton} onPress={handleSubmit}>
        <Text style={styles.createButtonText}> Create </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  createButton: {
    backgroundColor: Colors.Completed,
    padding: width * 0.02,
    borderRadius: 10,
    marginTop: "10%",
  },
  createButtonText: {
    color: Colors.white,
    fontSize: width * 0.04,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    padding: 5,
    margin: 5,
    width: "12.5%",
  },
});

export default TimetableForm;
