import * as React from 'react';
import { View, useWindowDimensions, StyleSheet,Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Successful_page = () => {

  return (
    <VStack space="2.5"  px="3" mx="3"  backgroundColor="#fff" flex={1} >
       
    <Stack >

       <Box style={styles.lang_view}>
         <Text style={styles.lang_text}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
      </Box>

      <Box alignItems="center" style={styles.img_view}>
            <Image source={require( "../../../assets/success_pass.png") } alt="Alternate Text" size="lg" />

            <Text style={{ textAlign: 'left',color:'#000',fontWeight:'bold',fontSize:18 }} >Your password has been changed</Text>
            <Box style={styles.success_view}>
                <Text style={{ textAlign: 'center',color:'#000',fontSize:14 }}> Congratulations! your password has been sccessfully changed </Text>
            </Box>
        </Box>

        <Box alignItems="center">
              <Button bg="#1C70EE" style={styles.get_start_btn} onPress={() => console.log("LoginHandle")}>Back to Login</Button>
       </Box>

    

    </Stack>

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
  
  img_view:{
    marginTop:150
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

export default Successful_page