import {useEffect, useState} from 'react';
import { View, useWindowDimensions, StyleSheet,Dimensions, Platform } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,TextArea,Checkbox,
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
        <Box borderBottomColor="#DADADA" borderBottomWidth="1" mb="5" h="3" width="40"> </Box>
      </Stack>

      <Stack direction="row"  space={2} >

          <Select
                bg="#F9F9FA"
                borderRadius="3"
                mt="1"
                bg="#fff"
                minWidth="48%"
                accessibilityLabel="Choose Service"
                placeholder="Month"
                _selectedItem={{
                  bg: '#F9F9FA',
                  endIcon: <CheckIcon size={5} />,
                }}>
                  <Select.Item label="January" value="January" />
                  <Select.Item label="Febuary" value="Febuary" />
                  <Select.Item label="March" value="March" />
                  <Select.Item label="April" value="April" />
                  
              </Select>

              <Select
                bg="#F9F9FA"
                borderRadius="3"
                mt="1"
                bg="#fff"
                minWidth="48%"
                accessibilityLabel="Choose Service"
                placeholder="Year"
                _selectedItem={{
                  bg: '#F9F9FA',
                  endIcon: <CheckIcon size={5} />,
                }}>
                  <Select.Item label="1998" value="1998" />
                  <Select.Item label="1999" value="1999" />
                  <Select.Item label="2000" value="2000" />
                  <Select.Item label="2001" value="2001" />
                  <Select.Item label="2002" value="2002" />
                  <Select.Item label="2003" value="2003" />
                  <Select.Item label="2004" value="2004" />
                  
              </Select>
        
        
      </Stack>

      
      <Stack direction="row" space={5} my="5">
        <Text fontSize="16" color="#494949"> Date Ended </Text>
        <Box borderBottomColor="#DADADA" borderBottomWidth="1" mb="5" h="3" width="40"> </Box>
      </Stack>

      <Stack direction="row"  space={2} >

          <Select
                bg="#F9F9FA"
                borderRadius="3"
                mt="1"
                bg="#fff"
                minWidth="48%"
                accessibilityLabel="Choose Service"
                placeholder="Month"
                _selectedItem={{
                  bg: '#F9F9FA',
                  endIcon: <CheckIcon size={5} />,
                }}>
                  <Select.Item label="January" value="January" />
                  <Select.Item label="Febuary" value="Febuary" />
                  <Select.Item label="March" value="March" />
                  <Select.Item label="April" value="April" />
                  
              </Select>

              <Select
                bg="#F9F9FA"
                borderRadius="3"
                mt="1"
                bg="#fff"
                minWidth="48%"
                accessibilityLabel="Choose Service"
                placeholder="Year"
                _selectedItem={{
                  bg: '#F9F9FA',
                  endIcon: <CheckIcon size={5} />,
                }}>
                  <Select.Item label="1998" value="1998" />
                  <Select.Item label="1999" value="1999" />
                  <Select.Item label="2000" value="2000" />
                  <Select.Item label="2001" value="2001" />
                  <Select.Item label="2002" value="2002" />
                  <Select.Item label="2003" value="2003" />
                  <Select.Item label="2004" value="2004" />
                  
              </Select>
        
        
      </Stack>

      <Box mt="10%">
        <Checkbox colorScheme="info" size="md">
           Present
        </Checkbox>
      </Box>

      <Box alignItems="center" mt="30%">
              <Button bg="#1C70EE" borderRadius="md" w="100%" p="4" onPress={()=>navigation.navigate("Medical_history_list")}>
                   Save
              </Button>
          </Box>
      
      
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