import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dimensions } from "react-native";
import HomeScreen from "../screens/Home";
import TimetableScreen from "../screens/Timetable";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#00A5CF",
        inactiveTintColor: "#999999",
        style: {
          backgroundColor: "#F5F5F5",
        },
        labelStyle: {
          fontSize: width * 0.03,
        },
        tabStyle: {
          paddingTop: height * 0.005,
        },
        indicatorStyle: {
          backgroundColor: "#FFA500",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="check-square-o"
              size={width * 0.08}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Timetable"
        component={TimetableScreen}
        options={{
          tabBarLabel: "Timetable",
          tabBarIcon: ({ color }) => (
            <AntDesign name="table" size={width * 0.08} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTabNavigator;
