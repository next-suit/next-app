import React, {useEffect} from "react";
import {Button, Center, Text, View} from "native-base";

const Home = (props) => {

  return (
    <Center>
      <Text>Home</Text>
      <Button my={2} _text={{color: 'gray.500'}} onPress={() => props.navigation.navigate('Product')}>Product</Button>
      <Button onPress={() => props.navigation.navigate('Login')}>Login</Button>
    </Center>
  );
};

export default Home
