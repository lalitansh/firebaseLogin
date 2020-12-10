

//import { navigate } from "@react-navigation/routers/lib/typescript/src/CommonActions";
import * as RootNavigation from './RootNavigation';
import {Comments} from '../components/PostCard'

export function calling(){
  console.log('comment', Comments)
  
  RootNavigation.navigate('AddPost')
  
}