import React,{useEffect} from 'react';
import {View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Dimensions, 
  Image, 
  ScrollView,
  KeyboardAvoidingView,
Keyboard,
TouchableWithoutFeedback} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen';
const WIDTH = Dimensions.get('window').width;
import PostCard from '../components/PostCard';

import {
  Container,
} from '../styles/FeedStyles';

const Posts = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../../assets/Images/reactIcon.png'),
    postTime: '4 mins ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../../assets/Images/reactIcon.png'),
    liked: true,
    likes: 14,
    comments: '5'
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../../assets/Images/reactIcon.png'),
    postTime: '2 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: 8,
    comments: '0'
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../../assets/Images/reactIcon.png'),
    postTime: '1 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../../assets/Images/reactIcon.png'),
    liked: true,
    likes: 1,
    comments: '0'
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../../assets/Images/reactIcon.png'),
    postTime: '1 day ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../../assets/Images/reactIcon.png'),
    liked: true,
    likes: 22,
    comments: '4'
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../../assets/Images/reactIcon.png'),
    postTime: '2 days ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: 0,
    comments: '0'
  },
];



const HomeScreen = ({navigation}) => {
  

  return (
    
    <ScrollView>
    <Container>
      <>
      <View style = {{width :'100%', paddingBottom : 10}}>
        <Text style  = {{fontSize :20, fontWeight:'600', paddingLeft : 10}}>Trending</Text>
      </View>
      </>
      <View style = {{ flex: 1,
       borderBottomColor:'lightgrey', 
       borderBottomWidth : 10, 
       borderTopColor : 'lightgrey', 
       borderTopWidth : 10, 
       marginBottom:20, padding:10}}>
      <Carousel 
              //ref={(c) => { this._carousel = c; }}
              data={Posts}
              renderItem={({item}) => <View style ={{backgroundColor:'black', borderRadius : 20}}><Image
              //style={{height : 170, width : 140, alignSelf : 'center'}}
              source={item.userImg}
            />
            </View>}
              sliderWidth={WIDTH}
              sliderHeight={200}
              itemWidth={120}
              itemHeight={150}
              height ={200}
            />
             </View>
             <View style = {{width : '100%',
            flex:1}}>
      <FlatList 
        data={Posts}
        renderItem={({item}) => <PostCard navigation={navigation} item={item} />}
        keyExtractor={item=>item.id}
        showsVerticalScrollIndicator={false}
      />
      </View>
    </Container>
    </ScrollView>
    
  );
};

export default HomeScreen;