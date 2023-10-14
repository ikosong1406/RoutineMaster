import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import DateTime from "../components/DateTime";
import Colors from "../components/Colors";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = () => {
  const tasks = [
    {
      title: "do assignment",
      description: "do your maths and physics assignment",
      date: "14 June",
      time: "2:45pm",
    },
    {
      title: "another task",
      description: "description of another task",
      date: "15 June",
      time: "3:00pm",
    },
    {
      title: "yet another task",
      description: "description of yet another task",
      date: "16 June",
      time: "4:15pm",
    },
    {
      title: "do assignment",
      description: "do your maths and physics assignment",
      date: "14 June",
      time: "2:45pm",
    },
    {
      title: "another task",
      description: "description of another task",
      date: "15 June",
      time: "3:00pm",
    },
    {
      title: "yet another task",
      description: "description of yet another task",
      date: "16 June",
      time: "4:15pm",
    },
    {
      title: "do assignment",
      description: "do your maths and physics assignment",
      date: "14 June",
      time: "2:45pm",
    },
    {
      title: "another task",
      description: "description of another task",
      date: "15 June",
      time: "3:00pm",
    },
    {
      title: "yet another task",
      description: "description of yet another task",
      date: "16 June",
      time: "4:15pm",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/alex.jpg")}
            style={{ width: 60, height: 60, borderRadius: 100 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 28, marginLeft: 65, fontWeight: "900" }}>
          {" "}
          To-Do List
        </Text>
        <FontAwesome
          name="search"
          size={24}
          color="black"
          style={{ marginLeft: 90 }}
        />
      </View>
      <DateTime />
      <View style={styles.dailyOverview}>
        <Text style={styles.sectionTitle}>Daily Overview</Text>
        <ScrollView>
          {tasks.map((task, index) => (
            <TouchableOpacity key={index} style={styles.activityCard}>
              <Text style={styles.activityTitle}>{task.title}</Text>
              <Text style={styles.activityDescription}>{task.description}</Text>
              <View
                style={{ width: "100%", height: "6%", color: Colors.darkGray }}
              ></View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={styles.activityDate}>{task.date}</Text>
                <Text style={styles.activityTime}>{task.time}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{ height: 550 }} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text> Add New Task </Text>
        <Entypo name="plus" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 7,
  },
  dailyOverview: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  activityCard: {
    backgroundColor: Colors.lightBlue,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  activityTitle: {
    fontSize: 20,
    color: Colors.white,
  },
  activityDescription: {
    fontSize: 14,
    color: Colors.white,
  },
  activityDate: {
    fontSize: 16,
    color: Colors.white,
  },
  activityTime: {
    fontSize: 16,
    color: Colors.white,
    marginLeft: 20,
  },
  button: {
    zIndex: 99,
    backgroundColor: Colors.vibrantOrange,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    width: "50%",
    padding: 10,
    borderRadius: 10,
  },
});

export default HomeScreen;
