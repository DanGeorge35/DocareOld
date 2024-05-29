import React, {useState} from 'react';
import {View, useWindowDimensions, StyleSheet, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  FormControl,
  Input,
  Box,
  WarningOutlineIcon,
  VStack,
  Button,
} from 'native-base';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const moveNextTab = () => {
  console.log('helloo');
};

const Create_account_name = ({onNext, formData, onInputChange}) => {
  const [isValid, setIsValid] = useState(true);

  const [errFname1, errSetFname1] = useState('');
  const [errLname, errSetLname] = useState('');

  const validateInput = () => {
    let x = 0;
    if (formData.fname == '') {
      x = 1;
      console.log('enter fname');
      errSetFname1('First name is Required');
    } else {
      errSetFname1('');
    }

    if (formData.lname == '') {
      x = 1;
      errSetLname('Last name is Required');
    } else {
      errSetLname('');
    }

    if (x == 0) {
      onNext();
    }
  };

  return (
    <VStack space="2.5" backgroundColor="#fff" flex={1}>
      <FormControl w="100%" maxW="500" isInvalid>
        <Box mb="2" mt="2">
          <FormControl.Label>First Name</FormControl.Label>

          <Input
            type="text"
            size="md"
            variant="outline"
            placeholder="Enter First Name"
            minWidth="280"
            style={styles.input}
            w="100%"
            autoCapitalize="none" // Prevents auto capitalization
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

        {/* position="absolute" top="250%" */}

        <Box alignItems="center" mt="90%">
          <Button
            bg="#1C70EE"
            borderRadius="md"
            w="300"
            h="12"
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
    paddingTop: 120,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    backgroundColor: '#fff',
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
    minHeight: '100%',
  },
  input: {
    height: 52,
    padding: 16,
    borderColor: 'gray',
    borderWidth: 1,
  },

  DocareText: {
    fontSize: 40,
    // fontWeight:'bold',
    color: '#1C70EE',
    lineHeight: 48.84,
    fontFamily: 'HelveticaNeueBold',
    //width:156,
    //height:49,
    marginTop: 60,
    // marginLeft:110
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

  logo: {
    height: 80,
    width: 80,
    marginBottom: 50,
    alignSelf: 'center',
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
    //color:"red",
    // backgroundColor:"1C70EE",

    borderRadius: 12,
    padding: 16,
  },
});

export default Create_account_name;
