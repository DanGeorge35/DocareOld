import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Alert,
  StatusBar,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

const Lang_select = ({navigation}) => {
  const onPressButton = () => {
    Alert.alert('Button pressed');
  };

  // Define your list of languages
  const languages = [
    {id: 1, name: 'English'},
    {id: 2, name: 'Hausa'},
    {id: 3, name: 'Igbo'},
    {id: 4, name: 'Yoruba'},
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#007bff" />
      <LinearGradient
        colors={['#1C70EE', '#007bff']}
        start={{x: 0.2, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.rectangle1}
      />
      <LinearGradient
        colors={['#fff', '#007bff']}
        start={{x: 0.3, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.rectangle2}
      />
      <LinearGradient
        colors={['#007bff', '#1C70EE']}
        start={{x: 0.4, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.rectangle3}
      />
      <View style={styles.innerContainer}>
        <Text
          lineHeight="20"
          fontFamily="Inter-Black"
          style={{fontWeight: 700, fontSize: 18, color: '#007bff'}}>
          Language Selection
        </Text>

        <View style={styles.languagelist}>
          <FontAwesome5
            name="language"
            size={60}
            color="#007bff"
            style={{marginTop: -20, marginBottom: 40}}
          />
          {languages.map(language => (
            <TouchableOpacity
              key={language.id}
              style={styles.button}
              onPress={() => {
                // Handle language selection here
                AsyncStorage.setItem('userLanguage', language.name);
                navigation.navigate('Onboarding');
              }}>
              <Text>{language.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Button title="Press me" onPress={onPressButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bfd9ffa8',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 90,
    width: 90,
    marginBottom: 120,
  },
  languagelist: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 10,
  },
  button: {
    padding: 20,
    marginVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: '70%',
    backgroundColor: '#1C70EE',
  },
  rectangle1: {
    marginTop: 30.32,
    marginLeft: 100.92,
    width: 309.71,
    height: 63.81,
    transform: [{rotate: '-42.57deg'}],
    opacity: 0.1,
    borderRadius: 60,
  },
  rectangle2: {
    marginTop: 70.32,
    marginLeft: 190.92,
    width: 500.21,
    height: 63.81,
    transform: [{rotate: '-42.57deg'}],
    opacity: 0.1,
    borderRadius: 60,
  },
  rectangle3: {
    marginTop: 490.32,
    marginLeft: 390.92,
    width: 394.21,
    height: 63.81,
    transform: [{rotate: '-42.57deg'}],
    opacity: 0.1,
    borderRadius: 60,
  },
});

export default Lang_select;
