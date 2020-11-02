import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet,Dimensions} from 'react-native';
import {Hideo} from 'react-native-textinput-effects';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import FormalButton from '../components/FormalButton';
import Colors from '../utils/Colors';
import Constants from '../utils/Constants';
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
    iconName={Constants.Icon.user}
    iconColor={Colors.white}
    onChangeText = {(userEmail) => setEmail(userEmail)}
    iconBackgroundColor={Colors.black}
    inputStyle={{ color: Colors.black }}
    Keyboard-Type = {Constants.KeyboardType.email_address}
    autoCapitalize={Constants.none}
    autoCorrect={false}
    label = {Constants.email}
    placeholder = {Constants.email}
  />
  <Hideo
  style = {styles.input}
    iconClass={FontAwesomeIcon}
    iconName={Constants.Icon.lock}
    iconColor={Colors.white}
    onChangeText = {(password) => setPassword(password)}
    iconBackgroundColor={Colors.black}
    inputStyle={{ color: Colors.black }}
    Keyboard-Type = {Constants.KeyboardType.email_address}
    autoCapitalize={Constants.none}
    autoCorrect={false}
    label = {Constants.password}
    placeholder = {Constants.password}
    secureTextEntry = {true}
  />
  <Hideo
  style = {styles.input}
    iconClass={FontAwesomeIcon}
    iconName={Constants.Icon.lock}
    iconColor={Colors.white}
    onChangeText = {(password) => setConfirmPassword(password)}
    iconBackgroundColor={Colors.black}
    inputStyle={{ color: Colors.black }}
    Keyboard-Type = {Constants.KeyboardType.email_address}
    autoCapitalize={Constants.none}
    autoCorrect={false}
    label = {Constants.password}
    placeholder = {Constants.password}
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
            buttonTitle={Constants.FaceBook}
            btnType={Constants.Icon.facebook}
            color={Colors.fbLocal}
            backgroundColor="#e6eaf4"
            //onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle={Constants.Google}
            btnType={Constants.Icon.google}
            color={Colors.googleLocal}
            backgroundColor="#f5e7ea"
            //onPress={() => googleLogin()}
          />
      </View>
    
    <FormalButton 
    message = {Constants.alreadyHaveAccount}
    buttonTitle = {Constants.signIn}
    onPress = {()=>navigation.navigate(Constants.navigationRoutes.Login)}
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
    color: Colors.gulfBlue,
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