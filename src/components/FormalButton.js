import React from 'react';
import {
Text,
TouchableOpacity,
StyleSheet,
Dimensions,
View,
} from 'react-native';
import { enableScreens } from 'react-native-screens';
import Colors from '../utils/Colors'

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const FormalButton = ({message,buttonTitle, ...rest}) => {
return(
  <View style = {styles.container}>
  <Text style= {styles.text}>{message}</Text>
  <TouchableOpacity style = {styles.buttonContainer}{...rest}>
    <Text style = {styles.buttonText}>
    {buttonTitle}
    </Text>
  </TouchableOpacity>
  </View>
)
}

export default FormalButton;

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    margin:15
  },
  text : {
    fontSize: 13,
    //fontWeight: 'bold',
    color: Colors.grey700,
    fontFamily: 'Lato-Regular',
    marginBottom : 5
    
  },
  buttonText : {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.richBlack,
    fontFamily: 'Lato-Regular',
  }
})