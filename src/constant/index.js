import React from 'react';
import {Box, Text, useToast} from 'native-base';

// Toast message functions
export const successMsg = (toast, msg) => {
  toast.show({
    render: () => (
      <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
        <Text fontSize="14" fontWeight="700">
          {msg}
        </Text>
      </Box>
    ),
  });
};

export const errorMsg = (toast, msg) => {
  toast.show({
    render: () => (
      <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
        <Text fontSize="14" fontWeight="700">
          {msg}
        </Text>
      </Box>
    ),
  });
};

export const warningMsg = (toast, msg) => {
  toast.show({
    render: () => (
      <Box bg="yellow.500" px="2" py="1" rounded="sm" mb={5}>
        <Text fontSize="14" fontWeight="700">
          {msg}
        </Text>
      </Box>
    ),
  });
};

// quotes.js
export const quotes = [
  'Health is wealth.',
  "Take care of your body; it's the only place you have to live.",
  'Good health is the best wealth.',
  'Healthy habits, happy life.',
  'A healthy outside starts from the inside.',
  'Your health is your greatest asset.',
  'To enjoy the glow of good health, you must exercise.',
  "Take care of your body. It's the only place you have to live.",
  'Healthy mind, healthy body.',
  'Good health is not something we can buy. However, it can be an extremely valuable savings account.',
  'Wellness is the complete integration of body, mind, and spirit.',
];

// Example component
const Index = ({navigation}) => {
  const toast = useToast();

  return <div>index</div>;
};

export default Index;
