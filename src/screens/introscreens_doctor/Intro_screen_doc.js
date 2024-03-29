import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,
    VStack,Select,Stack,Image,Text,
    useToast,FlatList,
     Button,Pressable,
    
   } from "native-base";

const Intro_screen_doc = ({navigation}) => {
  return (
    <VStack space="2"  px="3" justifyContent="center" alignItems="center"  backgroundColor="#ffffff" flex={1} >
      <Text w="300.57" h="132" fontFamily="GeneralSans-Bold" fontWeight="bold" fontSize="28.16" lineHeight="43.42" color="#000000">
        
        Make Online And Live Consultation
            Easily With Top Doctors 
            <Image  w="35.38" h="35.38" source={require( "../../../assets/img/user_doc1.png") } alt="Alternate Text" size="xs" />

            <Image  w="35.38" h="35.38" source={require( "../../../assets/img/user_doc2.png") } alt="Alternate Text" size="xs" />

            {/* <Image  w="235.38" h="12.38" source={require( "../../../assets/img/sign.png") } alt="Alternate Text" size="xs" /> */}

            </Text>

            <Image  w="35.38" h="35.38" source={require( "../../../assets/img/group1.png") } alt="Alternate Text" size="2xl" />


            <Box >

              <Button bg="#1C70EE" mt="70" borderRadius="md" w="300" h="12"  onPress={() => navigation.navigate('Login_screen')}>Login</Button>

              <Button colorScheme="primary" mt="4" variant="outline" borderRadius="md" w="300" h="12"  onPress={() => navigation.navigate('Lang_select')}>Sign Up</Button>
          </Box>

    </VStack>
  )
}

export default Intro_screen_doc