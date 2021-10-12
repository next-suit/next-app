import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import Navigation from "./Navigation/Navigation";
import nativeBaseTheme from "./utils/nativeBaseTheme";

export default function App() {

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={nativeBaseTheme}>
        <NavigationContainer theme={DefaultTheme}>
          <Navigation/>
          <StatusBar animated={true} style={"auto"} />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
