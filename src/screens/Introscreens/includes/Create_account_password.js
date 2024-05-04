import React, {useState} from 'react';
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

const Create_account_password = ({onNext, formData, onInputChange}) => {
  const [show, setShow] = React.useState(false);
  // const [isLoading, setisLoading] = useState(false);
  const [errPass, errSetPass] = useState('');
  const [errCPass, errSetCPass] = useState('');

  const validateInput = () => {
    let x = 0;
    if (
      formData.password !== formData.cpassword 
    ) {
      x = 1;
      errSetCPass('Password not match');
    } else {
      errSetCPass('');
    }

    if (formData.password == '') {
      x = 1;
      errSetPass('Password is Required');
    } else {
      errSetPass('');
    }

    if (formData.cpassword == '') {
      x = 1;
      errSetCPass('Confirm Password is Required');
    } else {
      errSetCPass('');
    }

    if (x == 0) {
      onNext();
    }
  };

  return (
    <FormControl w="100%" maxW="500" alignItems="left" mt="5" isInvalid>
      <Box mb="2" mt="2">
        <FormControl.Label color="dark.500">Password</FormControl.Label>

        <Input
          w={{
            base: '90%',
            md: '25%',
          }}
          type={show ? 'text' : 'password'}
          size="md"
          variant="outline"
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={<FontAwesome5 name={show ? 'eye' : 'eye-slash'} />}
                size={5}
                mr="5"
                color="dark.400"
              />
            </Pressable>
          }
          placeholder="Password"
          value={formData.password}
          onChangeText={value => onInputChange('password', value)}
        />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errPass}
        </FormControl.ErrorMessage>


        <FormControl.Label color="dark.500" mt="6">
          Confirm Password
        </FormControl.Label>

        <Input
          w={{
            base: '90%',
            md: '25%',
          }}
          type={show ? 'text' : 'password'}
          size="md"
          variant="outline"
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={<FontAwesome5 name={show ? 'eye' : 'eye-slash'} />}
                size={5}
                mr="5"
                color="dark.400"
              />
            </Pressable>
          }
          placeholder="Confirm Password"
          value={formData.cpassword}
          onChangeText={value => onInputChange('cpassword', value)}
        />

        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errCPass}
        </FormControl.ErrorMessage>
      </Box>

      <Box alignItems="center" mt="90%">

              

              <Button
                  bg="#1C70EE"
                  borderRadius="md"
                  w="300"
                  h="12"
                  onPress={validateInput}>
                  Submit
                </Button>
       
      </Box>
    </FormControl>
  );
};

export default Create_account_password;
