import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Share,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import Colors from "../components/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ShareScreen = ({ navigation }) => {
  //   const [message, setMessage] = React.useState("Check out our awesome app!");
  const appLink = " http://192.168.124.16:8081/_expo/loading";
  const [isModalDrawer, setIsModalDrawer] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const drawerModal = () => {
    setIsModalDrawer(!isModalDrawer);
  };
  const drawerModalClose = () => {
    setIsModalDrawer(false);
  };

  useEffect(() => {
    if (isNavigating) {
      // Introduce a 2-second delay before navigating
      setTimeout(() => {
        navigation.navigate("Login");
      }, 2000); // 2000 milliseconds (2 seconds)
    }
  }, [isNavigating]);

  const handleHome = () => {
    setIsModalDrawer(false);
    navigation.navigate("Tab");
  };

  const handleShareScreen = () => {
    setIsModalDrawer(false);
    navigation.navigate("Share");
  };

  const handleLogout = () => {
    setIsModalDrawer(false);
    setIsNavigating(true);
  };

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

  const handleInfo = () => {
    setIsModalDrawer(false);
    navigation.navigate("Info");
  };

  const handleSetting = () => {
    setIsModalDrawer(false);
    navigation.navigate("Setting");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={drawerModal}>
          <Image
            source={require("../../assets/images/alex.jpg")}
            style={{
              width: width * 0.13,
              height: height * 0.06,
              borderRadius: 100,
              marginLeft: width * 0.03,
            }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: width * 0.08,
            marginLeft: width * 0.25,
            fontWeight: "900",
            color: Colors.lightBlue,
          }}
        >
          Invite
        </Text>
      </View>
      <Image
        source={require("../../assets/images/share.png")}
        style={{
          width: width * 0.8,
          height: height * 0.35,
          marginLeft: width * 0.1,
        }}
      />
      <Text
        style={{
          fontSize: width * 0.06,
          textAlign: "center",
          color: Colors.lightBlue,
        }}
      >
        {" "}
        Invite your friends and earn template design
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.sandyBeige,
          width: "40%",
          padding: width * 0.03,
          borderRadius: 10,
          marginLeft: "30%",
          marginTop: "20%",
        }}
        onPress={handleShare}
      >
        <Text style={{ fontSize: width * 0.06, fontWeight: "700" }}>
          Invite Friends
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalDrawer}
        onRequestClose={drawerModal}
      >
        <View style={styles.drawerContainer}>
          <View style={styles.drawerContent}>
            <FontAwesome
              name="close"
              size={width * 0.09}
              color={Colors.white}
              style={styles.closeButton}
              onPress={drawerModalClose}
            />
            <Text style={styles.drawerHeaderText}>
              {" "}
              Hello, Alexander Ikosong{" "}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: height * 0.04,
              }}
            >
              <Image
                source={require("../../assets/images/alex.jpg")}
                style={{
                  width: width * 0.2,
                  height: height * 0.1,
                  marginLeft: width * 0.05,
                }}
              />
              <View
                style={{ marginLeft: width * 0.05, marginTop: height * 0.016 }}
              >
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: width * 0.035,
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  @derealalexis{" "}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.lightGray,
                    padding: width * 0.015,
                    marginTop: width * 0.05,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontSize: width * 0.04, fontWeight: "900" }}>
                    {" "}
                    Edit Profile{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: height * 0.05 }}>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: width * 0.05,
                  width: "100%",
                }}
                onPress={handleHome}
              >
                <FontAwesome
                  name="home"
                  size={width * 0.07}
                  color={Colors.white}
                />
                <Text
                  style={{
                    fontSize: width * 0.04,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: width * 0.08,
                    marginTop: height * 0.01,
                  }}
                >
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: width * 0.05,
                  width: "100%",
                }}
                onPress={handleShareScreen}
              >
                <FontAwesome
                  name="share-alt"
                  size={width * 0.07}
                  color={Colors.white}
                />
                <Text
                  style={{
                    fontSize: width * 0.04,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: width * 0.08,
                    marginTop: height * 0.01,
                  }}
                >
                  Tell a friend
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: width * 0.05,
                  width: "100%",
                }}
                onPress={handleInfo}
              >
                <Entypo name="info" size={width * 0.07} color={Colors.white} />
                <Text
                  style={{
                    fontSize: width * 0.04,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: width * 0.08,
                    marginTop: height * 0.01,
                  }}
                >
                  Information
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: width * 0.05,
                  width: "100%",
                }}
                onPress={handleSetting}
              >
                <Ionicons
                  name="settings"
                  size={width * 0.07}
                  color={Colors.white}
                />
                <Text
                  style={{
                    fontSize: width * 0.04,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: width * 0.08,
                    marginTop: height * 0.01,
                  }}
                >
                  Setting
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: width * 0.05,
                  width: "100%",
                  marginTop: "100%",
                }}
                onPress={handleLogout}
              >
                <FontAwesome
                  name="power-off"
                  size={width * 0.07}
                  color={Colors.white}
                />
                <Text
                  style={{
                    fontSize: width * 0.04,
                    fontWeight: "900",
                    color: Colors.white,
                    marginLeft: width * 0.08,
                    marginTop: height * 0.01,
                  }}
                >
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFF0", // Light gray
    padding: width * 0.025,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  drawerContent: {
    backgroundColor: Colors.lightBlue, // Lighter shade of Vibrant Orange
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
