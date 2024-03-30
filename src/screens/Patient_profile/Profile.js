import * as React from 'react';
import { View, useWindowDimensions, StyleSheet,Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,Text,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

   import AntDesign from 'react-native-vector-icons/AntDesign';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile = ({navigation}) => {
    const { width } = Dimensions.get('window');
  return (
    <VStack space="2.5"  style={{width}}   backgroundColor="#F9F9FA" flex={1} >
       
    <Stack direction="row"  backgroundColor="#FFFFFF" h="215" >

        
        <Box w="100" h="10" mt="30" ml="5">
             <Text w="205" fontSize="md" fontWeight="bold" color="#000" lineHeight="27" onPress={()=>navigation.navigate('Login_screen')}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
          </Box>

         
      
      <Box w="148" h="119.55" mt="70" alignItems="center">
             <Image source={require( "../../../assets/edit_patient1.png") } alt="Alternate Text" size="lg" borderRadius="full" w="82" h="82" position="relative"  right="0" />

            <Text width="148" fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="20" textAlign="center" color="#000" mt="3" > Aniebiet-Oluwa</Text>
        </Box>

        <Box position="absolute" alignItems="center" top="120" right="40%" >
            <Image source={require( "../../../assets/edit_patient.png") } alt="Alternate Text" size="xs"   />
        
      </Box>


    </Stack>


    <Stack>

       
        
   
    <Pressable onPress={() => navigation.navigate('Personal_info')} mt="-15" bg="#FFFFFF" pl="5" pt="5" pb="0" h="16">

            <Stack direction="row" space={10}>

            <Text ><FontAwesome5 name="user" size={22} color="#000000" /></Text>

            <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Personal Information</Text>

            <Text position="absolute" right="7"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

            </Stack>

        </Pressable>

        {/*  marginTop:10,
        backgroundColor:'#FFFFFF',
        paddingTop:20,
        paddingBottom:0,
        paddingLeft:30,
        height:64, */}

        <Pressable  onPress={() => navigation.navigate('Contact')} mt="2" bg="#FFFFFF" pl="5" pt="5" pb="0" h="16">

            <Stack direction="row" space={10}>

            <Text ><MaterialIcons name="call" size={22} color="#000000" /></Text>

            <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Contact</Text>

            <Text position="absolute" right="7" ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

            </Stack>

        </Pressable>

        <Pressable  onPress={() => navigation.navigate('Medical_info')} mt="2" bg="#FFFFFF" pl="5" pt="5" pb="0" h="16">

            <Stack direction="row" space={10}>

            <Text ><FontAwesome5 name="file" size={22} color="#000000" /></Text>

            <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000" >Medical Information</Text>

            <Text position="absolute" right="7" ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

            </Stack>

        </Pressable>

        <Pressable  onPress={() => navigation.navigate('Location_info')} mt="2" bg="#FFFFFF" pl="5" pt="5" pb="0" h="16">

            <Stack direction="row" space={10}>

            <Text ><MaterialIcons name="map" size={22} color="#000000" /></Text>

            <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Location Information</Text>

            <Text position="absolute" right="7" ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

            </Stack>

        </Pressable>

        <Pressable  onPress={() => navigation.navigate('Communication_pref')} mt="2" bg="#FFFFFF" pl="5" pt="5" pb="0" h="16">

            <Stack direction="row" space={10}>

            <Text ><MaterialIcons name="tty" size={22} color="#000000" /></Text>

            <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Communication preference</Text>

            <Text position="absolute" right="7" ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

            </Stack>

        </Pressable>

        <Pressable  onPress={() => navigation.navigate('Security_settings')} mt="2" bg="#FFFFFF" pl="5" pt="5" pb="0" h="16">

        <Stack direction="row" space={10}>

            <Text ><MaterialIcons name="settings" size={22} color="#000000" /></Text>

            <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Security Settings</Text>

            <Text position="absolute" right="7" ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

        </Stack>

</Pressable>

    </Stack>
    

</VStack>
  )
}

const styles = StyleSheet.create({

    
    panelView:{
        marginTop:-15,
        backgroundColor:'#FFFFFF',
        paddingTop:20,
        paddingBottom:0,
        paddingLeft:30,
        height:64,
    },
    panelView1:{
        marginTop:10,
        backgroundColor:'#FFFFFF',
        paddingTop:20,
        paddingBottom:0,
        paddingLeft:30,
        height:64,
    },
    panelText:{
        fontFamily:'GeneralSans-Bold',
        fontWeight:'bold',
        fontSize:15,
        lineHeight:20,
        color:'#000000'
    },
    user_name:{
        width:148,
        fontFamily:'GeneralSans-Bold',
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
        color:'#000000',
        marginTop:10
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
      ImgBox:{
        width:148,
        height:119.55,
        marginTop:70,
        alignItems:"center",
       // marginLeft:113
       //borderRadius
      },
      lang_text: {
        width:205,
        fontSize:20,
        fontWeight:'normal',
        color:'#000000',
       lineHeight: 27,
       fontFamily:'General Sans',
     
    },

})

export default Profile