import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Splash_screen = () => {
  return (
    <View style={styles.container}>
    
      <LinearGradient
        colors={['#1C70EE', '#FFFFFF']}
        start={{x: 0.3, y: 0}} end={{x: 1, y: 0}}
        style={styles.rectangle1}
      >
      </LinearGradient>

      <LinearGradient
        colors={['#1C70EE', '#FFFFFF']}
        start={{x: 0.3, y: 0}} end={{x: 1, y: 0}}
        style={styles.rectangle2}
      >
      </LinearGradient>
      <Text style={styles.DocareText}>Do'Care</Text>
      <LinearGradient
        colors={['#1C70EE', '#FFFFFF']}
        start={{x: 0.4, y: 0}} end={{x: 1, y: 0}}
        style={styles.rectangle3}
      >
      </LinearGradient>
     
         {/* <View style={[styles.rectangle, { transform: [{ rotate: '-45deg' }] }]} /> */}

         {/* <View style={styles.rectangle} />  */}
      
</View>
   
  )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:'#1C70EE',
      color:'#fff',
      justifyContent:"center",
      alignItems:"center",
    },

    DocareText: {
         fontSize:40,
        // fontWeight:'bold',
        color:'#ffffff',
        lineHeight: 48.84,
        fontFamily:'HelveticaNeueRoman'
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
        marginTop:-20.32,
        marginLeft: -100.92,
        width: 619.71, 
        height: 63.81, 
        transform: [{ rotate: '-42.57deg' }],
        opacity:0.1
      },

    rectangle2: {
        marginTop:140.32,
        marginLeft: 10.92,
        width: 694.21, 
        height: 63.81, 
        transform: [{ rotate: '-42.57deg' }],
        opacity:0.1
      },

      rectangle3: {
        marginTop:140.32,
        marginLeft: 10.92,
        width: 694.21, 
        height: 63.81, 
        transform: [{ rotate: '-42.57deg' }],
        opacity:0.1
      },
   
     

   

})

export default Splash_screen