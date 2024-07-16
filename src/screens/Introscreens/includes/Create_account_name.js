/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, useWindowDimensions, StyleSheet, Image, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  FormControl,
  Input,
  Box,
  WarningOutlineIcon,
  VStack,
  Button,
} from 'native-base';

import {quotes} from '../../../constant';

const Create_account_name = ({onNext, formData, onInputChange}) => {
  const [errFname1, errSetFname1] = useState('');
  const [errLname, errSetLname] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const validateInput = () => {
    let x = 0;
    if (formData.fname === '') {
      x = 1;
      errSetFname1('First name is Required');
    } else {
      errSetFname1('');
    }

    if (formData.lname === '') {
      x = 1;
      errSetLname('Last name is Required');
    } else {
      errSetLname('');
    }

    if (x === 0) {
      onNext();
    }
    setIsInvalid(x === 1);
  };

  return (
    <VStack
      space="1.5"
      backgroundColor="#fff"
      style={styles.container}
      flex={1}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../../../assets/DOc3.png')} // Specify the image source
          style={styles.logo} // Apply styles to the image
          resizeMode="contain" // Set resizeMode to control how the image should be resized
          alt="logo"
        />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            textAlign: 'center',
            color: '#499eff',
            fontWeight: '700',
            fontSize: 22,
          }}>
          DOCARE
        </Text>
      </View>

      <FormControl w="100%" maxW="500" isInvalid={isInvalid}>
        <Box mb="2" mt="5">
          <FormControl.Label>First Name</FormControl.Label>

          <Input
            type="text"
            size="md"
            variant="outline"
            placeholder="Enter First Name"
            minWidth="280"
            style={styles.input}
            w="100%"
            autoCapitalize="none"
            value={formData.fname}
            onChangeText={value => onInputChange('fname', value)}
            autoCompleteType="email"
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errFname1}
          </FormControl.ErrorMessage>
          
        </Box>

        <Box>
          <FormControl.Label color="#000000" mt="6">
            Last Name
          </FormControl.Label>

          <Input
            type="text"
            size="md"
            variant="outline"
            style={styles.input}
            w="100%"
            placeholder="Enter Last Name"
            minWidth="305"
            value={formData.lname}
            onChangeText={value => onInputChange('lname', value)}
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            {errLname}
          </FormControl.ErrorMessage>
        </Box>

        <Box alignItems="center" mt="10%">
          <Button
            bg="#1C70EE"
            borderRadius="md"
            w="100%"
            p="4"
            onPress={validateInput}>
            Continue
          </Button>
        </Box>
      </FormControl>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    flexGrow: 1,

    alignItems: 'center',
    minHeight: '90%',
    backgroundColor: '#fff',
  },

  inputContainer: {
    width: '100%',
  },
  input: {
    height: 52,
    padding: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  logo: {
    height: 80,
    width: 80,
    marginBottom: 20,
    alignSelf: 'center',
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

export default Create_account_name;
