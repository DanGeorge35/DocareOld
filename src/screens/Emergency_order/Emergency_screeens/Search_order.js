import React from 'react';
import { View,  StyleSheet, TouchableOpacity } from 'react-native';
import {
    NativeBaseProvider,
    HStack,
    Spacer,
    FormControl,
    Input,
    TextArea,
    Box,
    Badge,
    CheckIcon,
    Center,
    Flex,
    WarningOutlineIcon,
    DatePicker,
    Text,
    VStack,
    Select,
    Stack,
    Image,
    Icon,
    useToast,
    FlatList,
    Button,
    Pressable,
    Modal,
  } from 'native-base';

const Search_order = ({ onClose }) => {
  return (
            <Box bg="rgba(0, 0, 0, 0.5)"   minHeight="100%" > 
                <Image
                position="absolute"
                left="55"
                top="20"
                size="2xl"
                // alignItems="center" justifyItems="center"
                //source={require('../../../../assets/s1.gif')} // Specify the image source
                source={require('../../../../assets/s4.webp')} // Specify the image source
                // Apply styles to the image
                resizeMode="contain" // Set resizeMode to control how the image should be resized
                alt="logo"
            />
            </Box>

    // <View style={styles.overlay}>
    //   <Text style={styles.text}>Overlay Data</Text>
    //   <TouchableOpacity onPress={onClose} style={styles.closeButton}>
    //     <Text style={styles.closeButtonText}>Close</Text>
    //   </TouchableOpacity>
    // </View>
  )
}

const styles = StyleSheet.create({
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      height:100,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
    closeButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 5,
    },
    closeButtonText: {
      color: 'black',
      fontSize: 16,
    },
  });

export default Search_order