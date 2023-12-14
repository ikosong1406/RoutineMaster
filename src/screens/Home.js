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
  Button,
  CheckBox,
  FlatList,
  Alert,
} from "react-native";
import HorizontalRule from "../components/HorizontalRule";
import * as Notifications from "expo-notifications";
import DateTime from "../components/DateTime";
import Colors from "../components/Colors";
import Task from "../components/Task";
import { FAB } from "react-native-paper";
import themeContext from "../components/themeContext";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Checkbox from "../components/Checkbox";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isImportant, setIsImportant] = useState(false);
  const [date, setDate] = useState(new Date());
  const [alarms, setAlarms] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // Fetch and display existing alarms
    fetchAlarms();
  }, []);

  const fetchAlarms = async () => {
    const allScheduledNotifications =
      await Notifications.getAllScheduledNotificationsAsync();
    setAlarms(allScheduledNotifications);
  };

  useEffect(() => {
    const registerForPushNotifications = async () => {
      try {
        const { status } = await Notifications.getPermissionsAsync();
        console.log("Notification permissions status:", status);

        if (status !== "granted") {
          const { status: newStatus } =
            await Notifications.requestPermissionsAsync();
          if (newStatus === "granted") {
            const expoPushToken = (await Notifications.getExpoPushTokenAsync())
              .data;
            console.log("Expo push token:", expoPushToken);
            setExpoPushToken(expoPushToken);
          } else {
            // Handle the case where the user declines permissions again
            // You might want to show an alert or guide the user to enable notifications
          }
        } else {
          const expoPushToken = (await Notifications.getExpoPushTokenAsync())
            .data;
          console.log("Expo push token:", expoPushToken);
          setExpoPushToken(expoPushToken);
        }
      } catch (error) {
        console.error("Error registering for push notifications:", error);
      }
    };

    registerForPushNotifications();

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const scheduleAlarm = async () => {
    try {
      const notificationDate = new Date(date);
      const identifier = await Notifications.scheduleNotificationAsync({
        content: {
          title: "Alarm",
          body: `Task: ${title}\nDescription: ${description}`,
        },
        trigger: {
          date: notificationDate,
        },
      });

      // Store the identifier or any other necessary information
      console.log("Scheduled notification identifier:", identifier);

      // Fetch and display updated alarms
      fetchAlarms();

      // Clear the input fields
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error scheduling alarm:", error);
    }
  };

  const deleteAlarm = async (identifier) => {
    try {
      await Notifications.cancelScheduledNotificationAsync(identifier);
      // Fetch and display updated alarms
      fetchAlarms();
    } catch (error) {
      console.error("Error deleting alarm:", error);
    }
  };

  const confirmDelete = (identifier) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this alarm?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => deleteAlarm(identifier) },
      ],
      { cancelable: false }
    );
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const theme = useContext(themeContext);

  console.log("Scheduled alarms:", alarms);
  console.log("Expo push token:", expoPushToken);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <DateTime />
      <View style={styles.dailyOverview}>
        <Text style={[styles.sectionTitle, { color: theme.textColor }]}>
          Daily Overview
        </Text>
        {/* <Task /> */}
        <Text>Your expo push token: {expoPushToken}</Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text>
            Title: {notification && notification.request.content.title}{" "}
          </Text>
          <Text>Body: {notification && notification.request.content.body}</Text>
          <Text>
            Data:{" "}
            {notification && JSON.stringify(notification.request.content.data)}
          </Text>
        </View>
        <FlatList
          data={alarms}
          keyExtractor={(item) => item.identifier}
          renderItem={({ item }) => (
            <View>
              <Text>{item.content.body}</Text>
              <Button
                title="Delete"
                onPress={() => confirmDelete(item.identifier)}
              />
            </View>
          )}
        />
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
            <HorizontalRule />
            <TextInput
              placeholder="Task Title"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              placeholder="Task Description"
              value={description}
              onChangeText={setDescription}
            />
            {/* <CheckBox
              value={isImportant}
              onValueChange={setIsImportant}
              title="Is Important?"
            /> */}
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="datetime"
              is24Hour={true}
              display="default"
              onChange={(event, selectedDate) => {
                if (selectedDate) {
                  setDate(selectedDate);
                  setSelectedDate(selectedDate); // if needed
                }
              }}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
            <Button title="Create Alarm" onPress={scheduleAlarm} />
            {/* <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: height * 0.03,
                justifyContent: "space-between",
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
            </View> */}
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
  taskNameInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: width * 0.01,
    marginBottom: height * 0.02,
    color: Colors.darkGray,
  },
  taskDescriptionInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: width * 0.01,
    marginBottom: height * 0.02,
    color: Colors.darkGray,
    height: "20%",
  },
  taskDateInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: width * 0.01,
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
});

export default HomeScreen;
