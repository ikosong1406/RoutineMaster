import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Colors from "../components/Colors";
import { useFonts } from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ResetPassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Define your fontsLoaded state within the component
  const [fontsLoaded] = useFonts({
    "TiltPrism Variable": require("../../assets/fonts/LilitaOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleConfirm = async () => {
    alert("Account has been recovered");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/task.jpg")}
        style={styles.image}
      />
      <View style={styles.c1}>
        <Text style={styles.text}>Reset Password</Text>

        <View style={{ padding: width * 0.08, marginTop: height * 0.03 }}>
          <View
            style={{
              flexDirection: "row",
              borderWidth: width * 0.005,
              borderColor: Colors.white,
              borderRadius: 8,
              paddingVertical: height * 0.01,
              marginTop: height * 0.02,
            }}
          >
            <FontAwesome5
              name="lock"
              size={width * 0.06}
              color={Colors.darkGray}
              style={{ marginLeft: width * 0.05 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              borderWidth: width * 0.005,
              borderColor: Colors.white,
              borderRadius: 8,
              paddingVertical: height * 0.01,
              marginTop: height * 0.02,
            }}
          >
            <FontAwesome5
              name="lock"
              size={width * 0.06}
              color={Colors.darkGray}
              style={{ marginLeft: width * 0.05 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmpassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            title="Login"
            onPress={handleConfirm}
          >
            {loading ? (
              <ActivityIndicator size="large" color="black" />
            ) : (
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: "700",
                  fontSize: width * 0.04,
                  textAlign: "center",
                }}
              >
                Confirm
              </Text>
            )}
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginTop: height * 0.03,
          }}
        ></View>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  c1: {
    backgroundColor: Colors.Blue,
    width: "100%",
    height: height * 1,
    borderTopLeftRadius: width * 0.5,
    zIndex: 2,
    marginTop: height * -0.15,
  },
  image: {
    height: height * 0.3,
    width: width * 1,
    zIndex: 1,
  },
  text: {
    fontFamily: "TiltPrism Variable",
    fontSize: width * 0.1,
    color: Colors.darkGray,
    marginTop: height * 0.1,
    textAlign: "center",
  },
  input: {
    marginLeft: width * 0.03,
  },
  btn: {
    backgroundColor: Colors.Black,
    borderRadius: 8,
    marginTop: height * 0.02,
    paddingVertical: height * 0.01,
    width: "60%",
    alignSelf: "center",
    marginTop: height * 0.03,
  },
});
