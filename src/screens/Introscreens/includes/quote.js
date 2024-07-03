/* eslint-disable react-native/no-inline-styles */
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
const Phone_view = () => {
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

  return (
    <View
      style={{
        marginTop: 150,
      }}>
      <Image
        source={require('../../../../assets/doc2.jpg')} // Specify the image source
        style={styles.imgqoute} // Apply styles to the image
        resizeMode="contain" // Set resizeMode to control how the image should be resized
        alt="logo"
      />
      <Text style={styles.quoteText}>{currentQuote}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  quoteText: {
    marginHorizontal: 20,
    textAlign: 'center',
    color: '#499eff',
    fontWeight: '700',
    fontSize: 17,
    minHeight: 50,
    minWidth: 300,
    lineHeight: 30, // Ensures good readability
    backgroundColor: '#e6f7ff', // Light background for the quote text
    padding: 15, // Padding around the text
    borderRadius: 10, // Rounded corners for the text background
    borderColor: '#499eff',
    borderWidth: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // Elevation for Android shadow
  },
  doctorsSaysContainer: {
    alignItems: 'center',
  },

  bottomImageContainer: {
    // Position the image absolutely
    bottom: -80, // Adjust this value as needed for the bottom offset
    alignItems: 'center', // Center the image horizontally
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
  imgqoute: {
    borderRadius: 100, // Rounded corners for the text background
    shadowColor: '#000',
    borderColor: '#499eff',
    borderWidth: 4,
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    position: 'absolute',
    height: 80,
    width: 80,
    marginTop: -55,
    alignSelf: 'center',
  },
});

export default Phone_view;
