import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Checkbox = ({ checked, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {checked && <View style={styles.checkboxChecked} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.047,
    height: height * 0.022,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    width: width * 0.035,
    height: height * 0.017,
    backgroundColor: "black",
  },
});

export default Checkbox;
