import React from 'react';
import {
  TextInput,
  View,
  StyleSheet
} from 'react-native';

const Textfield = props => {
const {
onChangeText,
autoCapitalize,
autoCorrect,
defaultValue
} = props;

return(<TextInput
  autoCapitalize = {autoCapitalize}
  autoCorrect = {autoCorrect}
  defaultValue = {defaultValue}
  onChangeText = {onChangeText.bind(this)}
  style = {styles.hello}
  />)


}

export default Textfield;

const styles = StyleSheet.create({
  hello : {
    height : 50,
    width : '80%',
    borderColor : 'red',
    borderWidth : 1,
    marginTop:10
  }
})