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

const Policy = () => {
  return (
    <ScrollView space="2"    backgroundColor="#FFFFFF" flex={1} >

<Stack mx="3" mt="5" alignItems="center">

        <Text mb="3">
            Welcome to DoCare, your trusted health mobile app platform. We are committed to safeguarding your privacy and ensuring the security of your personal information. By using our services, you agree to the following privacy policy: 
        </Text>

        <Text mb="2" ml="3"> 
           1.   Information Collection: We collect data necessary for app functionality, including personal and health-related information. This may include your name, contact details, medical history, and usage data.
        </Text>

        <Text mb="2" ml="0">
            2.  Data Usage: We use your data to provide personalized health services, improve user experience, and comply with legal obligations. 
         </Text>

         <Text mb="2" ml="0">  
            3. Data Security: We employ robust security measures to protect your information from unauthorized access or disclosure.
        </Text>
        

        <Text mb="2" ml="3">
           4.   Data Sharing: We may share your data with trusted partners for specific purposes such as medical consultations. We do not sell your data. User Rights: You can access, correct, or delete your data. Contact us for assistance. 
        </Text>
        <Text mb="2" ml="3">
            5.  Policy Updates: We may update this policy to reflect changes in our services or regulatory requirements.Please review it periodically.By using DoCare, you consent to this policy. Your privacy is essential to us. If you have any questions, contact our support team.
        
        </Text>

</Stack>
         
    </ScrollView>
  )
}

export default Policy