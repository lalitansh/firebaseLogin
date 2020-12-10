import * as React from 'react';
import {CommonActions,StackActions} from '@react-navigation/native'


//import console = require('console');
export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();




export function push(...args) {
  navigationRef.current.dispatch(StackActions.push(...args));
}


export function navigate(routeName, params) {
  console.log('routes')
  console.log(isReadyRef)
  console.log('navigationRef',navigationRef)
  if (isReadyRef.current && navigationRef.current) {
    console.log('routeName')
    // Perform navigation if the app has mounted
    navigationRef.dispatch(
      CommonActions.navigate({
        name : routeName,
        params : {
          params
        }
        
      })
    )
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}