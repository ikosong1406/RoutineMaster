import React, { useState, useEffect, useContext } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Dimensions,
  StyleSheet,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { scheduleNotificationAsync } from "expo-notifications";
import { Audio } from "expo-av";
import Colors from "../components/Colors";
import themeContext from "../components/themeContext";

const { width, height } = Dimensions.get("window");

const TaskForm = ({ onSubmit }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (pickedDate) => {
    setDate(pickedDate);
    hideDatePicker();
  };

  useEffect(() => {
    const scheduleNotification = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/images/audio.mp3")
      );

      const notificationId = await scheduleNotificationAsync({
        content: {
          title: "Task Reminder",
          body: `Don't forget about ${taskName}!`,
          sound: true,
        },
        trigger: { date },
      });

      // You can handle additional logic here when the notification is scheduled
    };

    scheduleNotification();
  }, [date, taskName]);

  const handleSubmit = () => {
    if (!taskName.trim() || !taskDescription.trim()) {
      Alert.alert("Error", "Task name and description are required.");
      return;
    }

    onSubmit({ taskName, taskDescription, date });
    setTaskName("");
    setTaskDescription("");
    hideDatePicker();
  };

  const theme = useContext(themeContext);

  return (
    <View>
      <TextInput
        placeholder="Task Name"
        placeholderTextColor={theme.textColor}
        value={taskName}
        onChangeText={setTaskName}
        style={{
          borderRadius: 10,
          borderWidth: 2,
          borderColor: Colors.lightGray,
          padding: 10,
          marginTop: height * 0.02,
          backgroundColor: theme.background,
          color: theme.textColor,
        }}
      />
      <TextInput
        placeholder="Task Description"
        placeholderTextColor={theme.textColor}
        value={taskDescription}
        onChangeText={setTaskDescription}
        style={{
          borderRadius: 10,
          borderWidth: 2,
          borderColor: Colors.lightGray,
          padding: 10,
          marginTop: height * 0.02,
          backgroundColor: theme.background,
          color: theme.textColor,
        }}
      />
      <TouchableOpacity
        onPress={showDatePicker}
        style={{
          borderRadius: 10,
          borderWidth: 2,
          borderColor: Colors.lightGray,
          padding: 10,
          marginTop: height * 0.02,
          backgroundColor: theme.background,
        }}
      >
        <Text
          style={{
            color: theme.textColor,
            fontSize: width * 0.04,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Set Date And Time{" "}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        is12Hour={true}
        display="default"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
});

export default TaskForm;
