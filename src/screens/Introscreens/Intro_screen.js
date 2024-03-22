import React ,{useState, useRef, useEffect} from 'react';
import { View,  StyleSheet,ImageBackground,Animated } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import { NativeBaseProvider,
  Box, Badge,CheckIcon,
  VStack,Select,HStack,
  useToast,FlatList,Text,
   Button,Pressable,
  
 } from "native-base";

const Intro_screen = ({navigation}) => {

    const slideAnim = useRef(new Animated.Value(0)).current;
    const slideWidth = 350; // Adjust this based on your text width and container width
    const slideDuration = 6000;
    const delayBeforeStart = 5000;
  

    useEffect(() => {
        const startCarousel = () => {
            Animated.timing(slideAnim, {
              toValue: -slideWidth,
              duration: slideDuration,
              useNativeDriver: true,
            }).start(({ finished }) => {
              if (finished) {
                // Reset slide position
                slideAnim.setValue(0);
                // Restart animation
                startCarousel();
              }
            });
          };

        const delayTimer = setTimeout(() => {
            startCarousel();
          }, delayBeforeStart);
    
          return () => clearTimeout(delayTimer);
        }, [slideAnim]);




  return (
    // <ImageBackground source={require('../../../assets/african_doctor.png')} style={styles.container}>

    <HStack  justifyContent="center" alignItem="center">
    <ImageBackground source={require('../../../assets/african_doctor.png')}  >
{/* <View> */}
       

      <LinearGradient
        colors={['rgba(19, 15, 38, 0)', 'rgba(12, 12, 12, 1)']}
       
       // mt="5"
       style={styles.rec_text_bg}
      >
        <Box alignItems="center">
        

        <Box w="300" h="150" alignItem="center" mt="5" >

        <Animated.View  style={{ flexDirection: 'row', transform: [{ translateX: slideAnim }] }}>

      
            <Text  fontSize="xl" color="#ffffff" fontWeight="600" lineHeight="25" textAlign="center" fontFamily="Inter-Black" mx="5">More Comfortable Chat With the Doctor</Text> 

            <Text  fontSize="xl" color="#ffffff" fontWeight="600" lineHeight="25" textAlign="center" fontFamily="Inter-Black" mx="5">More Comfortable Chat With the Doctor</Text>  

            <Text  fontSize="xl" color="#ffffff" fontWeight="600" lineHeight="25" textAlign="center" fontFamily="Inter-Black" mx="5">More Comfortable Chat With the Doctor</Text> 

        </Animated.View>

      <Animated.View  style={{ flexDirection: 'row', marginTop:10, transform: [{ translateX: slideAnim }] }}>

      
            
            <Text fontSize="sm"  color="#ffffff" fontWeight="600" lineHeight="15" textAlign="center" fontFamily="Inter-Black" mx="5">Book an appointment with doctor. Chat with doctor via appointment letter and get consultationt.11</Text>

            <Text fontSize="sm"  color="#ffffff" fontWeight="600" lineHeight="15" textAlign="center" fontFamily="Inter-Black" mx="5">Book an appointment with doctor. Chat with doctor via appointment letter and get consultationt.22</Text>

            <Text fontSize="sm"  color="#ffffff" fontWeight="600" lineHeight="15" textAlign="center" fontFamily="Inter-Black" mx="5">Book an appointment with doctor. Chat with doctor via appointment letter and get consultationt.33</Text>

          


      </Animated.View>

    </Box>

       

            <Button  w="300" h="10" onPress={() => navigation.navigate('Lang_select')}>Get Started</Button>
        </Box>

      </LinearGradient>
      
    {/* </View> */}
     </ImageBackground>
     </HStack>
  )
}


const styles = StyleSheet.create({

    
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

      rec_text_bg: {
        marginTop: 416,
        marginLeft: 0,
       // backgroundColor:'#1C70EE',
        width: 425, 
        height: 417, 
       // transform: [{ rotate: '-42.57deg' }],
        //opacity:0.1
      },

     
     

   

})

export default Intro_screen