import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Share,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import Colors from "../components/Colors";
import themeContext from "../components/themeContext";

const { width, height } = Dimensions.get("window");

const ShareScreen = ({ navigation }) => {
  const appLink = " http://192.168.124.16:8081/_expo/loading";

  const handleShare = () => {
    Share.share({
      message: `${appLink}`,
    })
      .then((result) => {
        if (result.action === Share.sharedAction) {
          console.log("Shared successfully");
        } else if (result.action === Share.dismissedAction) {
          console.log("Sharing dismissed");
        }
      })
      .catch((error) => console.error("Error sharing:", error));
  };

  const theme = useContext(themeContext);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <Image
        source={require("../../assets/images/share.png")}
        style={{
          width: width * 0.9,
          height: height * 0.35,
        }}
      />
      <Text
        style={{
          fontSize: width * 0.05,
          textAlign: "center",
          marginTop: height * 0.04,
          color: theme.textColor,
        }}
      >
        Invite your friends and earn a free timetable template design
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.Blue,
          width: "40%",
          padding: width * 0.02,
          borderRadius: 10,
          alignSelf: "center",
          marginTop: "10%",
        }}
        onPress={handleShare}
      >
        <Text
          style={{
            fontSize: width * 0.04,
            color: Colors.white,
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          Invite Friends
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  drawerContent: {
    backgroundColor: Colors.lightBlue,
    borderTopRightRadius: width * 0.04,
    width: "65%",
    height: "100%",
    padding: width * 0.04,
  },
  closeButton: {
    marginLeft: "80%",
  },
  drawerHeaderText: {
    fontSize: width * 0.045,
    color: Colors.white,
    marginTop: height * 0.04,
  },
});

export default ShareScreen;
