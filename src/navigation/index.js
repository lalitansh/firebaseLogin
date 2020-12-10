import React from 'react';
import AuthStack from './Routes'

import {AuthContext, AuthProvider} from '../navigation/AuthProvider';
const AppNavigator =()=>{
  return(
   
 
   <AuthProvider>
  <AuthStack/>
  </AuthProvider>
 
  
  )
}

export default AppNavigator;