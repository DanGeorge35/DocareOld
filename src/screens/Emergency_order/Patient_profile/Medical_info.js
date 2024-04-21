import {useEffect, useState} from 'react';
import { View, useWindowDimensions, StyleSheet,Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,TextArea,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,DatePicker,Text,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

   import AntDesign from 'react-native-vector-icons/AntDesign';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
   import DateTimePicker from '@react-native-community/datetimepicker';

const Medical_info = ({navigation}) => {
    const { width } = Dimensions.get('window');

    return (
      <VStack space="5"     backgroundColor="#FFFFFF"  flex={1} >
  
            
        <Stack px="5" mt="10">

             <Pressable onPress={() => navigation.navigate('Medical_history')} mt="-15"  borderBottomWidth="1" bg="#FFFFFF" pl="1" borderBottomColor="#9DA0A4"  pt="5" pb="0" h="20" borderRadius="md">

                    <Stack direction="row" mb="5" space={5}>

                        <Box> 
                            <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                             {/* <Text><FontAwesome5 name="folder"  size={22} color="#000000" /></Text> */}
                             <Image source={require( "../../../../assets/icon_nav/med_his11.png") } alt="Alternate Text" size="28"   />
                            </Box>
                        </Box>
                        <Box >
                            <Text fontFamily="GeneralSans-Bold" mb="0.25" fontWeight="700" fontSize="15" lineHeight="20" color="#2B2B2B"  >Medical History</Text>
                            <Text fontWeight="400" color="#545D69">Your Personal Medical History</Text>

                        </Box>
                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#9DA0A4" /></Text>

                    </Stack>

            </Pressable>

            <Pressable onPress={() => navigation.navigate('Current_medication')} mt="-15"  borderBottomWidth="0.5" bg="#FFFFFF" pl="1" mt="2.5" pt="5" pb="0" h="20" borderRadius="md">

                    <Stack direction="row" space={5}>

                        <Box> 
                            <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                           <Image source={require( "../../../../assets/icon_nav/inv1.png") } alt="Alternate Text" size="28"  />
                            </Box>
                        </Box>
                        <Box>
                            <Text fontFamily="GeneralSans-Bold" fontWeight="800" fontSize="15" lineHeight="20" color="#000000"  >Current Medications</Text>
                            <Text fontWeight="400" color="#545D69">See your Current Medication</Text>
                        </Box>

                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#9DA0A4" /></Text>

                    </Stack>

                </Pressable>

                <Pressable onPress={() =>console.log("Allegic")} mt="-15"  borderBottomWidth="0.5" bg="#FFFFFF" pl="1" mt="2.5" pt="5" pb="0" h="20" borderRadius="md">

                    <Stack direction="row" space={5}>

                        <Box> 
                            <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                            <Image source={require( "../../../../assets/icon_nav/allg1.png") } alt="Alternate Text" size="28"   />
                            </Box>
                        </Box>

                        <Box> 
                            <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Allergies</Text>
                            <Text fontWeight="400" color="#545D69">Add your allergies</Text>
                        </Box>

                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#9DA0A4" /></Text>

                    </Stack>

                </Pressable>

                <Pressable onPress={() => navigation.navigate('Emergency_contact')} mt="-15"  borderBottomWidth="0.5" bg="#FFFFFF" pl="1" mt="2.5" pt="5" pb="0" h="20" borderRadius="md">

                    <Stack direction="row" space={5}>

                        <Box> 
                            <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                            <Image source={require( "../../../../assets/icon_nav/hosp11.png") } alt="Alternate Text" size="26"   />
                            </Box>
                        </Box>

                        <Box>

                            <Text fontFamily="GeneralSans-Bold" fontWeight="700" fontSize="14"  lineHeight="20" color="#000000">Hospitalisations and Emergency</Text>
                            <Text fontWeight="400" color="#545D69">Add Your Health Insurance</Text>
                        </Box>

                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#9DA0A4" /></Text>

                    </Stack>

                </Pressable>

                <Pressable onPress={() => navigation.navigate('Chronic_conditions_mgt')} mt="-15"  borderBottomWidth="0.5" bg="#FFFFFF" pl="1" mt="2.5" pt="5" pb="0" h="20" borderRadius="md">

                    <Stack direction="row" space={5}>

                        <Box> 
                            <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                            <Image source={require( "../../../../assets/icon_nav/chron1.png") } alt="Alternate Text" size="26"   />
                            </Box>
                        </Box>

                        <Box>

                             <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="14" lineHeight="20" color="#000000" >Chronic Conditions Management</Text>
                             <Text fontWeight="400" color="#545D69">Set Up Your Vital</Text>

                        </Box>

                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#9DA0A4" /></Text>

                    </Stack>

                </Pressable>

                <Pressable onPress={() => console.log("Tests")} mt="-15"  borderBottomWidth="0.5" bg="#FFFFFF" pl="1" mt="2.5" pt="5" pb="0" h="20" borderRadius="md">

                    <Stack direction="row" space={5}>

                    <Box> 
                            <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                            <Image source={require( "../../../../assets/icon_nav/diag11.png") } alt="Alternate Text" size="26"   />
                            </Box>
                        </Box>
                        <Box>
                             <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="15" lineHeight="20" color="#000000"  >Diagnostic Test Results</Text>
                             <Text fontWeight="400" color="#545D69">Add and view results</Text>
                        </Box>
                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#9DA0A4" /></Text>

                    </Stack>

                </Pressable>

                <Pressable onPress={() => navigation.navigate('Pry_care_phy_info')} mt="-15"  borderBottomWidth="0.5" bg="#FFFFFF" pl="1" mt="2.5" pt="5" pb="0" h="20" borderRadius="md">

                    <Stack direction="row" space={5}>

                    <Box> 
                            <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                            <Image source={require( "../../../../assets/icon_nav/usercare.png") } alt="Alternate Text" size="28"   />
                            </Box>
                        </Box>

                    <Box>
                        <Text fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="13.5" lineHeight="20" color="#000000"  >Primary Care Physician Information</Text>
                        <Text fontWeight="400" color="#545D69">Your Personal Medical History</Text>

                    </Box>
                        <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#9DA0A4" /></Text>

                    </Stack>

                </Pressable>

        </Stack>
  
  
  
      </VStack>
    )
}

const styles = StyleSheet.create({

    header_container: {
     // flex: 1,
      backgroundColor:'#FFFFFF',
       // width:409,
        //height:215
      //color:'#fff',
      //justifyContent:"center",
      //alignItems:"center",
      //width: 375, 
     // height: 812, 
    },
    title:{
        fontFamily:'GeneralSans-Bold',
        fontWeight:'bold',
        fontSize:25,
        //lineHeight:30,
       // color:'#1B1D28',
        color:'#000000',
        width:251,
       // height:20,
        marginTop:0,
        marginLeft:20,

    },
    lang_view:{
        width:101,
        //height:49,
        marginTop:30,
        marginLeft:14,
        color:'#000000',
        
    },
    lang_text: {
        width:205,
        fontSize:20,
        fontWeight:'500',
        color:'#1C70EE',
       lineHeight: 21.6,
       fontFamily:'GeneralSans-Bold',
     
    },

});

export default Medical_info