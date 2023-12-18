import React from 'react';
import { Box, Center, Heading, Text, Icon, HStack } from '@chakra-ui/react';
import { FaWallet } from 'react-icons/fa';
import Rating from '../Components/Rating';
// This component is used to show each indivisual product
const ProductBox = ({
  title,
  description,
  price,
  onRatingChange,
  onStarClick,
}) => {
  return (
    <Box
      width="372px"
      height="325px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      _hover={{ border: '2px dotted #942D3B' }}
    >
      <Center>
        <Box
          width="321px"
          height="265px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading as="h2" size="md" mt="4" color={'#19284E'}>
            {title}
          </Heading>
          <Text fontSize="sm" textAlign="center" mt="7" color={'#404F7A'}>
            {description}
          </Text>
          <Box
            width="90%"
            height="1px"
            backgroundColor="#ccc"
            my="2"
            mt={'5'}
          />
          <HStack spacing={'100px'} color={'#404F7A'}>
            <HStack>
              <Icon as={FaWallet} boxSize="4" />
              <Text fontSize="15px" fontWeight={600}>
                {price}
              </Text>
            </HStack>
            <Rating onRatingChange={onRatingChange} onStarClick={onStarClick} />
          </HStack>
          <button className="detailBtn">Show Details</button>
        </Box>
      </Center>
    </Box>
  );
};

export default ProductBox;
