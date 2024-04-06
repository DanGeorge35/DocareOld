import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Splash_screen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1C70EE', '#FFFFFF']}
        start={{x: 0.1, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.rectangle1}
      />

      <LinearGradient
        colors={['#1C70EE', '#FFFFFF']}
        start={{x: 0.3, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.rectangle2}
      />
      <View style={styles.innerContainer}>
        <Image
          source={require('../../../assets/DOc2.png')} // Specify the image source
          style={styles.logo} // Apply styles to the image
          resizeMode="contain" // Set resizeMode to control how the image should be resized
        />
        <Text style={styles.DocareText}>DOCARE</Text>
      </View>
      <LinearGradient
        colors={['#1C70EE', '#FFFFFF']}
        start={{x: 0.4, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.rectangle3}
      />

      {/* <View style={[styles.rectangle, { transform: [{ rotate: '-45deg' }] }]} /> */}

      {/* <View style={styles.rectangle} />  */}
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: 150,
    marginBottom: 40,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#1C70EE',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 200, // Set a fixed width for the inner container
    height: 100, // Set a fixed height for the inner container
    top: '50%', // Center the inner container vertically
    left: '50%', // Center the inner container horizontally
    marginTop: -50, // Adjust the top margin to center the inner container perfectly
    marginLeft: -100, // Adjust the left margin to center the inner container perfectly
  },

  DocareText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    lineHeight: 48.84,
    fontFamily: 'HelveticaNeueRoman',
    //width:156,
    //height:49,
    //marginTop:379,
    // marginLeft:110
  },

  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rectangle1: {
    marginTop: -160,
    marginLeft: 90,
    width: 619.71,
    height: 75,
    transform: [{rotate: '-42.57deg'}],
    opacity: 0.1,
  },

  rectangle2: {
    marginTop: 90.32,
    marginLeft: 90,
    width: 1094.21,
    height: 75,
    transform: [{rotate: '-42.57deg'}],
    opacity: 0.1,
  },

  rectangle3: {
    marginTop: 90.32,
    marginLeft: 92,
    width: 694.21,
    height: 75,
    transform: [{rotate: '-42.57deg'}],
    opacity: 0.1,
  },
});

export default Splash_screen;
