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

const Create_account_contacts = ({onNext, formData, onInputChange}) => {
  const [errEmail, errSetEmail] = useState('');
  const [errPhone, errSetPhone] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateInput = () => {
    let x = 0;
    //console.log(formData.email)
    if (!validateEmail(formData.email)) {
      x = 1;
      errSetEmail('Valid Email is Required');
    } else {
      errSetEmail('');
    }

    if (
      formData.phone_no.length < 11 ||
      formData.phone_no == '' ||
      isNaN(formData.phone_no) == true
    ) {
      x = 1;
      errSetPhone('Valid Phone Number is Required');
    } else {
      errSetPhone('');
    }

    if (x === 0) {
      onNext();
    }
    setIsInvalid(x === 1);
  };

  return (
    <FormControl w="100%" alignItems="left" mt="5" isInvalid={isInvalid}>
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
      <Box mb="2" mt="2">
        <FormControl.Label>Email</FormControl.Label>

        <Input
          type="text"
          //keyboardType="email"
          size="md"
          style={styles.input}
          variant="outline"
          placeholder="Enter Email Address"
          minWidth="305"
          w="100%"
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
          style={styles.input}
          keyboardType="number-pad"
          variant="outline"
          placeholder="+234"
          minWidth="305"
          w="100%"
          value={formData.phone_no}
          onChangeText={value => onInputChange('phone_no', value)}
        />

        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          {errPhone}
        </FormControl.ErrorMessage>
      </Box>

      <Box alignItems="center" mt="10%">
        <Button bg="#1C70EE" borderRadius="md" w="300" h="12" onPress={validateInput}>
          Continue
        </Button>
      </Box>
      <View style={styles.bottomImageContainer}>
        <Image
          source={require('..././../../../assets/doctorsteam2.png')} // Specify the image source
          style={{height: 400}} // Apply styles to the image
          resizeMode="contain" // Set resizeMode to control how the image should be resized
          alt="logo"
        />
      </View>
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
    borderWidth: 1,
    borderColor: '#ddd',
  },
  logo: {
    height: 80,
    width: 80,
    marginBottom: 20,
    alignSelf: 'center',
  },
  bottomImageContainer: {
    position: 'absolute', // Position the image absolutely
    bottom: -580, // Adjust this value as needed for the bottom offset
    left: 0,
    right: 0,
    alignItems: 'center', // Center the image horizontally
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

export default Create_account_contacts;
