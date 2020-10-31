import React from 'react';
import {useContext,useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
} from 'react-native'
import InputForm from '../components/InputForm';
import SocialButton from '../components/SocialButton';
import FormButton from '../components/FormButton';
//const {login, googleLogin, fbLogin} = useContext(AuthContext);

const LoginScreen = ({navigation}) => {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  return(
    <View style = {styles.container}>
    <Image
    source={require('../../assets/Images/archive_white_96x96.png')}
    style = {styles.logo}
    />
    <Text>Firebase Social</Text>
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
    <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
    </TouchableOpacity>
    <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            //onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            //onPress={() => googleLogin()}
          />
          <TouchableOpacity
          style = {styles.forgotButton}
          onPress = {()=>{}}
          >
          <Text style = {styles.navButtonText}>
          Don't have an acount? Create here
          </Text>
          </TouchableOpacity>
        </View>

    </View>
  )


}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#f9fafd',
    backgroundColor : 'grey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    //fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    //fontFamily: 'Lato-Regular',
  },
})

