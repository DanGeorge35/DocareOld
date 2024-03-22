import * as React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,Text,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const moveNextTab=()=>{
    console.log("helloo")
}

const Success_page = ({navigation}) => {
  return (
    <VStack space="2.5"  px="3"  backgroundColor="#fff" flex={1} >

        <Box alignItems="center" mt="170">
            <Image source={require( "../../../assets/success.png") } alt="Alternate Text" size="xl" />

        

            <Text fontWeight="bold" fontSize="xl" mt="5" color="#494949" lineHeight="30.24" textAlign="center" fontFamily="Plus Jakarta Sans"> Successful! </Text>

            <Box w="300" h="30">
                <Text  fontSize="sm" color="#494949" > Your have successfully signed up to Docare </Text>
            </Box>
        </Box>


        <Box alignItems="center">
              <Button bg="#1C70EE" mt="170" borderRadius="md" w="300" h="12"  onPress={() => navigation.navigate('Login_screen')}>Done</Button>
       </Box>


    </VStack>
  )
}

const styles = StyleSheet.create({

   
   success_view:{
    width:300,
    height:30
   },
  

   

    get_start_btn:{
        width:327,
        height:52,
         marginTop:100,
         //color:"red",
         backgroundColor:"#1C70EE",
        
        borderRadius:12,
        padding: 16,
    },

});

export default Success_page