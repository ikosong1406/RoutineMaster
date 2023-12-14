import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native"; // Import View
import { format } from "date-fns";
import Colors from "../components/Colors";

const { width, height } = Dimensions.get("window");

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const updateDateTime = () => {
      setCurrentDateTime(new Date());
    };

    // Update the date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Cleanup when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDate = format(currentDateTime, "MMMM d, yyyy");
  const formattedTime = format(currentDateTime, "HH:mm:ss");

  return (
    <View>
      <Text style={styles.date}>{formattedDate}</Text>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    color: Colors.Blue,
    fontSize: width * 0.05,
    fontWeight: "bold",
    paddingHorizontal: width * 0.045,
    marginTop: height * 0.015,
  },
  time: {
    color: Colors.Blue,
    fontSize: width * 0.045,
    paddingHorizontal: width * 0.045,
    marginTop: height * 0.01,
  },
});

export default DateTimeDisplay;
