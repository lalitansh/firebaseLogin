import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet,Dimensions} from 'react-native';
import {Hideo} from 'react-native-textinput-effects';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import FormalButton from '../components/FormalButton';
import Colors from '../utils/Colors'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
//import {AuthContext} from '../navigation/AuthProvider';
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  //const {register} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

    <View style = {styles.inputContainer}>
    <Hideo
    style = {styles.input}
    iconClass={FontAwesomeIcon}
    iconName={'user'}
    iconColor={'white'}
    onChangeText = {(userEmail) => setEmail(userEmail)}
    iconBackgroundColor={'black'}
    inputStyle={{ color: '#464949' }}
    Keyboard-Type = "email-address"
    autoCapitalize="none"
    autoCorrect={false}
    value = {email}
    placeholder = "email"
  />
  <Hideo
    style = {styles.input}
    iconClass={FontAwesomeIcon}
    iconName={'lock'}
    iconColor={'white'}
    onChangeText = {(password) => setPassword(password)}
    iconBackgroundColor={'black'}
    inputStyle={{ color: '#464949' }}
    Keyboard-Type = "email-address"
    autoCapitalize="none"
    autoCorrect={false}
    defaultValue = {password}
    placeholder = "password"
    secureTextEntry = {true}
  />
  <Hideo
  style = {styles.input}
    iconClass={FontAwesomeIcon}
    iconName={'lock'}
    iconColor={'white'}
    onChangeText = {(password) => setConfirmPassword(password)}
    iconBackgroundColor={'black'}
    inputStyle={{ color: '#464949' }}
    Keyboard-Type = "email-address"
    autoCapitalize="none"
    autoCorrect={false}
    defaultValue = {confirmPassword}
    placeholder = "confirm Password"
    secureTextEntry = {true}
  />
  </View>

      <FormButton
        buttonTitle="Sign Up"
        onPress={() =>{}}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

     
      <View style = {styles.socialButton}>
          <SocialButton
            buttonTitle="Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            //onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            //onPress={() => googleLogin()}
          />
      </View>
    
    <FormalButton 
    message = "Already Have an account?"
    buttonTitle = "Sign in."
    onPress = {()=>navigation.navigate('Login')}
    />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#f9fafd',
    backgroundColor : Colors.gainsboro,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
  socialButton: {
    flexDirection : 'row',
  },
  input : {
    //padding:10,
    flex:1,
    fontSize : 12,
    fontFamily : 'Lato-Regular',
    color : '#333',
    justifyContent : 'center',
    alignItems : 'center',
    width: '100%',
  },
  inputContainer : {
    marginTop : 5,
    marginBottom : 10,
    width : '100%',
    height : HEIGHT/4.5,
    borderColor : '#ccc',
    alignItems : 'center',
    //backgroundColor : '#fff'
  },

});