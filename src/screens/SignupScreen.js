import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet,Dimensions,ScrollView} from 'react-native';
import {Sae,Hideo,Kohana} from 'react-native-textinput-effects';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import FormalButton from '../components/FormalButton';
import auth from '@react-native-firebase/auth';
import Colors from '../utils/Colors';
import Constants from '../utils/Constants';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//import {AuthContext} from '../navigation/AuthProvider'
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const register = async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password).then((value, error)=>{
        if (value != null) {
          console.log('sign up value', value)
        }else{
          console.log('error is ',error)
        }
      })
      console.log('email is = > ', email)
      console.log('password is = > ', password)
    } catch (e) {
      console.log("error",e);
    }
  }

  const validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      alert("You have entered an invalid email address!")
      return false;
    }else if(password.length <= 5){
      alert("Password should be atleast 6 characters long!")
    }else if(password !== confirmPassword){
      alert("Password and confirm Password should be same!")
    }else {
      register(email,password)
    }
  }

  //const {register} = useContext(AuthContext);

  return (
    
    <KeyboardAwareScrollView 
     contentContainerStyle={styles.scrollContainer}
    >
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
    placeholder = {Constants.email}
    defaultValue = {email}
    fontSize = {14}
    height = {45}
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
    placeholder = {Constants.password}
    secureTextEntry = {true}
    defaultValue = {password}
    fontSize = {14}
    height = {45}
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
    placeholder = {Constants.password}
    secureTextEntry = {true}
    fontSize = {14}
    height = {45}
  />
  </View>

      <FormButton
        buttonTitle="Sign Up"
        onPress={() => validate(email)}
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

    <View style = {styles.signup}>
    <FormalButton
    message = {Constants.alreadyHaveAccount}
    buttonTitle = {Constants.signIn}
    onPress = {()=>navigation.navigate(Constants.navigationRoutes.Login)}
    />
    </View>
    </View>
    </KeyboardAwareScrollView>
    
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
    marginTop : 50,
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
    ...Platform.select({
      android:{
        flex:1,
    fontSize : 9,
    fontFamily : 'Lato-Regular',
    color : '#333',
    justifyContent : 'center',
    alignItems : 'center',
    width: '100%',
    
      },
      ios : {
        flex:1,
    fontSize : 9,
    fontFamily : 'Lato-Regular',
    color : '#333',
    justifyContent : 'center',
    alignItems : 'center',
    width: '100%',
      }
    })
    
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
  scrollContainer: {
    backgroundColor: "yellow",
    flexGrow:1 //added flexGrow
  },
  signup : {
    flex:1,
    justifyContent : 'flex-end',
    
  },

});

