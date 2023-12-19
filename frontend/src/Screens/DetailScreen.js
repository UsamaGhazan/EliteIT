import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Icon,
  Spinner,
  Button,
  Center,
} from '@chakra-ui/react';
import axios from 'axios';
import { IoIosStar } from 'react-icons/io';
import Pagination from '../Components/Pagination';

const DetailsScreen = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get('/api/products/details');
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  // Rendering stars based on ratings
  const renderStars = rating => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<IoIosStar key={i} color="orange" />);
    }
    return <div style={{ display: 'flex' }}>{stars}</div>;
  };

  return (
    <>
      <Box
        position="relative"
        height="60vh"
        overflow="hidden"
        className="detailsScreen"
      >
        <Box className="detailbackgroundImage" />
        <VStack className="content" spacing={'50px'}>
          {loading ? (
            <Heading fontSize="4xl" fontWeight="bold">
              Loading...
            </Heading>
          ) : (
            <>
              <Heading fontSize="4xl" fontWeight="bold">
                LISTING{' '}
              </Heading>
              <Text fontSize="lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur tellus neque, malesuada sit amet auctor ac, euismod
                sed enim. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Donec sed ultricies
                libero. Morbi porttitor semper nibh, bibendum ultricies elit
                mollis id.
              </Text>
            </>
          )}
        </VStack>
      </Box>
      <Box maxH="817px" maxW="1360px" ml={'65px'}>
        <Heading ml={'150px'} mt={8} mb={4} fontSize="xl">
          LIST OF PRODUCTS
        </Heading>
        <VStack spacing={4} align="stretch">
          {loading ? (
            <Spinner />
          ) : (
            <Center>
              <Table variant="simple" maxH="650px" maxW="1120px">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Email</Th>
                    <Th>Product Name</Th>
                    <Th>Rating</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {details.map((detail, index) => (
                    <Tr key={index}>
                      <Td>{detail.name}</Td>
                      <Td>{detail.email}</Td>
                      <Td>{detail.product}</Td>
                      <Td>{renderStars(detail.rating)}</Td>
                      <Td>
                        <Button bg={'#942D3B'} color={'#FFFFFF'}>
                          View Details
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Center>
          )}
        </VStack>
        <VStack align={'flex-end'} width={'1120px'}>
          <Pagination />
        </VStack>
      </Box>
    </>
  );
};

export default DetailsScreen;
