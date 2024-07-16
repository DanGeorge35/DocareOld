import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {
  FormControl,
  Input,
  Box,
  Icon,
  useToast,
  Pressable,
  WarningOutlineIcon,
  Button,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {successMsg, errorMsg} from '../../../constant';

const CreateAccountPassword = ({onNext, formData, onInputChange}) => {
  const [show, setShow] = useState(false);
  const [errPass, setErrPass] = useState('');
  const [errCPass, setErrCPass] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const toast = useToast();

  const validatePassword = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };


  const validateInput = () => {
    let x = 0;
   
    if (formData.password !== formData.cpassword) {
  
      x = 1;
      //setErrCPass('Passwords do not match');
      errorMsg(toast, 'Passwords not match');
     // console.log("not1")
    } else {
      setErrCPass('');
    }

    if (!validatePassword(formData.password)) {
      x = 1;
      setErrPass('Strong Password Is Required');
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
    setIsInvalid(x === 1);
  };

  return (
    <FormControl w="100%" alignItems="left" mt={5} isInvalid={isInvalid}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../../../assets/DOc3.png')}
          style={styles.logo}
          resizeMode="contain"
          alt="logo"
        />
        <Text style={styles.headerText}>DOCARE</Text>
      </View>

      <Box mb={2} mt={2}>
        <FormControl.Label color="dark.500">Password</FormControl.Label>
        <Input
          w="100%"
          type={show ? 'text' : 'password'}
          size="md"
          style={styles.input}
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
          style={styles.input}
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

      <Box alignItems="center" mt="10%">
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

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    height: 52,
    padding: 16,
    borderColor: '#ddd',
  },
  bottomImageContainer: {
    position: 'absolute', // Position the image absolutely
    bottom: -180, // Adjust this value as needed for the bottom offset
    left: 0,
    right: 0,
    alignItems: 'center', // Center the image horizontally
  },
  logo: {
    height: 80,
    width: 80,
    marginBottom: 20,
    alignSelf: 'center',
  },
  headerText: {
    textAlign: 'center',
    color: '#499eff',
    fontWeight: '700',
    fontSize: 22,
  },
  DocareText: {
    fontSize: 40,
    color: '#1C70EE',
    lineHeight: 48.84,
    fontFamily: 'HelveticaNeueBold',
    marginTop: 20,
  },
  tab_view: {
    display: 'none',
    width: '100%',
    height: 50,
    backgroundColor: '#1C70EE',
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  form_view: {
    width: 335,
    height: 291,
    marginTop: 45,
  },
  lang_view: {
    width: 331,
    height: 27,
    marginTop: 30,
    marginLeft: 14,
    color: '#000000',
  },
  lang_text: {
    width: 245,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 27,
    fontFamily: 'General Sans',
  },
  get_start_btn: {
    width: 327,
    height: 52,
    marginTop: 0,
    borderRadius: 12,
    padding: 16,
  },
});

export default CreateAccountPassword;
