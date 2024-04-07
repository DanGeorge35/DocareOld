import * as React from 'react';
import {
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Image, Text, useToast} from 'native-base';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import EmailView from './includes/Email_view';
import PhoneView from './includes/Phone_view';

const getLabelStyle = index => {
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
    indicatorStyle={{backgroundColor: '#2ae4ff'}}
    style={styles.tab_view}
    indicatorContainerStyle={{
      fontSize: 34,
      color: '#fff',
      backgroundColor: '#1356b863',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    }}
    activeColor="#fff"
    inactiveColor="#fff"
    tabStyle={{paddingVertical: 1, paddingHorizontal: 20, color: '#000'}}
    renderLabel={({route, focused, color}) => (
      <Text style={{color, margin: 3}}>{route.title}</Text>
    )}
  />
);

const Login_screen = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'email', title: 'Email'},
    {key: 'phone_no', title: 'Phone Number'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'email':
        return (
          <EmailView
            onForgotPass={() => navigation.navigate('Forget_pass')}
            onSignUp={() => navigation.navigate('Create_account')}
            onLogin={() => navigation.navigate('Profile')}
          />
        );
      case 'phone_no':
        return (
          <PhoneView
            onForgotPass={() => navigation.navigate('Forget_pass')}
            onSignUp={() => navigation.navigate('Create_account')}
            onLogin={() => navigation.navigate('Profile')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <View style={styles.inputContainer}>
          <Image
            source={require('../../../assets/DOc3.png')} // Specify the image source
            style={styles.logo} // Apply styles to the image
            resizeMode="contain" // Set resizeMode to control how the image should be resized
            alt="logo"
          />

          <Text
            style={{
              textAlign: 'center',
              color: '#499eff',
              fontWeight: '700',
              fontSize: 22,
            }}>
            DOCARE
          </Text>

          <Text
            lineHeight="25"
            fontFamily="Inter-Black"
            onPress={() => navigation.navigate('Account_type')}
            style={{textAlign: 'center', color: '#1C70EE', marginTop: 50}}>
            Login to your Account
          </Text>

          <TabView
            navigationState={{index, routes}}
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            onIndexChange={setIndex}
            activeTintColor="red"
            // swipeEnabled={false}
            initialLayout={{width: '100%'}}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 220,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
    minHeight: '100%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
  },

  DocareText: {
    fontSize: 40,
    // fontWeight:'bold',
    color: '#1C70EE',
    lineHeight: 48.84,
    fontFamily: 'HelveticaNeueBold',
    //width:156,
    //height:49,
    marginTop: 60,
    // marginLeft:110
  },

  tab_view: {
    width: '100%',
    height: 50,
    backgroundColor: '#1C70EE',
    marginTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  form_view: {
    width: 335,
    height: 291,
    marginTop: 45,
  },

  doCare_text: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '700',
    fontSize: 40,
    lineHeight: 48.84,
    color: '#1C70EE',
  },

  doCare_view: {
    width: 156,
    height: 49,
    marginTop: 41,
    marginLeft: 110,
  },

  lang_view: {
    width: 331,
    height: 27,
    marginTop: 20,
    marginLeft: 14,
    color: '#000000',
  },

  lang_text: {
    width: 245,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 27,
    fontFamily: 'General Sans',
  },

  logo: {
    height: 80,
    width: 80,
    marginBottom: 10,
    alignSelf: 'center',
  },
  get_start_btn: {
    width: '90%',
    height: 52,
    marginTop: 0,
    borderRadius: 12,
    padding: 16,
  },
});

export default Login_screen;
