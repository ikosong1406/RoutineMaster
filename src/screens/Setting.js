import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Colors from "../components/Colors";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../components/themeContext";

const { width, height } = Dimensions.get("window");

const Settings = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [alarmEnabled, setAlarmEnabled] = useState(true);
  const [darkthemeEnabled, setDarkthemeEnabled] = useState(false);

  const toggleNotifications = () => {
    setNotificationsEnabled((prevState) => !prevState);
  };
  const toggleDarktheme = () => {
    setDarkthemeEnabled((prevState) => !prevState);
  };
  const toggleAlarm = () => {
    setAlarmEnabled((prevState) => !prevState);
  };
  const theme = useContext(themeContext);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <View style={styles.setting}>
        <Text style={styles.Name}>Enable Pop-Up Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.Name}>Enable Alarm</Text>
        <Switch value={alarmEnabled} onValueChange={toggleAlarm} />
      </View>
      <View style={styles.setting}>
        <Text style={styles.Name}>Dark theme</Text>
        <Switch
          value={darkthemeEnabled}
          onValueChange={(value) => {
            setDarkthemeEnabled(value);
            EventRegister.emit("ChangeTheme", value);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: width * 0.04,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.softGray,
    borderRadius: 10,
    padding: width * 0.02,
    margin: width * 0.02,
  },
  Name: {
    fontSize: width * 0.035,
    fontWeight: "bold",
  },
});

export default Settings;
