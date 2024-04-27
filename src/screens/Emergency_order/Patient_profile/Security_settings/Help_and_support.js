import {useEffect, useState} from 'react';
import { View, useWindowDimensions, StyleSheet,Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,TextArea,ScrollView,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,DatePicker,Text,
    VStack,Select,Stack,Image,Icon,useToast,FlatList,Button,Pressable,
    
   } from "native-base";

   import AntDesign from 'react-native-vector-icons/AntDesign';
   import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
   import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
   import DateTimePicker from '@react-native-community/datetimepicker';

const Help_and_support = () => {
  return (
    <ScrollView space="5" backgroundColor="#FFFFFF" flex={1} >

            <Box justifyContent="center" alignItems="center" mt="10">
                <Image source={require( "../../../../../assets/icon_nav/customer_care.png") } alt="Alternate Text" size="48"   />
            </Box>

            <Box justifyContent="center" fontWeight="bold" mx="5"> 
                 <Text fontSize="16" color="#000"> How can we assist you? </Text>
                 <Text fontSize="14" color="#545D69" mt="2"> We at LyfeHive are dedicated to giving you the best experience imaginable. We are available to assist you if you have any questions, worries, or problems. </Text>
            </Box>

            <Stack direction="row" space={2} mt="3" mx="5"> 

                <Image source={require( "../../../../../assets/icon_nav/call1.png") } alt="Alternate Text" size="30"   />
                <Text fontSize="18" color="#545D69" lineHeight="32">+2348067712197</Text>

            </Stack>

            <Stack direction="row" space={2} mt="3" mx="5"> 

                <Image source={require( "../../../../../assets/icon_nav/call1.png") } alt="Alternate Text" size="30"   />
                <Text fontSize="18" color="#545D69" lineHeight="26">support@DoCare.info</Text>

            </Stack>

            <Stack direction="row" space={2} mt="3" mx="5"> 

                <Image source={require( "../../../../../assets/icon_nav/twitter.png") } alt="Alternate Text" size="30"   />
                <Image source={require( "../../../../../assets/icon_nav/twitter.png") } alt="Alternate Text" size="30"   />
                <Image source={require( "../../../../../assets/icon_nav/twitter.png") } alt="Alternate Text" size="30"   />
                <Text fontSize="18" color="#545D69" lineHeight="26">@Docare.co</Text>

            </Stack>


    </ScrollView>
  )
}

export default Help_and_support