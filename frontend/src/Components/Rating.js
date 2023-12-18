import React, { useState } from 'react';
import { HStack, Icon } from '@chakra-ui/react';
import { BsStarFill, BsStar } from 'react-icons/bs';
// Whenever user clicks on star this component will be called
const Rating = ({ onRatingChange, onStarClick }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = selectedRating => {
    setRating(selectedRating);
    onRatingChange(selectedRating);

    if (onStarClick) {
      onStarClick(selectedRating);
    }
  };

  return (
    <HStack spacing="2">
      {[1, 2, 3, 4, 5].map(star => (
        <Icon
          key={star}
          as={star <= rating ? BsStarFill : BsStar}
          boxSize="5"
          cursor="pointer"
          onClick={() => handleStarClick(star)}
        />
      ))}
    </HStack>
  );
};

export default Rating;
