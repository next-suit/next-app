import React, {useEffect} from "react";
import {Actionsheet, Button, Center, Text, View, Container} from "native-base";

const Home = (props) => {
  const [sheet, setSheet] = React.useState(false);

  async function actionsheet(){
    setSheet(true);
  }

  return (
    <Center>
      <Text>Home</Text>
      <Button my={2} _text={{color: 'gray.500'}} onPress={() => props.navigation.navigate('Product')}>Product</Button>
      <Button onPress={() => props.navigation.navigate('Login')}>Login</Button>
      <Button onPress={() => actionsheet()}>Actionsheet</Button>

      <Actionsheet isOpen={sheet} onClose={() => setSheet(false)}>
        <Actionsheet.Content><Text>选择你的什么XX</Text>
          <Actionsheet.Item><Text>🍎 苹果</Text></Actionsheet.Item>
          <Actionsheet.Item><Text>🌰 栗子</Text></Actionsheet.Item>
          <Actionsheet.Item><Text>🍌 香蕉</Text></Actionsheet.Item>
          {/*<Container><View><Text>dsfsdfs</Text></View></Container>*/}
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
};

export default Home
