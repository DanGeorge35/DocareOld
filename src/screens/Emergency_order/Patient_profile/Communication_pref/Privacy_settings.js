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

const Privacy_settings = ({navigation}) => {
  return (
    <VStack space="5"     backgroundColor="#FFFFFF" flex={1} >
  
   

    <Stack px="5" mt="10">

         <Pressable onPress={() => navigation.navigate('Privacy_settings')} mt="-15"  borderWidth="0.5" bg="#FFFFFF" pl="5" pt="5" pb="0" h="16" borderRadius="md">

                <Stack direction="row" space={10}>

                    <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >Account Plan</Text>

                    <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

                </Stack>

        </Pressable>

        <Pressable onPress={() => navigation.navigate('Notification_settings')} mt="3"  borderWidth="0.5" bg="#FFFFFF" pl="5" pt="5" pb="0" h="16" borderRadius="md">

                <Stack direction="row" space={10}>

                    <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >Notification Alert</Text>

                    <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

                </Stack>

        </Pressable>

        

        <Pressable onPress={() => navigation.navigate('Policy')} mt="3"  borderWidth="0.5" bg="#FFFFFF" pl="5" pt="5" pb="0" h="16" borderRadius="md">

            <Stack direction="row" space={10}>

                <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >Privacy Policy </Text>

                <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

            </Stack>

        </Pressable>

        <Pressable onPress={() => navigation.navigate('Terms')} mt="3"  borderWidth="0.5" bg="#FFFFFF" pl="5" pt="5" pb="0" h="16" borderRadius="md">

            <Stack direction="row" space={10}>

                <Text fontFamily="GeneralSans-Bold" fontWeight="600" fontSize="15" lineHeight="20" color="#000000"  >Terms of Service</Text>

                <Text position="absolute" right="5"  ><FontAwesome5 name="angle-right"  size={22} color="#000000" /></Text>

            </Stack>

        </Pressable>

    </Stack>

</VStack>
  )
}

export default Privacy_settings