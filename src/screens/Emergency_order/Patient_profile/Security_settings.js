import {useEffect, useState} from 'react';
import { View, useWindowDimensions, StyleSheet,Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,Text,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,Modal,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

   import AntDesign from 'react-native-vector-icons/AntDesign';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Security_settings = ({navigation}) => {
    const { width } = Dimensions.get('window');
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

    return (
      <VStack space="2.5"  backgroundColor="#F9F9FA" flex={1} >
         
         {/* <Stack direction="row"  mb="0">

            <Box w="100" h="10" mt="30" ml="5">
                <Text w="205" fontSize="md" fontWeight="bold" color="#000" lineHeight="27" onPress={()=>navigation.navigate('Profile')}><FontAwesome5 name="arrow-left" size={20} color="#000000" /></Text>
            </Box>

               

            </Stack>

<Text  w="251" fontSize="18" fontWeight="bold" color="#000000" ml="10" fontFamily="GeneralSans-Bold"> Security Settings </Text> */}
  
      <Stack mt="5"> 
  
     
      <Pressable onPress={() =>console.log("first")} mt="2" bg="#FFFFFF" px="5" py="4" h="16">
  
              <Stack direction="row" space={5}>
  
              <Box > 
                  <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                  <Image source={require( "../../../../assets/icon_nav/lock1.png") } alt="Alternate Text" size="26"   />
                  </Box>
              </Box>
  
              <Text fontFamily="GeneralSans-Bold"  fontWeight="bold" fontSize="16" lineHeight="30" color="#000000">Filters and privacy</Text>
  
              <Text  position="absolute" right="2" lineHeight="30" ><FontAwesome5 name="angle-right"  size={24} color="#000000" /></Text>
  
              </Stack>
  
          </Pressable>
  
          <Pressable  onPress={() => navigation.navigate("Help_and_support")} mt="2" bg="#FFFFFF" px="5" py="4" h="16">
  
              <Stack direction="row" space={5}>
  
              {/* <Text ><MaterialIcons name="help" size={20} color="#000000" /></Text> */}

              <Box > 
                  <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                  <Image source={require( "../../../../assets/icon_nav/msg1.png") } alt="Alternate Text" size="26"   />
                  </Box>
              </Box>
  
              <Text  fontFamily="GeneralSans-Bold"  fontWeight="bold" fontSize="15" lineHeight="20" color="#000000" >Help</Text>
  
              <Text  position="absolute" right="2" lineHeight="30"  ><FontAwesome5 name="angle-right"  size={24} color="#000000" /></Text>
  
              </Stack>
  
          </Pressable>
  
          <Pressable  onPress={() => console.log("hello")} mt="2" bg="#FFFFFF" px="5" py="4" h="16">
  
              <Stack direction="row" space={5}>
  
              <Box > 
                  <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                  <Image source={require( "../../../../assets/icon_nav/legal1.png") } alt="Alternate Text" size="26"   />
                  </Box>
              </Box>
  
              <Text  fontFamily="GeneralSans-Bold"  fontWeight="bold" fontSize="15" lineHeight="20" color="#000000" >Legal</Text>
  
              <Text  position="absolute" right="2" lineHeight="30"><FontAwesome5 name="angle-right"  size={24} color="#000000" /></Text>
  
              </Stack>
  
          </Pressable>

          <Pressable  onPress={() => console.log("hello")} mt="2" bg="#FFFFFF" px="5" py="4" h="16">
  
              <Stack direction="row" space={5}>
  
              <Box > 
                  <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                  <Image source={require( "../../../../assets/icon_nav/delete1.png") } alt="Alternate Text" size="26"   />
                  </Box>
              </Box>
  
              <Text  fontFamily="GeneralSans-Bold"  fontWeight="bold" fontSize="15" lineHeight="20" color="#000000" >Delete Account</Text>
  
              <Text  position="absolute" right="2" lineHeight="30"><FontAwesome5 name="angle-right"  size={24} color="#000000" /></Text>
  
              </Stack>
  
          </Pressable>
  
          <Pressable onPress={toggleModal} mt="2" bg="#FFFFFF" px="5" py="4" h="16">
  
              <Stack direction="row" space={5}>
  
              <Box > 
                  <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                  <Image source={require( "../../../../assets/icon_nav/logout1.png") } alt="Alternate Text" size="26"   />
                  </Box>
              </Box>
  
                 <Text  fontFamily="GeneralSans-Bold"  fontWeight="bold" fontSize="15" lineHeight="20" color="#000000" >Log Out</Text>
  
                 <Text  position="absolute" right="2" lineHeight="30" ><FontAwesome5 name="angle-right"  size={24} color="#000000" /></Text>
  
              </Stack>
  
          </Pressable>

          <Pressable  onPress={() => console.log("hello")} mt="2" bg="#FFFFFF" px="5" py="4" h="16">
  
              <Stack direction="row" space={5}>
  
              <Box > 
                  <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                  <Image source={require( "../../../../assets/icon_nav/logout1.png") } alt="Alternate Text" size="26"   />
                  </Box>
              </Box>
  
              <Text  fontFamily="GeneralSans-Bold"  fontWeight="bold" fontSize="15" lineHeight="20" color="#000000" >Change Password</Text>
  
              <Text  position="absolute" right="2" lineHeight="30"><FontAwesome5 name="angle-right"  size={24} color="#000000" /></Text>
  
              </Stack>
  
          </Pressable>
  
      </Stack>

     
<Modal isOpen={isModalVisible} onClose={() => setModalVisible(false)} avoidKeyboard justifyContent="flex-end" mb="0" bottom="0" size="full">
        <Modal.Content>
          {/* <Modal.CloseButton /> */}
            {/* <Modal.Header>Forgot Password?</Modal.Header> */}
          <Modal.Body>

          <Box alignItems="center" mt="4" mb="4" >
            
                <Image source={require( "../../../../assets/logout.png") } alt="Alternate Text" size="md" />

                <Text style={styles.logOutText} color="dark.100">Logout</Text>

                <Text style={styles.logOutText1} color="dark.100">Are you sure you want to logout of this account?</Text>
            
        </Box>

            <Button flex="1" color="#1C70EE" onPress={() => console.log("Logout")}>
              Yes, Logout
            </Button>

            <Button flex="1" mt="3"  bg= "white.100:alpha.70" color="dark.100"  onPress={() => {
              setModalVisible(false);
            }}>
              No, Cancel
            </Button>
          </Modal.Body>
          {/* <Modal.Footer></Modal.Footer> */}
        </Modal.Content>
      </Modal>
      
  
  </VStack>
    )
}

const styles = StyleSheet.create({

    header_container: {
     // flex: 1,
      backgroundColor:'#FFFFFF',
       // width:409,
        height:215
      //color:'#fff',
      
    },
    logOutText:{
        fontWeight:'500',
        fontSize:16,
        lineHeight:21.6,
        fontFamily:'GeneralSans-Bold',
        color:'#000000'
    },
    logOutText1:{
        fontWeight:'500',
        fontSize:14,
        lineHeight:21,
        fontFamily:'GeneralSans-Bold',
        color:'#000000',
        textAlign:'center'
    },
    panelView:{
        marginTop:25,
        backgroundColor:'#FFFFFF',
        paddingTop:20,
        paddingBottom:0,
        paddingLeft:30,
        height:64,
    },
   
    
    title:{
        fontFamily:'GeneralSans-Bold',
        fontWeight:'bold',
        fontSize:25,
        //lineHeight:30,
       // color:'#1B1D28',
        color:'#000000',
        width:320,
       // height:20,
        marginTop:0,
        marginLeft:20,

    },
    user_name:{
        width:148,
        //height:16,
        fontFamily:'GeneralSans-Bold',
        fontWeight:'bold',
        fontSize:20,
        //lineHeight:16,
        textAlign:'center',
       // color:'#344054',
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
          height:29,
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
        fontWeight:'500',
        color:'#1C70EE',
       lineHeight: 21.6,
       fontFamily:'GeneralSans-Bold',
     
    },

})

export default Security_settings