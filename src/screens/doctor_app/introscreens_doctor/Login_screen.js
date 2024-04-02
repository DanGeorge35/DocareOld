import * as React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NativeBaseProvider,HStack,Spacer,FormControl,Input,
    Box, Badge,CheckIcon,Center,Flex,WarningOutlineIcon,
    VStack,Select,Stack,Image,Text,
    useToast,FlatList,
     Button,Pressable,
    
   } from "native-base";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import EmailView from './includes/Email_view'
import PhoneView from './includes/Phone_view'

  
    const getLabelStyle = (index) => {
      // Define different colors for each tab
      const colors = ['red', 'green', 'blue']; // Add more colors if needed
      return {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors[index % colors.length], // Apply different color for each tab
      };
    };


 

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#1C70EE'}}
      style={styles.tab_view}

     // labelStyle={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' }} F4F7FA

      indicatorContainerStyle={{fontSize: 34, color: 'blue',backgroundColor: '#F4F7FA' }}

     activeColor="#1C70EE" 
     inactiveColor="#000000"
      //getLabelText={({ route }) => route.title}
      tabStyle={{ paddingVertical: 10,  paddingHorizontal: 20,color:'#000' }}

    //   renderIcon={({ route, focused, color }) => (
    //     <FontAwesome5
    //       name={focused ? 'albums' : 'albums-outlined'}
    //       color={color}
    //     />
    //     )}

    renderLabel={({ route, focused, color }) => (
        <Text style={{ color, margin: 8 }}>
          {route.title}
        </Text>
      )}


    />
  );

const Login_screen = ({navigation}) => {

    const layout = useWindowDimensions();
    
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'email', title: 'Email' },
      { key: 'phone_no', title: 'Phone Number' },
    ]);
  

    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'email':
            return (
                <EmailView 
                    onForgotPass={() => navigation.navigate('Forget_pass')}
                    onSignUp={() => navigation.navigate('Personal_info_doc')}
                    onLogin={() => navigation.navigate('Profile')}
                 />
            )
           case 'phone_no':
            return (
            <PhoneView 
            onForgotPass={() => navigation.navigate('Forget_pass')}
            onSignUp={() => navigation.navigate('Personal_info_doc')}
            onLogin={() => navigation.navigate('Profile')}
         />
            )
          default:
            return null;
        }
      };

    return (
<VStack space="2"  px="3"  backgroundColor="#fff" flex={1} >

       
     <Stack direction="row" space={20} mt="5" ml="3"  w="300" h="50">

            <Text mt="2" onPress={() => navigation.navigate('Account_type')}>
              <FontAwesome5 name="arrow-left" size={20}   color="#000000" /> 
            </Text>

          <Box alignItems="center">

          
             <Text fontSize="35" fontWeight="bold" color="#1C70EE" lineHeight="38.84" fontFamily="HelveticaNeueBold"> Do'Care </Text>
             <Text mt="-2" color="#1C70EE" > DOCTORS </Text>

            {/* <Image w="256" h="36" source={require( "../../../assets/docare_doc.png") } alt="Alternate Text"  />  */}
          </Box>

      </Stack>

         <Text mt="20" fontSize="xl" color="#000000" fontWeight="600" lineHeight="25"  fontFamily="Inter-Black">  Great to have you back! </Text>


        
       {/* <Box alignItems="center" mt="0">
            <Text style={styles.DocareText}>Do'Care</Text>
        </Box> */}

      <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        activeTintColor="red" 
       // swipeEnabled={false}
        initialLayout={{ width: 335 }}
      />



</VStack>
    
    );

}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:'#FFFFFF',
      color:'#fff',
      justifyContent:"center",
      alignItems:"center",
      //width: 375, 
     // height: 812, 
    },
    DocareText: {
        fontSize:40,
    
       color:'#1C70EE',
       lineHeight: 48.84,
       fontFamily:'HelveticaNeueBold',
      
      marginTop:60,
     
   },

    tab_view:{
        //width:335,
        height:50,
        //backgroundColor:'#F4F7FA',
        marginTop:30,
       // marginLeft:20,
        color:'red'
       
    },

    form_view:{
        width:335,
        height:291,
        marginTop:45
    },


    doCare_text:{
            fontFamily:'Helvetica Neue',
            fontWeight:'700',
            fontSize:40,
            lineHeight:48.84,
            color:'#1C70EE'
    },

    doCare_view:{
        width:156,
        height:49,
        marginTop:41,
        marginLeft:110
    },

    lang_view:{
        width:331,
        height:27,
        marginTop:20,
        marginLeft:14,
        color:'#000000',
    },

    lang_text: {
        width:245,
        fontSize:20,
        fontWeight:'bold',
        color:'#000000',
       lineHeight: 27,
       fontFamily:'General Sans',
     
   },

   get_start_btn:{
    width:327,
    height:52,
     marginTop:0,
     //color:"red",
    // backgroundColor:"1C70EE",
    
    borderRadius:12,
    padding: 16,
},

});

export default Login_screen