import {useEffect, useState} from 'react';
import { View, useWindowDimensions, StyleSheet,Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,TextArea,Switch,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,DatePicker,Text,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

   import AntDesign from 'react-native-vector-icons/AntDesign';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
   import DateTimePicker from '@react-native-community/datetimepicker';

const Com_method = ({navigation}) => {


    const [switchValue, setSwitchValue] = useState(false);

    const handleSwitchChange = () => {
      setSwitchValue(!switchValue);
      console.log(switchValue);
    };

  return (
    <VStack space="5"     backgroundColor="#FFFFFF" flex={1} >
  
        
        <Stack px="5" mt="10">

             <Pressable  mt="-15"  borderWidth="0.5" bg="#FFFFFF" pl="5" pt="5" pb="2" h="20" borderRadius="md">

                    <Stack direction="row"  space={1}>

                        <Box > 
                            <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                            <Image source={require( "../../../../../assets/icon_nav/bell1.png") } alt="Alternate Text" size="26"   />
                            </Box>
                        </Box>

                        <Box> 
                            <Text fontFamily="GeneralSans-Bold" fontWeight="bold" color="#000" fontSize="16" lineHeight="20" color="#000000"  >  Phone Calls</Text>

                            <Text fontFamily="GeneralSans-Bold" fontWeight="600" color="#545D69" fontSize="15" lineHeight="20" color="#000000"  >  Toggle to enable Calls</Text>
                        </Box>

                        {/* <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text> */}

                        <Text position="absolute" right="2" > <Switch  colorScheme="info" 
                         value={switchValue}
                         onValueChange={handleSwitchChange} /></Text>

                    </Stack>

            </Pressable>

            <Pressable  mt="3"  borderWidth="0.5" bg="#FFFFFF" pl="5" pt="5" pb="0" h="20" borderRadius="md">

                    <Stack direction="row" space={1}>

                    <Box > 
                            <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                            <Image source={require( "../../../../../assets/icon_nav/bell1.png") } alt="Alternate Text" size="26"   />
                            </Box>
                        </Box>

                       

                        <Box> 
                            <Text fontFamily="GeneralSans-Bold" fontWeight="bold" color="#000" fontSize="16" lineHeight="20" color="#000000"  >  Text Messages</Text>

                            <Text fontFamily="GeneralSans-Bold" fontWeight="600" color="#545D69" fontSize="15" lineHeight="20" color="#000000"  >  Toggle to enable Messages</Text>
                        </Box>

                        <Text position="absolute" right="2"> <Switch defaultIsChecked colorScheme="info" /></Text>

                    </Stack>

            </Pressable>

            <Pressable mt="3"  borderWidth="0.5" bg="#FFFFFF" pl="5" pt="5" pb="0" h="16" borderRadius="md">

                <Stack direction="row" space={1}>

                        <Box > 
                            <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                            <Image source={require( "../../../../../assets/icon_nav/sms1.png") } alt="Alternate Text" size="26"   />
                            </Box>
                        </Box>

                    

                        <Box> 
                            <Text fontFamily="GeneralSans-Bold" fontWeight="bold" color="#000" fontSize="16" lineHeight="20" color="#000000"  >  Email</Text>

                            <Text fontFamily="GeneralSans-Bold" fontWeight="600" color="#545D69" fontSize="15" lineHeight="20" color="#000000"  >  Toggle to enable Email</Text>
                        </Box>

                    <Text position="absolute" right="2"> <Switch defaultIsChecked colorScheme="info" /></Text>

                </Stack>

            </Pressable>

            <Pressable onPress={() => navigation.navigate('Personal_info')} mt="3"  borderWidth="0.5" bg="#FFFFFF" pl="5" pt="5" pb="0" h="20" borderRadius="md">

                <Stack direction="row" space={1}>

                    <Box > 
                            <Box backgroundColor="#F5F5FF" borderRadius="full" w="10" h="10" alignItems="center" justifyContent="center" > 
                            <Image source={require( "../../../../../assets/icon_nav/sms1.png") } alt="Alternate Text" size="26"   />
                            </Box>
                        </Box>

                    
                    <Box> 
                            <Text fontFamily="GeneralSans-Bold" fontWeight="bold" color="#000" fontSize="16" lineHeight="20" color="#000000"  >  App Notifications</Text>

                            <Text fontFamily="GeneralSans-Bold" fontWeight="600" color="#545D69" fontSize="15" lineHeight="20" color="#000000"  >  Enable App Notifications</Text>
                        </Box>

                    <Text position="absolute" right="2"> <Switch defaultIsChecked colorScheme="info" /></Text>

                </Stack>

            </Pressable>

        </Stack>

    </VStack>
  )
}

export default Com_method