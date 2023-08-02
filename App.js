import React from "react";
import {Box, Text, Input,button} from 'native-base'

import {
  NativeBaseProvider,
   
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
  const [image,setimage] =  useState("");
  return (
   <NativeBaseProvider>
         <HomeScreen/> 
    
  </NativeBaseProvider>
     
   
  );
}


