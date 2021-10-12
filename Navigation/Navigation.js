import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../pages/BottomTabs/Home";
import User from "../pages/BottomTabs/User";
import Product from "../pages/Product/Product";
import Login from "../pages/Login";

const Stack = createNativeStackNavigator();
const Navigation = (props) => {


  return (
    <Stack.Navigator>
      <Stack.Screen name={'Root'} component={BottomTabs} options={{headerShown: false}} />
      {/* 定义其它内页 */}
      <Stack.Screen name={'Login'} component={Login} options={{headerShown: false}} />
      <Stack.Screen name={'Product'} component={Product} />
    </Stack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();
const BottomTabs = props => {

  // 定义底部Tabs，记得给icon配置 https://reactnavigation.org/docs/tab-based-navigation
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={'Home'} component={Home} />
      <Tabs.Screen name={'User'} component={User} />
    </Tabs.Navigator>
  );
};

export default Navigation
