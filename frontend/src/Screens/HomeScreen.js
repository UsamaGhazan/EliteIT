// HomeScreen.js

import { Box, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const HomeScreen = () => {
  return (
    <Box>
      <Box
        position="relative"
        height="70vh"
        overflow="hidden"
        className="homeScreen"
      >
        {/* Background Image */}
        <Box className="backgroundImage" />

        {/* Content */}
        <VStack
          spacing={'50px'}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="white"
          flexDirection="column"
          alignItems="center"
          zIndex="1"
        >
          <Heading fontSize="58px" fontWeight={'700'}>
            Solutions that Inspire, Products that Deliver
          </Heading>
          <Text fontSize="15px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tellus neque, malesuada sit amet auctor ac, euismod sed enim. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Donec sed ultricies libero. Morbi porttitor
            semper nibh, bibendum ultricies elit mollis id.
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default HomeScreen;
