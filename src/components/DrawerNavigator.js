import { StatusBar } from "expo-status-bar";
import React, { useRef, useState, useContext } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import Colors from "./Colors";
import themeContext from "./themeContext";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import profile from "../../assets/images/alex.jpg";
import home from "../../assets/images/home.png";
import search from "../../assets/images/search.png";
import notifications from "../../assets/images/bell.png";
import settings from "../../assets/images/settings.png";
import logout from "../../assets/images/logout.png";
import menu from "../../assets/images/menu.png";
import close from "../../assets/images/close.png";
import photo from "../../assets/images/photo.jpg";
import HomeScreen from "../screens/Home";
import TimetableScreen from "../screens/Timetable";
import ShareScreen from "../screens/ShareScreen";
import Information from "../screens/Information";
import Settings from "../screens/Setting";

const { width, height } = Dimensions.get("window");

export default function DrawerNavigator({ navigation }) {
  const [currentTab, setCurrentTab] = useState("Tasks");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const tabComponents = {
    Tasks: <HomeScreen />,
    Timetable: <TimetableScreen />,
    Share: <ShareScreen />,
    Information: <Information />,
    Settings: <Settings />,
  };

  const handleProfile = () => {
    navigation.navigate("UserProfile");
  };

  const theme = useContext(themeContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        <Image
          source={profile}
          style={{
            width: width * 0.15,
            height: height * 0.08,
            borderRadius: 10,
            marginTop: height * 0.02,
          }}
        ></Image>

        <Text
          style={{
            fontSize: width * 0.04,
            fontWeight: "bold",
            color: "white",
            marginTop: height * 0.02,
          }}
        >
          Alexander Ikosong
        </Text>

        <TouchableOpacity onPress={handleProfile}>
          <Text
            style={{
              marginTop: height * 0.01,
              color: "white",
            }}
          >
            View Profile
          </Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: height * 0.06 }}>
          {TabButton(currentTab, setCurrentTab, "Tasks", home)}
          {TabButton(currentTab, setCurrentTab, "Timetable", search)}
          {TabButton(currentTab, setCurrentTab, "Share", notifications)}
          {TabButton(currentTab, setCurrentTab, "Information", settings)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}
        </View>

        <View>{TabButton(currentTab, setCurrentTab, "LogOut", logout)}</View>
      </View>
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: theme.background,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: width * 0.04,
          paddingVertical: height * 0.05,
          borderRadius: showMenu ? width * 0.05 : 0,
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
            flex: 1,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              //   justifyContent: "space-evenly",
              padding: width * 0.02,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                // Do Actions Here....
                // Scaling the view...
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(offsetValue, {
                  // YOur Random Value...
                  toValue: showMenu ? 0 : 230,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(closeButtonOffset, {
                  // YOur Random Value...
                  toValue: !showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                setShowMenu(!showMenu);
              }}
            >
              <Image
                source={showMenu ? close : menu}
                style={{
                  width: width * 0.06,
                  height: height * 0.03,
                  tintColor: Colors.Blue,
                }}
              ></Image>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: width * 0.06,
                fontWeight: "900",
                marginLeft: "10%",
                color: theme.textColor,
              }}
            >
              {" "}
              {currentTab}
            </Text>
          </View>
          <View style={{ marginTop: height * 0.01, flex: 1 }}>
            {tabComponents[currentTab]}
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image, navigation) => {
  const theme = useContext(themeContext);
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
          navigation.navigate("Login");
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor:
            currentTab == title ? theme.background : "transparent",
          paddingLeft: width * 0.04,
          paddingRight: width * 0.05,
          borderRadius: 8,
          marginTop: height * 0.02,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? Colors.Blue : "white",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? Colors.Blue : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Blue,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
