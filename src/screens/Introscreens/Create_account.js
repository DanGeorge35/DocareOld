/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {Image, Text, useToast} from 'native-base';

import Create_account_name from './includes/Create_account_name';

import Create_account_password from './includes/Create_account_password';

import Create_account_contacts from './includes/Create_account_contacts';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: '#1C70EE', height: 4}}
    style={styles.tab_view}
    // labelStyle={{ fontSize: 24, fontWeight: 'bold', color: '#FFFFFF' }} F4F7FA

    indicatorContainerStyle={{
      fontSize: 34,
      color: 'blue',
      backgroundColor: '#F4F7FA',
      display: 'none',
    }}
    activeColor="#1C70EE"
    inactiveColor="#000000"
    tabStyle={{paddingVertical: 10, paddingHorizontal: 20, color: '#000'}}
    renderLabel={({route, focused, color}) => (
      <Text style={{color, margin: 8}}>{route.title}</Text>
    )}
  />
);

const moveNextTab = () => {
  console.log('helloo');
};

const Create_account = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'name', title: 'NAME'},
    {key: 'contact', title: 'CONTACT'},
    {key: 'password', title: 'AUTH'},
  ]);

  const renderScene = ({route}) => {
    // const [index, setIndex] = useState(0);
    switch (route.key) {
      case 'name':
        return <Create_account_name onNext={() => setIndex(1)} />;
      case 'contact':
        return <Create_account_contacts onNext={() => setIndex(2)} />;
      case 'password':
        return (
          <Create_account_password
            onNext={() => navigation.navigate('Success_page')}
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
          <TabView
            navigationState={{index, routes}}
            renderTabBar={renderTabBar}
            renderScene={renderScene}
            onIndexChange={setIndex}
            activeTintColor="red"
            swipeEnabled={false}
            initialLayout={{width: '100%'}}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    backgroundColor: '#fff',
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
    display: 'none',
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

  lang_view: {
    width: 331,
    height: 27,
    marginTop: 30,
    marginLeft: 14,
    color: '#000000',
  },

  logo: {
    height: 80,
    width: 80,
    marginBottom: 50,
    alignSelf: 'center',
  },

  lang_text: {
    width: 245,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    lineHeight: 27,
    fontFamily: 'General Sans',
  },

  get_start_btn: {
    width: 327,
    height: 52,
    marginTop: 0,
    //color:"red",
    // backgroundColor:"1C70EE",

    borderRadius: 12,
    padding: 16,
  },
});

export default Create_account;
