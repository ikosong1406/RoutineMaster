import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Modal,
  TextInput,
  Dimensions,
} from "react-native";
import HorizontalRule from "../components/HorizontalRule";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../components/Colors";
import profile from "../../assets/images/alex.jpg";

const { width, height } = Dimensions.get("window");

const UsersProfile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/images/task.jpg")}
        style={styles.image}
      />
      <View style={styles.c1}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: width * 0.05,
          }}
        >
          <Image
            source={profile}
            style={{
              width: width * 0.25,
              height: height * 0.12,
              borderRadius: 20,
              marginTop: height * -0.08,
              zIndex: 3,
            }}
          ></Image>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.Blue,
              padding: width * 0.02,
              borderRadius: 10,
              justifyContent: "center",
              height: "30%",
            }}
          >
            <Text style={{ color: Colors.white, fontSize: width * 0.035 }}>
              {" "}
              Save Changes
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginTop: height * -0.1,
            textAlign: "center",
            fontSize: width * 0.03,
            color: Colors.Text2,
          }}
        >
          {" "}
          Edit Personal Informations{" "}
        </Text>
        <View style={{ padding: width * 0.06, marginTop: height * 0.01 }}>
          <View
            style={{
              flexDirection: "row",
              borderWidth: width * 0.005,
              borderColor: Colors.Black,
              borderRadius: 8,
              paddingVertical: height * 0.01,
            }}
          >
            <FontAwesome5
              name="user-alt"
              size={width * 0.05}
              color={Colors.darkGray}
              style={{ marginLeft: width * 0.05 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Fullname"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              borderWidth: width * 0.005,
              borderColor: Colors.Black,
              borderRadius: 8,
              marginTop: height * 0.02,
              paddingVertical: height * 0.01,
            }}
          >
            <FontAwesome5
              name="calendar-alt"
              size={width * 0.05}
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
        </View>
        <View
          style={{
            paddingHorizontal: width * 0.03,
          }}
        >
          <TouchableOpacity style={styles.Card}>
            <Text style={styles.Name}>Request Change of Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Card}>
            <Text style={styles.Name}>Request Change of Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  c1: {
    backgroundColor: Colors.white,
    width: "100%",
    height: height * 1,
    zIndex: 2,
    marginTop: height * -0.15,
  },
  image: {
    height: height * 0.3,
    width: width * 1,
    zIndex: 1,
  },
  input: {
    marginLeft: width * 0.03,
    width: "60%",
  },
  Card: {
    backgroundColor: Colors.softGray,
    borderRadius: 10,
    padding: width * 0.04,
    margin: width * 0.02,
  },
  Name: {
    fontSize: width * 0.035,
    fontWeight: "bold",
  },
});

export default UsersProfile;
