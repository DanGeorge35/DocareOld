import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Splash_screen_doc = () => {
  return (
    <View style={styles.container}>
    
     
      {/* fontSize:40,
        // fontWeight:'bold',
        color:'#ffffff',
        lineHeight: 48.84,
        fontFamily:'HelveticaNeueRoman' */}
      {/* <Text style={styles.DocareText}>Do'Care</Text> */}
      <Image  w="56" h="56" source={require( "../../../assets/docare_doc.png") } alt="Alternate Text" size="sm" />
     

     
      
</View>
   
  )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:'#FFFFFF',
      color:'#fff',
      justifyContent:"center",
      alignItems:"center",
    },

   

  
     

   

})

export default Splash_screen_doc