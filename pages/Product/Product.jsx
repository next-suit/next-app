import React from "react";
import {Card, Center, Container, Heading, Text, View} from "native-base";
import {RefreshControl} from "react-native";
import {vibrateShort} from "../../utils/helper";
import ScrollView from "../../components/ScrollView";

const Product = (props) => {
  const [page, setPage] = React.useState(1);
  const [list, setList] = React.useState([]);
  const [more, setMore] = React.useState(true);

  React.useEffect(()=> {
    init(page === 1);
  }, [page]);

  async function init(reset){
    let list2 = reset ? [] : [...list];
    let res = await new Promise((resolve, reject) => {
      setTimeout(() => page <= 3 ? resolve(new Array(30).fill(page)) : resolve([]), 500);
    });
    res.length > 0 ? setMore(true) : setMore(false);
    setList(list2.concat(res));
  }

  return (
    <ScrollView
      flex={1}
      bg={'gray.500'}
      more={more}
      onRefresh={() => setPage(1)}
      onScrollBottom={() => setPage(page + 1)}
    >
      <Container>
        <Heading>
          A component library for the
          <Heading color="emerald.500"> React Ecosystem</Heading>
        </Heading>
        <Text mt="3" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
      </Container>
      {list.map((item, index) => <View key={index}>
        <Text>列表 {item}</Text>
      </View>)}
    </ScrollView>
  );
};

export default Product
