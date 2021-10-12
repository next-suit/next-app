import React from "react";
import {Card, Center, Container, Heading, Text, View} from "native-base";

const Product = (props) => {

  return (
    <Center>
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
    </Center>
  );
};

export default Product
