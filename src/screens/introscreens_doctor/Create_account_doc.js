import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,
    VStack,Select,Stack,Image,Text,
    useToast,FlatList,
     Button,Pressable,
    
   } from "native-base";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Create_account_doc = () => {
  return (
    <VStack space="2"  px="3"  backgroundColor="#fff" flex={1} >

 

    <Box mt="10" ml="3"  w="300" h="12">

      <Text fontSize="xl" color="#000000" fontWeight="bold" lineHeight="25"  fontFamily="Inter-Black"  onPress={() => navigation.navigate('Account_type')}><FontAwesome5 name="arrow-left" size={20}  color="#000000" />   Create account </Text>

   </Box>

   </VStack >
  )
}

export default Create_account_doc