import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  StyleSheet,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "./Colors";

const { width, height } = Dimensions.get("window");

const TaskList = ({ tasks, onDeleteTask }) => {
  const renderTaskItem = ({ item }) => (
    <View
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
    >
      <View>
        <Text style={styles.activityTitle}>{item.taskName}</Text>
        <Text style={styles.activityDescription}>{item.taskDescription}</Text>
        <Text style={styles.activityTime}>{item.date.toString()}</Text>
      </View>
    </View>
  );

  const handleDelete = (taskId) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this task?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", onPress: () => onDeleteTask(taskId) },
      ],
      { cancelable: true }
    );
  };

  return (
    <View>
      <ScrollView
        style={{ width: "100%", height: "87%", paddingBottom: height * 0.04 }}
      >
        <SwipeListView
          data={tasks}
          renderItem={renderTaskItem}
          keyExtractor={(item) => item.id.toString()}
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
          rightOpenValue={-65} // Adjust the value based on your design
        />
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
});

export default TaskList;
