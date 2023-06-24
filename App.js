import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
 import LoginScreen from "./scr/Screens/LoginScreen";
 import HomeScreen from "./scr/Screens/HomeScreen"
import RegisterScreen from "./scr/Screens/RegisterScreen";
import NotVerfiyScreen from "./scr/Screens/NotVerfiyScreen";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};



export default function App() {
  return (
    <NativeBaseProvider>
          <HomeScreen/>
    </NativeBaseProvider>
  );
}


