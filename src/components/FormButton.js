import React from 'react';
import {
Text,
TouchableOpacity,
StyleSheet,
Dimensions,
ActivityIndicator,
Modal,
View
} from 'react-native';
import { enableScreens } from 'react-native-screens';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const FormButton = ({isLogin,buttonTitle, ...rest}) => {
return(
  
    isLogin ? 
    (
      <View  style = {styles.buttonContainer}{...rest}>
      {/* <View style = {styles.activityIndicatorWrapper}> */}
      <ActivityIndicator animating={true} />
      {/* </View> */}
      </View>
      ) :
  (<TouchableOpacity style = {styles.buttonContainer}{...rest}>
    <Text style = {styles.buttonText}>
    {buttonTitle}
    </Text>
  </TouchableOpacity>)
  
  
)
}

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer : {
    marginTop : 0,
    width:'100%',
    height : HEIGHT/18,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText : {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
  activityIndicatorWrapper : {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})