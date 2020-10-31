import React from 'react';
import {
Text,
TouchableOpacity,
StyleSheet,
Dimensions
} from 'react-native';
import { enableScreens } from 'react-native-screens';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const FormButton = ({buttonTitle, ...rest}) => {
return(
  <TouchableOpacity style = {styles.buttonContainer}{...rest}>
    <Text style = {styles.buttonText}>
    {buttonTitle}
    </Text>
  </TouchableOpacity>
)
}

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer : {
    marginTop : 10,
    width:'100%',
    height : HEIGHT/15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText : {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    //fontFamily: 'Lato-Regular',
  }
})