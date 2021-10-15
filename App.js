import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {NavigationContainer} from "@react-navigation/native";
import Navigation from "./Navigation/Navigation";
import {navigationRef} from "./utils/navigation";
import {NativeBaseProvider} from "native-base";
import {nativeBaseTheme, navigationTheme} from "./utils/theme";

export default function App() {

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={nativeBaseTheme}>
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
          <Navigation/>
          <StatusBar animated={true} style={"inverted"} />
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
