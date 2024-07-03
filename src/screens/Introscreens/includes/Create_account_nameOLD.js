import React, {useState, useEffect} from 'react';
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

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {quotes} from '../../../constant';

const Create_account_name = ({onNext, formData, onInputChange}) => {
  const [errFname1, errSetFname1] = useState('');
  const [errLname, errSetLname] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prevQuote => {
        const currentIndex = quotes.indexOf(prevQuote);
        const nextIndex = (currentIndex + 1) % quotes.length;
        return quotes[nextIndex];
      });
    }, 8000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const validateInput = () => {
    let x = 0;
    if (formData.fname === '') {
      x = 1;
      console.log('enter fname');
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
    <VStack space="2.5" backgroundColor="#fff" flex={1}>
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

        <Box alignItems="center" mt="20%">
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
      <View style={styles.doctorsSaysContainer}>
        <Text style={styles.doctorsSays}>{currentQuote}</Text>
        <View style={styles.arrowDown}></View>
      </View>
      <View style={styles.bottomImageContainer}>
        <Image
          source={require('../../../../assets/doctorsteam2.png')} // Specify the image source
          style={{height: 400}} // Apply styles to the image
          resizeMode="contain" // Set resizeMode to control how the image should be resized
          alt="logo"
        />
      </View>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    flexGrow: 1,
    alignItems: 'center',
    minHeight: '100%',
    backgroundColor: '#fff',
  },
  doctorsSaysContainer: {
    alignItems: 'center',
  },
  doctorsSays: {
    fontSize: 17,
    color: '#00bcd4',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '70%',
    borderWidth: 4,
    borderRadius: 10,
    borderColor: '#52cfdf',
    backgroundColor: '#d3e3fd',
    minHeight: 90,
    padding: 10,
    justifyContent: 'center',
    display: 'flex',
    bottom: -80,
  },
  arrowDown: {
    bottom: -80,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 15,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#d3e3fd',
    // Adjust this value to position the arrow correctly
  },
  bottomImageContainer: {
    // Position the image absolutely
    bottom: -80, // Adjust this value as needed for the bottom offset

    alignItems: 'center', // Center the image horizontally
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
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
