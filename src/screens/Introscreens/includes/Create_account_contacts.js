import React, { useState } from 'react';
import {View, useWindowDimensions, StyleSheet, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  NativeBaseProvider,
  HStack,
  Spacer,
  FormControl,
  Input,
  Box,
  Badge,
  CheckIcon,
  Center,
  Flex,
  WarningOutlineIcon,
  VStack,
  Select,
  Stack,
  Image,
  Icon,
  useToast,
  FlatList,
  Button,
  Pressable,
} from 'native-base';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const moveNextTab = () => {
  console.log('helloo');
};

const Create_account_contacts = ({onNext, formData, onInputChange}) => {

  const [errEmail, errSetEmail] = useState('');
  const [errPhone, errSetPhone] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateInput = () => {

    let x = 0
    if (!validateEmail(formData.email)) {
      x=1;
      errSetEmail('Valid Email is Required');
    } else {
      errSetEmail('');
    }

    if (formData.phone_no.length < 11 || formData.phone_no == '' || isNaN(formData.phone_no) == true) {
      x=1
      errSetPhone('Valid Phone Number is Required');
    } else {
      errSetPhone('');
    }

    if(x==0){
      onNext()
    }

  };

  return (
    <FormControl w="100%" alignItems="left" mt="5">
    <FormControl w="100%" maxW="500" alignItems="left" mt="5" isInvalid>
      <Box mb="2" mt="2">
        <FormControl.Label>Email</FormControl.Label>

        <Input
          type="text"
          //keyboardType="email"
          size="md"
          variant="outline"
          placeholder="Enter Email Address"
          minWidth="335"
          w="90%"
          value={formData.email}
          onChangeText={value => onInputChange('email', value)}

          //    onChangeText={(val)=>setPhone(val)}
          // onChangeText={() => {
          //   console.log('');
          // }}
        />
           <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errEmail}
          </FormControl.ErrorMessage>

        <FormControl.Label color="gray.100" mt="6">
          Phone Number
        </FormControl.Label>

        <Input
          type="text"
          size="md"
          keyboardType="number-pad"
          variant="outline"
          placeholder="+234"
          minWidth="335"
          w="90%"
          value={formData.phone_no}
          onChangeText={value => onInputChange('phone_no', value)}

          //    onChangeText={(val)=>setPhone(val)}
          // onChangeText={() => {
          //   console.log('');
          // }}
        />

<       FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errPhone}
          </FormControl.ErrorMessage>
      </Box>

      <Box alignItems="center" mt="30%">
        <Button bg="#1C70EE" borderRadius="md" w="300" h="12" onPress={onNext}>
      <Box alignItems="center" mt="90%">
        <Button bg="#1C70EE" borderRadius="md" w="300" h="12" onPress={validateInput}>
          Continue
        </Button>
      </Box>
    </FormControl>
  );
};

export default Create_account_contacts;
