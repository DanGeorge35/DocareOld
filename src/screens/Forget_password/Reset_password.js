import * as React from 'react';
import { View, useWindowDimensions, StyleSheet,Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Reset_password = () => {

    const [show, setShow] = React.useState(false);

  return (
    <VStack space="2.5"  px="3" mx="3"  backgroundColor="#fff" flex={1} >
       
    <Stack direction="row">

       <Box style={styles.lang_view}>
         <Text style={styles.lang_text}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
      </Box>

      <Box  style={styles.lang_view1}>
         <Text style={styles.DocareText}>Do'Care </Text> 
      </Box>

    </Stack>

    <Box   >
      <Text style={{ textAlign: 'left',color:'#000',fontWeight:'bold',fontSize:18 }} >Set your new passwords  </Text>
      <Text style={{ fontWeight:'normal',color:'#000'}}>Kindly enter your new password to complete this process</Text>
    </Box>

    <FormControl w="100%" maxW="500"  alignItems="left" mt="5">

  <Box  mb="2" mt="3">
  
  <Input w={{
      base: "100%",
      md: "25%"
    }} type={show ? "text" : "password"}
    size="md"
    variant="outline"
    InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<FontAwesome5 name={show ? "eye" : "eye-slash"} />} size={5} mr="2" color="muted.400" />
          </Pressable>} placeholder="Enter Password (min 6 characters)" />


<Input w={{
      base: "100%",
      md: "25%"
    }} type={show ? "text" : "password"}
    size="md"
    mt="5"
    variant="outline"
    InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<FontAwesome5 name={show ? "eye" : "eye-slash"} />} size={5} mr="2" color="muted.400" />
          </Pressable>} placeholder="Re-enter Password" />


    </Box>

   

        <Box alignItems="center">
          <Button bg="#1C70EE" style={styles.get_start_btn} onPress={() => console.log("LoginHandle")}>Reset Password</Button>
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
    width:331,
    height:49,
    marginTop:30,
    marginLeft:14,
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

export default Reset_password