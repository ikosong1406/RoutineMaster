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
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../components/Colors";
import { useFonts } from "expo-font";
import { firebase } from "../../firebase/firebase";
import { auth } from "../../firebase/firebase";

const { width, height } = Dimensions.get("window");

const UserRegister = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Define your fontsLoaded state within the component
  const [fontsLoaded] = useFonts({
    "TiltPrism Variable": require("../../assets/fonts/LilitaOne-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleLogin = async () => {
    alert("Account has been Created");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/task.jpg")}
        style={styles.image}
      />
      <View style={styles.c1}>
        <Text style={styles.text}>Register</Text>

        <View style={{ padding: width * 0.08, marginTop: height * 0.03 }}>
          <View
            style={{
              flexDirection: "row",
              borderWidth: width * 0.005,
              borderColor: Colors.white,
              borderRadius: 8,
              paddingVertical: height * 0.01,
            }}
          >
            <FontAwesome5
              name="user-alt"
              size={width * 0.06}
              color={Colors.darkGray}
              style={{ marginLeft: width * 0.05 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              borderWidth: width * 0.005,
              borderColor: Colors.white,
              borderRadius: 8,
              marginTop: height * 0.02,
              paddingVertical: height * 0.01,
            }}
          >
            <FontAwesome5
              name="calendar-alt"
              size={width * 0.06}
              color={Colors.darkGray}
              style={{ marginLeft: width * 0.05 }}
            />
            <TextInput
              style={styles.input}
              placeholder="DD/MM/YYYY"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            title="Login"
            onPress={handleLogin}
          >
            {loading ? (
              <ActivityIndicator size="large" color="black" />
            ) : (
              <Text
                style={{
                  color: Colors.darkGray,
                  fontWeight: "700",
                  fontSize: width * 0.06,
                  textAlign: "center",
                }}
              >
                Create Account
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserRegister;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  c1: {
    backgroundColor: Colors.lightBlue,
    width: "100%",
    height: height * 1,
    borderTopRightRadius: width * 0.5,
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
    fontSize: width * 0.17,
    color: Colors.darkGray,
    marginTop: height * 0.1,
    textAlign: "center",
  },
  input: {
    marginLeft: width * 0.03,
    width: "60%",
  },
  btn: {
    backgroundColor: Colors.vibrantOrange,
    borderRadius: 8,
    marginTop: height * 0.02,
    paddingVertical: height * 0.01,
    width: "60%",
    alignSelf: "center",
    marginTop: height * 0.03,
  },
});
