import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import Textfield from '../components/Textfield';
import {func} from 'prop-types';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {calling} from './functions';
import * as RootNavigation from './RootNavigation';
import {Comments} from '../components/PostCard'

const Others = () => {
  useEffect(() => {
    console.log('updated', countryCode);
    
  }, [countryCode]);

  const [value, onChangeText] = useState('Useless Placeholder');
  const [text, setText] = useState({});
  const [countries, setCountries] = useState([]);
  const [countryCode, setCountryCode] = useState(+91);
  const [desiredCountry, setDesiredCountry] = useState([]);
  const [name , setName] =useState('lalitansh');
  
  const countryCodeApiCall = async () => {
    try {
      const response = await fetch(
        'https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json',
      );
      const json = await response.json();
      // just log ‘json’
      setCountries(json);

      let dialc = countries.map((data, i) => {
        console.log('dialc', dialc);
        return data.dial_code;
      });

      countries.map((data, i) => {
        console.log('dial', data.dial_code);

        return (
          <View
            style={{
              justifyContent: 'center',

              backgroundColor: 'red',
              height: 50,
              width: '100%',
            }}>
            <Text
              style={{
                fontSize: 10,
                color: 'black',
              }}>
              {data.code}
            </Text>
          </View>
        );
      });
      console.log(json);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <View style={{flex: 1, alignItems: 'center'}}>
        {/* <Textfield 
    onChangeText = {text => onChangeText(text)}
    defaultValue = {value}
    /> */}
        <TouchableOpacity
          style={{
            height: 50,
            width: '80%',
            backgroundColor: 'red',
            marginTop: 10,
          }}
          onPress={() => calling(Comments)}>
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
            }}>
            Comments
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 50,
            width: '80%',
            backgroundColor: 'red',
            marginTop: 10,
          }}
          onPress={() => countryCodeApiCall()}>
          <Text
            style={{
              alignSelf: 'center',
              color: 'white',
            }}>
            Api Call
          </Text>
        </TouchableOpacity>

        <Picker
          style={{alignSelf: 'center', width: 30, height: 20}}
          mode="dropdown"
          selectedValue={countryCode}
          onValueChange={text => {
            setCountryCode(text);
          }}>
          {countries.map((item, i) => {
            return (
              <Picker.item
                label={item.dial_code}
                value={item.dial_code}
                key={i}
              />
            );
          })}
        </Picker>

        <ScrollView>
          {countries.map((data, i) => {
            return (
              <View
                style={{
                  margin: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '80%',
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    color: 'black',
                  }}>
                  {data.code}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: 'black',
                  }}>
                  {data.name}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: 'black',
                  }}>
                  {data.dial_code}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default Others;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#333333',
  },
});
