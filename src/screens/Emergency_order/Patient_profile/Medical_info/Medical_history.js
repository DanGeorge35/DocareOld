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

const Medical_history = ({navigation}) => {
    
  return (
    <VStack space="5"     backgroundColor="#FFFFFF"  flex={1} >

<FormControl
      w="100%"
      maxW="500"
      alignItems="left"
      mt="10"
      px="5"
      

      style={{
       // paddingLeft: 20,
       // paddingRight: 20,
       // paddingTop: 10,
        //paddingBottom: 40,
        //elevation: 1,
       // borderWidth: 2,
       // borderColor: '#eee',
       // backgroundColor: '#ffffff',
       // borderBottomLeftRadius: 20,
       // borderBottomRightRadius: 20,
      }}>
      <Box mb="2" mt="2">
      

        <Input
          type="text"
          size="lg"
          variant="outline"
          placeholder="Name of Medical Condition"
          w="100%"
          borderWidth="2"
        borderColor=""
        placeholderTextColor="#000000"
          style={styles.input}
          //    onChangeText={(val)=>setPhone(val)}
          onChangeText={() => {
            console.log('');
          }}
        />

      <Stack direction="row" space={5} my="5">
        <Text fontSize="16" color="#494949"> Date Started </Text>
        <Box borderBottomColor="#494949" borderBottomWidth="1" mb="5" h="3" width="40"> </Box>
      </Stack>

      <Stack direction="row"  space={5} >
      <Select
            bg="#F9F9FA"
            borderRadius="10"
            mt="5"
            minWidth="327"
            accessibilityLabel="Choose Service"
            placeholder="Choose Your Preffered Language"
            _selectedItem={{
              bg: '#F9F9FA',
              endIcon: <CheckIcon size={5} />,
            }}>
            <Select.Item label="English" value="English" />
            <Select.Item label="Hausa" value="Hausa" />
            <Select.Item label="Yoruba" value="Yoruba" />
            <Select.Item label="Igbo" value="Igbo" />
          </Select>
      </Stack>

      </Box>
      </FormControl>

    </VStack>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 52,
    padding: 16,
  },
});

export default Medical_history