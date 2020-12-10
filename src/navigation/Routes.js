import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import SplashScreen from 'react-native-splash-screen';
import { navigationRef, isReadyRef } from '../screens/RootNavigation';


import AuthStack from './AuthStack';
import AppStack from './AppStack';
//import console = require('console');
//import console = require('console');



const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    SplashScreen.hide()
    // let thisIs = navigationRef.current.getRootState()
    // console.log('thisIs',thisIs)
    
    console.log('isReadyRed',isReadyRef)
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  // useEffect(() => {
  //   return () => {
  //     isReadyRef.current = false
  //   };
  // }, []);

  if (initializing) return null;

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        
        isReadyRef.current = true;
      }}
    >
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;