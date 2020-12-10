import React,{Component,useState} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Colors from '../utils/Colors'

class Comments extends Component {



render(){
  const {Comments} = this.props.route.params
  return(
   
    
<KeyboardAwareScrollView 
    contentContainerStyle={styles.scrollContainer}
    >


{/* <TouchableOpacity 
onPress = {setModalVisibility}
style = {{width : WIDTH , 
height  : 45 ,
alignItems : 'center',
justifyContent : 'center',
borderBottomWidth : 0.3,
borderBottomColor : 'darkgrey',
backgroundColor : 'lightgrey',
borderTopLeftRadius : 10,
borderTopRightRadius : 10,
}}
>
<Text style = {{
  fontSize:15,
  fontWeight : '500'
}}>Comments</Text>
</TouchableOpacity> */}
<FlatList 
style = {{
  height :200
}}
keyExtractor={item=>item.id}
showsVerticalScrollIndicator={false}
data={Comments}
renderItem={({item}) => 
<View style = {{marginTop:10,flexDirection : 'row',}}>
<Image style = {{height: 60, width: 60, marginLeft : 10}}source = {item.userImage}/>
<View style = {{marginLeft : 10}} >
<Text style = {{marginTop : 10, color : 'grey'}}>{item.userName}</Text>
<Text style = {{fontSize:17}}>{item.comment}</Text>
<Text style = {{fontSize:11, color:'black'}}>{item.time}</Text>
</View>

</View> }
/>
<View style = {{flexDirection:'row', 
//backgroundColor : 'grey',
alignItems : 'center'
}}>
<TextInput
    placeholder = 'post comment here...'  
    style={{backgroundColor:'white', 
    margin: 5,
    width:'70%', 
    height: 50, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius : 20,
   }}
   autoFocus = {true}
    onChangeText={text => setText(text)}
    //onFocus = {()=>setEnabled(true)}
  />
  <TouchableOpacity 
  style = {{width : '25%',
  backgroundColor : Colors.indigo500,
  borderRadius : 10,
  height : 45,
  margin: 5,
  alignContent : 'center',
  justifyContent : 'center'}}>
  <Text style  = {{
    color : Colors.white,
    alignSelf:'center'
  }}>Send</Text>
  </TouchableOpacity>
  </View> 


</KeyboardAwareScrollView>

   
  )
}
}

export default Comments;

const styles = StyleSheet.create({
  scrollContainer: {
    //backgroundColor: "yellow",
    flexGrow:1 //added flexGrow
  },
})
