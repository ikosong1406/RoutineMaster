import React from "react";
import { View, StyleSheet } from "react-native";

const HorizontalRule = () => <View style={styles.horizontalRule} />;

const styles = StyleSheet.create({
  horizontalRule: {
    borderBottomColor: "black", // Change the color to your desired color
    borderBottomWidth: 1, // Adjust the width as needed
    marginVertical: 10, // Adjust the vertical margin as needed
  },
});

export default HorizontalRule;
