import {useEffect, useState} from 'react';
import {useWindowDimensions, StyleSheet, Alert} from 'react-native';
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
  Icon,
  VStack,
  Select,
  Stack,
  Image,
  Text,
  View,
  useToast,
  FlatList,
  Button,
  Pressable,
} from 'native-base';

import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Upload_pix_doc = ({navigation}) => {
  const [userObj, setUserObj] = useState([]);
  const [imageUri, setImageUri] = useState(null);
  const [isChoose, setIsChoose] = useState(true);

  const handleChoosePhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log(response.assets[0].uri);
        setImageUri(response.assets[0].uri);
        setIsChoose(false);
      }
    });
  };

  const handleTakePhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, response => {
      console.log(response);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        setImageUri(response.assets[0].uri);
        setIsChoose(false);
      }
    });
  };

  const uploadImage = async () => {
    if (!imageUri) {
      Alert.alert('No image selected', 'Please select an image first');
      return;
    }

    try {
      const response = await axios.post(
        'https://docare.posaccountant.com/api/v1/doctors/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (response.status === 200) {
        Alert.alert(
          'Upload successful',
          `Image uploaded successfully: ${response.data.message}`,
        );
      } else {
        Alert.alert(
          'Upload failed',
          `Image upload failed: ${response.data.error}`,
        );
      }
    } catch (error) {
      Alert.alert('Upload error', `An error occurred: ${error.message}`);
    }
  };

  const getDoctorData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('DoctorData').then(
        jsonValue => {
          if (jsonValue !== null) {
            const docData = JSON.parse(jsonValue);
            //setUserObj({"user":usr.data.user});
            // setUserObj(docData.data.Account);

            console.log(docData.data);
          }
        },
      );
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    // getDoctorData();
  }, []);

  return (
    <VStack px="1" backgroundColor="#fff" flex={1}>
      <Text
        fontWeight="bold"
        px="3"
        mt="5"
        fontFamily="GeneralSans-Bold"
        fontWeight="bold"
        fontSize="18"
        textAlign="center">
        {' '}
        Upload your picture
      </Text>

      <Box alignItems="center" justifyContent="center" mt="10">
        {/* <Image  borderRadius="full"   w="35.38" h="35.38" source={require( "../../../../assets/img/upld1.jpg") } alt="Alternate Text" size="2xl" /> */}

        {isChoose ? (
          <>
            <Image
              borderRadius="full"
              w="35.38"
              h="35.38"
              source={require('../../../../assets/img/profile_doc.png')}
              alt="Profile Picture"
              size="2xl"
            />
          </>
        ) : (
          <>
            <Image
              source={{uri: imageUri}}
              borderRadius="full"
              w="35.38"
              h="35.38"
              alt="Profile Picture"
              size="2xl"
            />
          </>
        )}

        {/* {imageUri && (
          <>
            <Image
              source={{uri: imageUri}}
              borderRadius="full"
              w="35.38"
              h="35.38"
              alt="Alternate Text"
              size="2xl"
            />

          </>
        )} */}

        <Pressable onPress={handleChoosePhoto}>
          <Text
            mt="3"
            fontWeight="bold"
            fontFamily="GeneralSans-Bold"
            color="#000000">
            {' '}
            Change Profile Picture{' '}
          </Text>
        </Pressable>
        <Text
          mt="0"
          fontFamily="GeneralSans-Bold"
          fontSize="12"
          color="#AAAFB6">
          {' '}
          13MB min - 20MB max{' '}
        </Text>
      </Box>

      <Box alignItems="center" position="relative" bottom="-200">
        <Button bg="#1C70EE" borderRadius="md" w="300" onPress={uploadImage}>
          Create Account
        </Button>
      </Box>
    </VStack>
  );
};

export default Upload_pix_doc;
