import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import { StatusBar } from "react-native";
import Splash from "./src/screens/Splash";
import Login from "./src/screens/Login";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar/>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;