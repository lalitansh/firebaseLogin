import React, { useEffect,useContext,useState } from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  Dimensions,
  Modal,
  ActivityIndicator
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import SocialButton from '../components/SocialButton';
import FormButton from '../components/FormButton';
import FormalButton from '../components/FormalButton';
import auth from '@react-native-firebase/auth';
import Colors from '../utils/Colors';
import Constants,{validation} from '../utils/Constants'
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
import { Hideo } from 'react-native-textinput-effects';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loader from '../components/Loader'
import {AuthContext} from '../navigation/AuthProvider'
import SplashScreen from 'react-native-splash-screen';


const LoginScreen = ({navigation}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [showPassword,setShowPassword] = useState('eye-slash')
  const [showPass,setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const {login} = useContext(AuthContext);
  const [user,setUser] = useState(false)

  useEffect(()=>{
    //SplashScreen.hide();
  },[])

  const validate = (email,password) => {
     {
    console.log(email);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      console.log("Email is Not Correct");
      alert(validation.invalidEmailMessage)
      return false;
    }else if(password === ""){
      alert(validation.enterPassword)
    }
    else {
    console.log("Email is Correct");
     setLoading(true)
     setUser(true)
     login(email,password)
    }
  }
}


  const changeIcon=()=>{
    if (showPassword === 'eye-slash'){
      setShowPassword('eye')
      setShowPass(true)
    }else{
      setShowPassword('eye-slash')
      setShowPass(false)
    }
  }
  return(
   
    <KeyboardAwareScrollView 
    contentContainerStyle={styles.scrollContainer}
    >
      
    <View pointerEvents={user ? "none" : "auto"} style = {styles.container}>

    {/* <Loader loading = {loading} /> */}
     
    <Image
    source={require('../../assets/Images/reactIcon.png')}
    style = {styles.logo}
    />
    <Text style = {styles.text}>{Constants.appName}</Text>
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
    height = {45}
    fontSize = {14}
  />
  <View style = {{flexDirection:'row'}}>
  <Hideo
    style = {styles.input}
    iconClass={FontAwesomeIcon}
    iconName={Constants.Icon.lock}
    //iconName={'eye'}
    iconColor={Colors.white}
    onChangeText = {(password) => setPassword(password)}
    iconBackgroundColor={Colors.black}
    inputStyle={{ color: Colors.black }}
    Keyboard-Type = {Constants.KeyboardType.email_address}
    autoCapitalize={Constants.none}
    autoCorrect={false}
    label = {Constants.password}
    placeholder = {Constants.password}
    secureTextEntry = {showPass ? false : true}
    height = {45}
    fontSize = {14}
  />
    <View style = {styles.iconWrapper}>
    <FontAwesomeIcon onPress={()=>changeIcon()} style = {styles.icon} name = {showPassword} size = {18} color = 'black'/>
    </View>
    </View>
  </View>


    {user ? <FormButton 
    buttonTitle = "Sign In"
    isLogin = {true}
    onPress={() => validate(email,password)}
    /> : <FormButton 
    buttonTitle = "Sign In"
    onPress={() => validate(email,password)}
    /> }
    



    <FormalButton 
    message = {Constants.forgotDetails}
    buttonTitle = {Constants.getHelpSigning}
    />
    <View>
      <View style = {styles.socialButton}>
          <SocialButton
            buttonTitle={Constants.FaceBook}
            btnType={Constants.Icon.facebook}
            color={Colors.fbLocal}
            backgroundColor={Colors.catskillWhite}
            //onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle={Constants.Google}
            btnType={Constants.Icon.google}
            color={Colors.googleLocal}
            backgroundColor={Colors.dawnPink}
            //onPress={() => googleLogin()}
          />
    </View>
          </View>
          <View style = {styles.signup}>
          <FormalButton 
          message = {Constants.donthaveAccountMessage}
          buttonTitle = {Constants.signUp}
          onPress = {()=>navigation.navigate(Constants.navigationRoutes.Signup)}
          />
          </View>
         
         
    </View>
     </KeyboardAwareScrollView>
   
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
    marginTop:0
  },
  text: {
    ...Platform.select({
      android:{
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: Colors.gulfBlue,
      },
      ios:{
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: Colors.gulfBlue,
      }
    })
  },
  scrollContainer: {
    backgroundColor: "yellow",
    flexGrow:1 //added flexGrow
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
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

