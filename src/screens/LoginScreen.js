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
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import SocialButton from '../components/SocialButton';
import FormButton from '../components/FormButton';
import FormalButton from '../components/FormalButton';
import Colors from '../utils/Colors'
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
import { Hideo } from 'react-native-textinput-effects';
//const {login, googleLogin, fbLogin} = useContext(AuthContext);

const Done = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16, color:'white'}}>Done</Text>
  </TouchableOpacity>
);

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
    label = 'email'
    placeholder = "email"
  />
  <Hideo
  style = {styles.input}
    iconClass={FontAwesomeIcon}
    iconName={'lock'}
    iconColor={'white'}
    onChangeText = {(password) => setEmail(password)}
    iconBackgroundColor={'black'}
    inputStyle={{ color: '#464949' }}
    Keyboard-Type = "email-address"
    autoCapitalize="none"
    autoCorrect={false}
    label = 'password'
    placeholder = "password"
    secureTextEntry = {true}
  />
  </View>
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
    height : HEIGHT/6.5,
    borderColor : '#ccc',
   
    alignItems : 'center',
    //backgroundColor : '#fff'
  },
})

