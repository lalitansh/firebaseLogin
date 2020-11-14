import React,{useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
//import console = require('console');





const PostCard = ({item}) => {
  // likeIcon = item.liked ? 'heart' : 'heart-outline';
  // likeIconColor = item.liked ? '#2e64e5' : '#333';

  const [like,setLike] = useState(null)

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
          <InteractionText>{commentText}</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};

export default PostCard;