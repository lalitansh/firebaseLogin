import React from 'react';
import { View,
Text,
Image, 
TouchableOpacity, 
StyleSheet,
Dimensions } from 'react-native';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
import Colors from '../utils/Colors'


import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? Colors.white : Colors.grey900;

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:'white'}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
       {...props}
    >
        <Text style={{fontSize:16, color:'white'}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16, color:'white'}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace('Login')}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            //backgroundColor: '#a6e4d0',
            backgroundColor : Colors.panegrey,
            image: <Image style ={{height:HEIGHT/5, aspectRatio:1}} source={require('../../assets/Images/reactIcon.png')} />,
            title: 'Connect to the World',
            subtitle: 'A New Way To Connect With The World',
          },
          {
            //backgroundColor: '#fdeb93',
            backgroundColor : Colors.indigo400,
            image: <Image style ={{height:HEIGHT/5, aspectRatio:1}} source={require('../../assets/Images/reactIcon.png')} />,
            title: 'Share Your Favorites',
            subtitle: 'Share Your Thoughts With Similar Kind of People',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image style ={{height:HEIGHT/5, aspectRatio:1}} source={require('../../assets/Images/reactIcon.png')} />,
            title: 'Become The Star',
            subtitle: "Let The Spot Light Capture You",
          },
        ]}
      />
    );
};

export default OnboardingScreen;
