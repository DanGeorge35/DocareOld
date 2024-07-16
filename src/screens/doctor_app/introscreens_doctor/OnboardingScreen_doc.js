import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16, color: '#fff', fontWeight: '700'}}>Done</Text>
  </TouchableOpacity>
);

const OnboardingScreen_doc = ({navigation}) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.DocareText}>Doctor's care</Text>

      <Onboarding
        DoneButtonComponent={Done}
       // onSkip={() => navigation.replace('Personal_info_doc')}
        onSkip={() => navigation.replace('Login_screen')}
        onDone={() => navigation.navigate('Personal_info_doc')}
        pages={[
          {
            backgroundColor: '#1C70EE',
            image: (
              <Image
                source={require('../../../../assets/onboard5.png')}
                style={[
                  styles.image,
                  {height: Dimensions.get('window').width * 0.45},
                ]}
                resizeMode="contain"
              />
            ),
            title: 'Emergency Assistance, Rapid Response',
            subtitle:
              'In urgent situations, DOCARE is here for you. Instant access to medical professionals for rapid emergency assistance.',
          },
          {
            backgroundColor: '#4285ea',
            image: (
              <Image
                source={require('../../../../assets/onboard1.png')}
                style={styles.image}
                resizeMode="contain"
              />
            ),
            title: 'Expert Consultations, Anytime',
            subtitle:
              'Access trusted doctors for virtual appointments, anytime, anywhere. DOCARE makes healthcare convenient',
          },
          {
            backgroundColor: '#166ced',
            image: (
              <Image
                source={require('../../../../assets/onboard2.png')}
                style={styles.image}
                resizeMode="contain"
              />
            ),
            title: 'Revolutionizing Healthcare',
            subtitle:
              'Experience the future of healthcare with DOCARE. Seamless, tech-driven consultations.',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  DocareText: {
    position: 'absolute',
    top: '0',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 48.84,
    zIndex: 1,
  },
  image: {
    height: Dimensions.get('window').width * 0.75,
  },
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    paddingBottom: 20,
  },
});

export default OnboardingScreen_doc;
