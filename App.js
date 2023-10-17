import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { useState, useEffect } from "react";
import { firebase } from "./firebase/firebase";
import Splash from "./src/screens/Splash";
import Login from "./src/screens/Login";
import SignupScreen from "./src/screens/SignUp";
import BottomTabNavigator from "./src/components/BottomTabNavigator";
import ForgotPassword from "./src/screens/ForgotPassword";
import Verify1 from "./src/screens/Verify1";
import ResetPassword from "./src/screens/ResetPassword";
import Verify from "./src/screens/Verify";
import UserRegister from "./src/screens/UserResgister";
import ShareScreen from "./src/screens/ShareScreen";
import Information from "./src/screens/Information";
import SettingsScreen from "./src/screens/Setting";

const Stack = createStackNavigator();

const App = () => {
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  // if (initializing) return null;

  // if (!user) {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tab"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="verify1"
          component={Verify1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserRegister"
          component={UserRegister}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Share"
          component={ShareScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={Information}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // }
};

export default App;
