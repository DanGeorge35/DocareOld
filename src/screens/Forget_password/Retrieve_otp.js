import * as React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,Text,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Retrieve_otp = () => {
  return (
    <VStack space="2.5"  px="3"  backgroundColor="#fff" flex={1} >
       
        <Stack direction="row">

          <Box w="100" h="10" mt="30">
             <Text w="205" fontSize="md" fontWeight="bold" color="#000" lineHeight="27" onPress={()=>navigation.navigate('Forget_pass')}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
          </Box>

         

          <Box  w="330" h="49" mt="5" >
             <Text fontSize="40" fontWeight="bold" color="#1C70EE" lineHeight="48.8">Do'Care </Text> 
          </Box>

        </Stack>

        <Box   >
          <Text textAlign="left" color="#000" fontWeight="bold" fontSize="18"   >Enter 4-digit code sent to you via SMS or Email  </Text>
          <Text fontWeight="normal" color="#000"  >Please enter the code sent to the number ending in 23564</Text>
        </Box>

        <FormControl w="100%" maxW="500"  alignItems="left" mt="5">
  
      <Box  mb="2" mt="3">
      <FormControl.Label >Phone Number</FormControl.Label>
            <Input type="text"  
            
             size="xl"  variant="outline" placeholder="Enter OTP (000 - 000)" minWidth="335" w="100%"
             
          //    onChangeText={(val)=>setPhone(val)}
             onChangeText={()=>{console.log("")}}
             />
  
  
        </Box>
  
        <Pressable mt="8"  >
              <Text textAlign="center" color="#000000" fontFamily="GeneralSans-Regular" fontSize="14"  >Didn’t get OTP?</Text>
          </Pressable>
  
          
  
           <Pressable mt="0" onPress={()=>console.log("am Pressed")} >
                <Text style={{fontWeight:'normal', textAlign: 'center',color:'#1C70EE' }}  >Resend OTP in 00:58s </Text>
            </Pressable>

            <Box alignItems="center">
              <Button bg="#1C70EE"  borderRadius="md" w="300" mt="190" onPress={() => console.log("LoginHandle")}>Verify</Button>
       </Box>
    
  
      </FormControl>

       
    </VStack>
  )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:'#FFFFFF',
      color:'#fff',
      justifyContent:"center",
      alignItems:"center",
      //width: 375, 
     // height: 812, 
    },
  
    DocareText: {
      fontSize:40,
     // fontWeight:'bold',
     color:'#1C70EE',
     lineHeight: 48.84,
     fontFamily:'HelveticaNeueBold',
     //width:156,
     //height:49,
    marginTop:0,
    //marginRight:150,
    // marginLeft:110
  },
  
  tab_view:{
      //width:335,
      height:50,
      //backgroundColor:'#F4F7FA',
      marginTop:30,
     // marginLeft:20,
      color:'red'
     
  },
  
  form_view:{
      width:335,
      height:291,
      marginTop:45
  },
  
  
  doCare_text:{
          fontFamily:'Helvetica Neue',
          fontWeight:'700',
          fontSize:40,
          lineHeight:48.84,
          color:'#1C70EE'
  },
  
  doCare_view:{
      width:156,
      height:49,
      marginTop:41,
      marginLeft:110
  },
  
  
  lang_view1:{
    width:300,
    height:49,
    marginTop:30,
    marginLeft:0,
    color:'#000000',
  },
  lang_view:{
      width:101,
      height:49,
      marginTop:30,
      marginLeft:14,
      color:'#000000',
  },
  
  lang_text: {
      width:205,
      fontSize:20,
    
      fontWeight:'bold',
      color:'#000000',
     lineHeight: 27,
     fontFamily:'General Sans',
   
  },
  
  get_start_btn:{
  width:327,
  height:52,
   marginTop:190,
   //color:"red",
  // backgroundColor:"1C70EE",
  
  borderRadius:12,
  padding: 16,
  },
  
  })

export default Retrieve_otp