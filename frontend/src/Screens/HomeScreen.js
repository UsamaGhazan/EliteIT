import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Spinner,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductBox from '../Components/ProductBox';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const [productRating, setProductRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [products, setProducts] = useState([]);
  const [dataLoading, setdataLoading] = useState(false);
  const [productLoading, setProductLoading] = useState(false);
  const navigate = useNavigate();
  console.log(productLoading);
  const handleRatingChange = newRating => {
    setProductRating(newRating);
  };

  const openModal = product => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    try {
      setdataLoading(true);

      const response = await axios.post('/api/products', {
        name,
        email,
        product: selectedProduct,
        rating: productRating,
      });

      console.log('Backend response:', response.data);

      closeModal();
      navigate('/detailScreen');
    } catch (error) {
      console.error('Error submitting data:', error);
    } finally {
      setdataLoading(false);
    }
  };

  // Getting Products when user comes to HomeScreen
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProductLoading(true);
        const response = await axios.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setProductLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <Box>
      <Box
        position="relative"
        height="70vh"
        overflow="hidden"
        className="homeScreen"
      >
        <Box className="backgroundImage" />

        <VStack className="content" spacing={'50px'}>
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

      <VStack mt={'100px'}>
        <Heading fontWeight={600} fontSize={'28px'} color={'#19284E'}>
          View Our Products
        </Heading>
        <Text fontWeight={500} mt={'40px'}>
          Lorem Ipsum has been the industry's standard the dummy text ever Lorem
          Ipsum has been the industry's standard. dummy text ever
        </Text>
        <HStack mt={'40px'}>
          <>
            {productLoading ? (
              <Spinner />
            ) : (
              products &&
              products.map(product => {
                return (
                  <ProductBox
                    key={product._id}
                    title={product.name}
                    description={product.description}
                    price={product.price}
                    onRatingChange={handleRatingChange}
                    onStarClick={() => openModal(product.name)}
                  />
                );
              })
            )}
          </>
          ;
        </HStack>
      </VStack>

      {selectedProduct && (
        <Modal isOpen={isModalOpen} onClose={closeModal} size="sm">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Submit Rating</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <HStack spacing={4}>
                <Button
                  colorScheme="blue"
                  onClick={handleSubmit}
                  isLoading={dataLoading}
                  loadingText="Submitting..."
                >
                  Submit
                </Button>
                <Button onClick={closeModal}>Cancel</Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default HomeScreen;
