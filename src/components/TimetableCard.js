import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const TimetableCard = () => {
  const foodTimetableData = [
    {
      day: "Monday",
      breakfast: "Cereal",
      lunch: "Chicken Salad",
      dinner: "Pasta",
    },
    {
      day: "Tuesday",
      breakfast: "Oatmeal",
      lunch: "Grilled Fish",
      dinner: "Pizza",
    },
    {
      day: "Wednesday",
      breakfast: "Yogurt",
      lunch: "Vegetable Stir-fry",
      dinner: "Burger",
    },
    {
      day: "Thursday",
      breakfast: "Pancakes",
      lunch: "Tofu Curry",
      dinner: "Sushi",
    },
    {
      day: "Friday",
      breakfast: "Eggs and Bacon",
      lunch: "Beef Stew",
      dinner: "Tacos",
    },
    {
      day: "Saturday",
      breakfast: "Smoothie",
      lunch: "Spaghetti",
      dinner: "Sushi",
    },
    {
      day: "Sunday",
      breakfast: "Waffles",
      lunch: "Salmon Salad",
      dinner: "Steak",
    },
  ];

  return (
    <View style={styles.foodTimetableContainer}>
      <View style={styles.foodTimetableHeader}>
        <View style={styles.foodTimetableCell}>
          <Text style={styles.foodTimetableCellText}>Day</Text>
        </View>
        <View style={styles.foodTimetableCell}>
          <Text style={styles.foodTimetableCellText}>Breakfast</Text>
        </View>
        <View style={styles.foodTimetableCell}>
          <Text style={styles.foodTimetableCellText}>Lunch</Text>
        </View>
        <View style={styles.foodTimetableCell}>
          <Text style={styles.foodTimetableCellText}>Dinner</Text>
        </View>
      </View>
      <FlatList
        data={foodTimetableData}
        keyExtractor={(item) => item.day}
        renderItem={({ item }) => (
          <View style={styles.foodTimetableRow}>
            <View style={styles.foodTimetableCell}>
              <Text style={styles.foodTimetableCellText}>{item.day}</Text>
            </View>
            <View style={styles.foodTimetableCell}>
              <Text style={styles.foodTimetableCellText}>{item.breakfast}</Text>
            </View>
            <View style={styles.foodTimetableCell}>
              <Text style={styles.foodTimetableCellText}>{item.lunch}</Text>
            </View>
            <View style={styles.foodTimetableCell}>
              <Text style={styles.foodTimetableCellText}>{item.dinner}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  foodTimetableContainer: {
    marginTop: height * 0.02,
  },
  foodTimetableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  foodTimetableCell: {
    flex: 1,
    padding: width * 0.02,
    justifyContent: "center",
  },
  foodTimetableCellText: {
    fontSize: width * 0.035,
  },
  foodTimetableRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
});

export default TimetableCard;
