import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { useState, useEffect} from "react";
import { firebase } from './firebase/firebase'

import Splash from "./src/screens/Splash";
import Login from "./src/screens/Login";
import SignupScreen from "./src/screens/SignUp";
import BottomTabNavigator from "./src/components/BottomTabNavigator";

const Stack = createStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user){
  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignupScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Tab" component={BottomTabNavigator} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

export default App;