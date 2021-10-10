import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {NativeBaseProvider} from "native-base/src/core/NativeBaseProvider";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import Navigation from "./Navigation/Navigation";
import {extendTheme} from "native-base";

export default function App() {
  const nativeBaseTheme = extendTheme({
    config: {
      useSystemColorMode: false,
      initialColorMode: 'light',

    },
    colors: {
      primary: {
        500: '#50B4D0', // 主题色
      },
    },
  })
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
