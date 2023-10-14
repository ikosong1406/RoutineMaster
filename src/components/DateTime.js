import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native"; // Import View
import { format } from "date-fns";
import Colors from "../components/Colors";

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
    <View style={{ backgroundColor: Colors.white }}>
      <Text style={styles.date}>{formattedDate}</Text>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    color: Colors.darkGray,
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  time: {
    color: Colors.darkGray,
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default DateTimeDisplay;
