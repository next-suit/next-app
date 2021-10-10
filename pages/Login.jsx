import React from "react";
import {Center, Container, Text, View} from "native-base";

const Login = (props) => {

  return (
    <View flex={1} bg={'green.300'}>
      <View mt={12}><Center><Container><Text>沉浸式页面，全屏，可以设置背景图片 &lt;ImageBackground&gt;</Text></Container></Center></View>
    </View>
  );
}

export default Login
