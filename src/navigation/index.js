import React from 'react';
import AuthStack from './Routes'
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext, AuthProvider} from '../navigation/AuthProvider';
const AppNavigator =()=>{
  return(
   
   // <NavigationContainer>
   <AuthProvider>
  <AuthStack/>
  </AuthProvider>
 // </NavigationContainer>
  
  )
}

export default AppNavigator;