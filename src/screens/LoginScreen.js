import React from 'react';
import {useContext,useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  Dimensions
} from 'react-native'
import InputForm from '../components/InputForm';
import SocialButton from '../components/SocialButton';
import FormButton from '../components/FormButton';
import FormalButton from '../components/FormalButton';
import SignupScreen from './SignupScreen';
import Colors from '../utils/Colors'
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
//const {login, googleLogin, fbLogin} = useContext(AuthContext);

const LoginScreen = ({navigation}) => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  return(
    <View style = {styles.container}>
    <Image
    source={require('../../assets/Images/reactIcon.png')}
    style = {styles.logo}
    />
    <Text style = {styles.text}>SocialAppLS</Text>
    <InputForm
    labelValue = {email}
    onChangeText = {(userEmail) => setEmail(userEmail)}
    placeholderText = "Email"
    iconType = "user"
    Keyboard-Type = "email-address"
    autoCapitalize="none"
    autoCorrect={false}
    />
    <InputForm
    labelValue = {password}
    onChangeText = {(password) => setPassword(password)}
    placeholderText = "password"
    iconType = "lock"
    secureTextEntry = {true}
    />
    <FormButton 
    buttonTitle = "Sign In"
    //onPress={() => login(email, password)}
    />
    <FormalButton 
    message = "Forgot your login details?"
    buttonTitle = "Get help signing in."
    />
    <View>
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
          </View>
          <View style = {styles.signup}>
          <FormalButton 
          message = "Don't have an account?"
          buttonTitle = "Sign up."
          onPress = {()=>navigation.navigate('Signup')}
          />
          </View>
        

    </View>
  )


}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor : Colors.gainsboro,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
    marginTop:65
  },
  text: {
    ...Platform.select({
      android:{
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      ios:{
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      }
    })
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  socialButton: {
    flexDirection : 'row',
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  signup : {
    flex:1,
    justifyContent : 'flex-end',
  }
})

