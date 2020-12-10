import React,{useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/Colors';
import {Header} from '@react-navigation/stack';
import {
View,
Text,
Modal,
FlatList,
Animated,
StyleSheet,
Image,
Dimensions,
ScrollView,
TouchableWithoutFeedback,
TextInput,
KeyboardAvoidingView,
TouchableOpacity,
Platform,
Keyboard,
Button

} from 'react-native';

import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/FeedStyles';
import { addComment } from '@babel/types';
const WIDTH = Dimensions.get('window').width;
//import console = require('console');

export const Comments = [
  {
    id : '1',
    userImage : require('../../assets/Images/reactIcon.png'),
    userName : '@lalitansh',
    comment : 'hello this is demo comment',
    time : '15h'
  },
  {
    id : '2',
    userImage : require('../../assets/Images/reactIcon.png'),
    userName : '@lalitansh',
    comment : 'hello this is demo comment',
    time : '13h'
  },
  {
    id : '3',
    userImage : require('../../assets/Images/reactIcon.png'),
    userName : '@lalitansh',
    comment : 'hello this is demo comment',
    time : '12h'
  },
  {
    id : '4',
    userImage : require('../../assets/Images/reactIcon.png'),
    userName : '@lalitansh',
    comment : 'hello this is demo comment',
    time : '20h'
  },
  {
    id : '5',
    userImage : require('../../assets/Images/reactIcon.png'),
    userName : '@lalitansh',
    comment : 'hello this is demo comment',
    time : '10h'
  },
  {
    id : '6',
    userImage : require('../../assets/Images/reactIcon.png'),
    userName : '@lalitansh',
    comment : 'hello this is demo comment',
    time : '6h'
  },
  {
    id : '7',
    userImage : require('../../assets/Images/reactIcon.png'),
    userName : '@lalitansh',
    comment : 'hello this is demo comment',
    time : '8h'
  },
  {
    id : '8',
    userImage : require('../../assets/Images/reactIcon.png'),
    userName : '@lalitansh',
    comment : 'hello this is demo comment',
    time : '8h'
  },
  {
    id : '9',
    userImage : require('../../assets/Images/reactIcon.png'),
    userName : '@lalitansh',
    comment : 'hello this is demo comment',
    time : '8h'
  },
  {
    id : '10',
    userImage : require('../../assets/Images/reactIcon.png'),
    userName : '@lalitansh',
    comment : 'hello this is demo comment',
    time : '8h'
  },
]

const PostCard = ({navigation,item}) => {

  const [like,setLike] = useState(null)
  let opacity = new Animated.Value(0);
  // const animate = easing => {
  //   opacity.setValue(0);
  //   Animated.timing(opacity, {
  //     toValue: 1,
  //     duration: 1200,
  //     easing: Easing.ease
  //   }).start();
  // };

  // const size = opacity.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, 80]
  // });

  // const animatedStyles = [
  //   styles.box,
  //   {
  //     opacity,
  //     width: size,
  //     height: size
  //   }
  // ];    
   
  

  const changeLikes= (item)=>{
    console.log('calling changelikes')
    if (item.liked) {
    setLike(true)
    }else{
    setLike(false)
    }
    }

  if(like){
    likeIcon = 'heart'
    likeIconColor = '#2e64e5'
    item.liked = false
    item.likes++
  }else{
    likeIcon = 'heart-outline'
    likeIconColor = '#333'
    item.liked = true
    item.likes--
  }

  if (item.likes == 1) {
    likeText = '1 Like';
  } else if (item.likes > 1) {
    likeText = item.likes + ' Likes';
  } else {
    likeText = 'Like';
  }

  if (item.comments == 1) {
    commentText = '1 Comment';
  } else if (item.comments > 1) {
    commentText = item.comments + ' Comments';
  } else {
    commentText = 'Comment';
  }

  //changeLikes(item)
  return (

<>

    <Card>
      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg != 'none' ? <PostImg source={item.postImg} /> : <Divider />}

      <InteractionWrapper>
        <Interaction active={item.liked}>
          <Ionicons onPress = {()=> changeLikes(item)} name={likeIcon} size={25} color={likeIconColor} />
          <InteractionText onPress = {()=> changeLikes(item)} active={item.liked}>{likeText}</InteractionText>
        </Interaction>
        <Interaction>
          <Ionicons name="md-chatbubble-outline" size={25} />
          <InteractionText onPress = {()=>navigation.navigate('Comments',{Comments})}>{commentText}</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
    
   
    
   </>
    
    
  );
};

export default PostCard;

const styles = StyleSheet.create({
  scrollContainer: {
    //backgroundColor: "yellow",
    flexGrow:1 //added flexGrow
  },
})