import React, {useEffect} from "react";
import {Button, Text, View} from "native-base";

const Home = (props) => {

  return (
    <View>
      <Text>Home</Text>
      <Button _text={{color: 'gray.500'}} onPress={() => props.navigation.navigate('Product')}>Product</Button>
      <Button onPress={() => props.navigation.navigate('Login')}>Login</Button>
    </View>
  );
}

export default Home
