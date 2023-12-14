import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { useState, useEffect } from "react";
import { EventRegister } from "react-native-event-listeners";
import theme from "./src/components/theme";
import themeContext from "./src/components/themeContext";
import { firebase } from "./firebase/firebase";
import Splash from "./src/screens/Splash";
import Login from "./src/screens/Login";
import SignupScreen from "./src/screens/SignUp";
import BottomTabNavigator from "./src/components/BottomTabNavigator";
import DrawerNavigator from "./src/components/DrawerNavigator";
import ForgotPassword from "./src/screens/ForgotPassword";
import Verify1 from "./src/screens/Verify1";
import ResetPassword from "./src/screens/ResetPassword";
import Verify from "./src/screens/Verify";
import UserRegister from "./src/screens/UserResgister";
import UsersProfile from "./src/screens/UsersProfile";
import { DefaultTheme } from "react-native-paper";

const Stack = createStackNavigator();

const App = () => {
  const [darkthemeEnabled, setDarkthemeEnabled] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkthemeEnabled(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkthemeEnabled]);

  return (
    <themeContext.Provider
      value={darkthemeEnabled === true ? theme.dark : theme.light}
    >
      <NavigationContainer
        theme={darkthemeEnabled === true ? DarkTheme : DefaultTheme}
      >
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
            component={DrawerNavigator}
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
            name="UserProfile"
            component={UsersProfile}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};

export default App;
