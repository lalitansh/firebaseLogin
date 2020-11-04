import React, { useEffect, useState } from 'react';
import {
View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import Onboarding from '../screens/Onboarding'
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(()=>{
    AsyncStorage.getItem('alreadyLaunched').then((value)=>{
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true)
      }else{
        setIsFirstLaunch(false)
      }
    })
  },[])

  if (isFirstLaunch === null){
    return null;
  }else if(isFirstLaunch === true){
    routeName = 'Onboarding';
  }else{
    routeName = 'Login';
  }

  return(
<Stack.Navigator initialRouteName = {routeName}
headerMode = 'screen'>
<Stack.Screen 
name = "Onboarding"
component = {Onboarding}
options={({navigation}) => ({
headerShown : false 
})}
/>
<Stack.Screen name = "Login"
component = {LoginScreen}
options={({navigation}) => ({
  title: 'Login',
  headerStyle: {
    backgroundColor: '#f9fafd',
    shadowColor: '#f9fafd',
    elevation: 0,
  },
  headerLeft : ()=> {
    
  }
  })}
/>
<Stack.Screen name = "Signup"
component = {SignupScreen}
options={({navigation}) => ({
  title: 'Signup',
  headerStyle: {
    backgroundColor: '#fff',
    shadowColor: '#f9fafd',
    elevation: 0,
  },
  headerLeft: () => (
    <View style={{marginLeft: 10}}>
      <Ionicons 
        name="arrow-back-sharp"
        size={23}
        backgroundColor="#fff"
        color="#333"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  ),
})}
/>
</Stack.Navigator>
  )
}

export default AuthStack;