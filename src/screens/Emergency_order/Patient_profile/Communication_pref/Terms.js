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

const Terms = ({navigation}) => {
  return (
    <ScrollView space="5"     backgroundColor="#FFFFFF" flex={1} >
  
    
    {/* <Text  w="251" fontSize="24" fontWeight="bold" color="#000000" ml="5" fontFamily="GeneralSans-Bold"> Privacy Policy and
Terms of Service </Text> */}

    <Stack mx="3" mt="5">
      
        <Text fontSize="14" lineHeight="18.2"> Docare App - Terms and Conditions </Text >

        <Text my="1">   1. User Responsibilities </Text>

        <Text my="1" mx="5">  1.1. You must use the Docare App for lawful and legitimate purposes only. </Text>

        <Text my="1" mx="5">   1.2. You are responsible for maintaining the security of your account and any associated passwords. </Text>

        <Text my="1">    2. Privacy </Text>
        <Text my="1" mx="5">     2.1. We respect your privacy and handle your data in accordance with our Privacy Policy. </Text>
        <Text my="1" mx="5">   2.2. You consent to the collection and use of your data as described in our Privacy Policy. </Text>
        <Text my="1">   3. Medical Information </Text>

        <Text my="1" mx="5">  3.1. The content provided on Docare is for informational purposes only and not a substitute for professional medical advice. </Text>
        <Text my="1" mx="5">  3.2. Consult a healthcare professional for any medical concerns. </Text>
        <Text my="1">  4. Intellectual Property </Text>
        <Text my="1" mx="5"> 4.1. All content and materials on Docare are protected by intellectual property laws. </Text>
        <Text my="1" mx="5">  4.2. You may not use, reproduce, or distribute content without our written permission. </Text>
        <Text my="1"> 5. Termination </Text>
        <Text my="1" mx="5"> 5.1. We reserve the right to terminate or suspend your access to Docare App at our discretion.</Text>
        <Text my="1"> 6. Disclaimer of Warranties </Text>
        <Text my="1" mx="5">  6.1. Docare is provided "as is" without any warranties. </Text>
        <Text my="1" mx="5"> 6.2. We do not guarantee the accuracy, reliability, or availability of our services. </Text>
        <Text my="1">    7. Limitation of Liability  </Text>
        <Text my="1" mx="5">     7.1. We are not liable for any direct or indirect damages related to your use of Docare.  </Text>
        <Text my="1"> 8. Governing Law  </Text>
        <Text my="1" mx="5">  8.1. These terms are governed by the laws of Your Jurisdiction.</Text>

        <Text my="1" mx="5" mb="4">
         By using Docare , you acknowledge and accept these Terms and Conditions. If you have any questions or concerns, please contact us at [Contact Information]. Thank you for choosing Docare for your health needs. </Text>
       

    </Stack>

    


    </ScrollView>
  )
}

export default Terms