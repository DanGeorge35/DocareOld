import { View,StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { NativeBaseProvider,
    Box, Badge,CheckIcon,
    VStack,Select,HStack,
    useToast,FlatList,Text,
     Button,Pressable,
    
   } from "native-base";


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Lang_select = ({navigation}) => {
    return (
        // <View style={styles.container}>
 <HStack flex="1" justifyContent="center" alignItem="center">

<LinearGradient  colors={['rgba(19, 15, 38, 0)', 'rgba(12, 12, 12, 1)']} style={styles.container} >
 
    <Box mr="0">
         <Text fontSize="xl" color="#ffffff" fontWeight="600" lineHeight="25"  fontFamily="Inter-Black"  onPress={() => navigation.navigate('Intro_screens')}><FontAwesome5 name="arrow-left" size={20}  color="#ffffff" />  Language selection</Text>

        

       
          
                <Select bg="#F9F9FA" borderRadius="10" mt="30" minWidth="327" accessibilityLabel="Choose Service" placeholder="Choose Your Preffered Language" _selectedItem={{
                bg: "#F9F9FA",
                endIcon: <CheckIcon size={5} />
              }}  >

                  <Select.Item label="English" value="English" />
                  <Select.Item label="Hausa" value="Hausa" />
                  <Select.Item label="Yoruba" value="Yoruba" />
                  <Select.Item label="Igbo" value="Igbo" />
                
                </Select>
       

    </Box>

          <LinearGradient
            colors={['#1C70EE', '#FFFFFF']}
            start={{x: 0.2, y: 0}} end={{x: 1, y: 0}}
            style={styles.rectangle1}
          >
          </LinearGradient>
    
          <LinearGradient
            colors={['#1C70EE', '#FFFFFF']}
            start={{x: 0.3, y: 0}} end={{x: 1, y: 0}}
            style={styles.rectangle2}
          >
          </LinearGradient>


          <LinearGradient
            colors={['#1C70EE', '#FFFFFF']}
            start={{x: 0.4, y: 0}} end={{x: 1, y: 0}}
            style={styles.rectangle3}
          >
          </LinearGradient>
         


          
   

        <Box alignItems="center">
        
                <Button bg="#1C70EE" borderRadius="md" w="300" h="12"  onPress={() => navigation.navigate('Account_type')}>Continue</Button>
        </Box>

    </LinearGradient>
          
 </HStack>
       
      )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:'#1C70EE',
      color:'#fff',
      justifyContent:"center",
      alignItems:"center",
      //width: 375, 
   // height: 812, 
    },

    
  

    rec_text_bg: {
        //marginTop: 416,
       // marginLeft: 0,
       // backgroundColor:'#1C70EE',
        width: 425, 
        height: 617, 
       // transform: [{ rotate: '-42.57deg' }],
       // opacity:1
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
        opacity:0.03
      },

    rectangle2: {
        marginTop:140.32,
        marginLeft: 10.92,
        width: 694.21, 
        height: 63.81, 
        transform: [{ rotate: '-42.57deg' }],
        opacity:0.02
      },

      rectangle3: {
        marginTop:140.32,
        marginLeft: 10.92,
        width: 694.21, 
        height: 63.81, 
        transform: [{ rotate: '-42.57deg' }],
        opacity:0.02
      },
   
     

   

})

export default Lang_select