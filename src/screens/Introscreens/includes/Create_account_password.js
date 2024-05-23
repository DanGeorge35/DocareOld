import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  FormControl,
  Input,
  Box,
  Icon,
  Pressable,
  WarningOutlineIcon,
  Button,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CreateAccountPassword = ({onNext, formData, onInputChange}) => {
  const [show, setShow] = useState(false);
  const [errPass, setErrPass] = useState('');
  const [errCPass, setErrCPass] = useState('');

  const validateInput = () => {
    let x = 0;
    if (formData.password !== formData.cpassword) {
      x = 1;
      setErrCPass('Passwords do not match');
    } else {
      setErrCPass('');
    }

    if (formData.password === '') {
      x = 1;
      setErrPass('Password is required');
    } else {
      setErrPass('');
    }

    if (formData.cpassword === '') {
      x = 1;
      setErrCPass('Confirm Password is required');
    } else {
      setErrCPass('');
    }

    if (x === 0) {
      onNext();
    }
  };

  return (


    <FormControl w="100%" maxW="500" alignItems="left" mt={5} isInvalid>
      <Box mb={2} mt={2}>

        <FormControl.Label color="dark.500">Password</FormControl.Label>
        <Input
          w="100%"
          type={show ? 'text' : 'password'}
          size="md"
          variant="outline"
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={<FontAwesome5 name={show ? 'eye' : 'eye-slash'} />}
                size={5}
                mr={5}
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

        <FormControl.Label color="dark.500" mt={6}>
          Confirm Password
        </FormControl.Label>
        <Input
          w="100%"
          type={show ? 'text' : 'password'}
          size="md"
          variant="outline"
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={<FontAwesome5 name={show ? 'eye' : 'eye-slash'} />}
                size={5}
                mr={5}
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

      <Box alignItems="center" mt="30%">
        
        <Button bg="#1C70EE" borderRadius="md" w="300" h="12" onPress={onNext}>
          Submit
        </Button>

          {/* <Box alignItems="center" mt="90%">
                  <Button
                      bg="#1C70EE"
                      borderRadius="md"
                      w="300"
                      h="12"
                      onPress={validateInput}>
                      Submit
                    </Button>
          </Box> */}

      </Box>


     

    </FormControl>
  );
};

export default CreateAccountPassword;
