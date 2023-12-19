// Pagination.js
import React from 'react';
import { Box, HStack, Button } from '@chakra-ui/react';

const Pagination = () => {
  return (
    <Box mt={4} textAlign="center">
      <HStack spacing={2}>
        <Button disabled>Prev</Button>
        <Button bg={'#942D3B'} color={'#FFFFFF'}>
          1
        </Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button disabled>...</Button>
        <Button>10</Button>
        <Button disabled>Next</Button>
      </HStack>
    </Box>
  );
};

export default Pagination;
